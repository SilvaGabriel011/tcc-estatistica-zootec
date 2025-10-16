import React, { useState, useEffect, useCallback } from 'react'
import { Streamlit } from 'streamlit-component-lib'

interface FilterOption {
  value: string
  label: string
  count?: number
}

interface FilterConfig {
  column: string
  type: 'select' | 'multiselect' | 'range' | 'search'
  options?: FilterOption[]
  min?: number
  max?: number
  step?: number
}

interface FilterComponentProps {
  filters: FilterConfig[]
  initialValues?: Record<string, any>
  onFilterChange?: (filters: Record<string, any>) => void
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filters,
  initialValues = {},
  onFilterChange
}) => {
  const [filterValues, setFilterValues] = useState<Record<string, any>>(initialValues)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Load saved filters from localStorage
  useEffect(() => {
    const savedFilters = localStorage.getItem('gado-gordo-filters')
    if (savedFilters) {
      try {
        const parsed = JSON.parse(savedFilters)
        setFilterValues(parsed)
      } catch (error) {
        console.warn('Failed to load saved filters:', error)
      }
    }
  }, [])

  // Save filters to localStorage
  useEffect(() => {
    localStorage.setItem('gado-gordo-filters', JSON.stringify(filterValues))
  }, [filterValues])

  // Notify Streamlit of filter changes
  useEffect(() => {
    Streamlit.setComponentValue({
      filters: filterValues,
      timestamp: Date.now()
    })
    
    if (onFilterChange) {
      onFilterChange(filterValues)
    }
  }, [filterValues, onFilterChange])

  const handleFilterChange = useCallback((column: string, value: any) => {
    setFilterValues(prev => ({
      ...prev,
      [column]: value
    }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilterValues({})
    localStorage.removeItem('gado-gordo-filters')
  }, [])

  const applyFilters = useCallback(() => {
    // Filters are automatically applied via useEffect
    // This is just for UI feedback
    console.log('Filters applied:', filterValues)
  }, [filterValues])

  const renderSelectFilter = (config: FilterConfig) => {
    const { column, options = [] } = config
    const value = filterValues[column] || ''

    return (
      <div key={column} style={{ marginBottom: '16px' }}>
        <label style={{
          display: 'block',
          marginBottom: '6px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          {column}
        </label>
        <select
          value={value}
          onChange={(e) => handleFilterChange(column, e.target.value || null)}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            backgroundColor: '#fff'
          }}
        >
          <option value="">Todos</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label} {option.count ? `(${option.count})` : ''}
            </option>
          ))}
        </select>
      </div>
    )
  }

  const renderMultiSelectFilter = (config: FilterConfig) => {
    const { column, options = [] } = config
    const value = filterValues[column] || []

    return (
      <div key={column} style={{ marginBottom: '16px' }}>
        <label style={{
          display: 'block',
          marginBottom: '6px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          {column}
        </label>
        <div style={{
          maxHeight: '120px',
          overflowY: 'auto',
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '8px',
          backgroundColor: '#fff'
        }}>
          {options.map((option) => (
            <label key={option.value} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4px',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={value.includes(option.value)}
                onChange={(e) => {
                  const newValue = e.target.checked
                    ? [...value, option.value]
                    : value.filter((v: string) => v !== option.value)
                  handleFilterChange(column, newValue.length > 0 ? newValue : null)
                }}
                style={{ marginRight: '8px' }}
              />
              <span style={{ fontSize: '14px' }}>
                {option.label} {option.count ? `(${option.count})` : ''}
              </span>
            </label>
          ))}
        </div>
      </div>
    )
  }

  const renderRangeFilter = (config: FilterConfig) => {
    const { column, min = 0, max = 100, step = 1 } = config
    const value = filterValues[column] || [min, max]

    return (
      <div key={column} style={{ marginBottom: '16px' }}>
        <label style={{
          display: 'block',
          marginBottom: '6px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          {column}: {value[0]} - {value[1]}
        </label>
        <div style={{ padding: '0 8px' }}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[0]}
            onChange={(e) => {
              const newMin = parseFloat(e.target.value)
              if (newMin <= value[1]) {
                handleFilterChange(column, [newMin, value[1]])
              }
            }}
            style={{
              width: '100%',
              marginBottom: '8px'
            }}
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[1]}
            onChange={(e) => {
              const newMax = parseFloat(e.target.value)
              if (newMax >= value[0]) {
                handleFilterChange(column, [value[0], newMax])
              }
            }}
            style={{
              width: '100%'
            }}
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: '#666',
          marginTop: '4px'
        }}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }

  const renderSearchFilter = (config: FilterConfig) => {
    const { column } = config
    const value = filterValues[column] || ''

    return (
      <div key={column} style={{ marginBottom: '16px' }}>
        <label style={{
          display: 'block',
          marginBottom: '6px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          {column}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => handleFilterChange(column, e.target.value || null)}
          placeholder="Digite para buscar..."
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
      </div>
    )
  }

  const renderFilter = (config: FilterConfig) => {
    switch (config.type) {
      case 'select':
        return renderSelectFilter(config)
      case 'multiselect':
        return renderMultiSelectFilter(config)
      case 'range':
        return renderRangeFilter(config)
      case 'search':
        return renderSearchFilter(config)
      default:
        return null
    }
  }

  const getActiveFilterCount = () => {
    return Object.values(filterValues).filter(value => 
      value !== null && 
      value !== undefined && 
      value !== '' && 
      !(Array.isArray(value) && value.length === 0)
    ).length
  }

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '12px 16px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
      }} onClick={() => setIsCollapsed(!isCollapsed)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3 style={{ margin: 0, fontSize: '16px', color: '#333' }}>
            🔍 Filtros Avançados
          </h3>
          {getActiveFilterCount() > 0 && (
            <span style={{
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '12px',
              padding: '2px 8px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {getActiveFilterCount()}
            </span>
          )}
        </div>
        <span style={{
          fontSize: '18px',
          transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
          transition: 'transform 0.3s ease'
        }}>
          ▼
        </span>
      </div>

      {/* Filter Content */}
      {!isCollapsed && (
        <div style={{ padding: '16px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '16px'
          }}>
            {filters.map(renderFilter)}
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'flex-end',
            paddingTop: '16px',
            borderTop: '1px solid #e0e0e0'
          }}>
            <button
              onClick={resetFilters}
              style={{
                padding: '8px 16px',
                border: '1px solid #dc3545',
                borderRadius: '4px',
                backgroundColor: '#fff',
                color: '#dc3545',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Limpar
            </button>
            <button
              onClick={applyFilters}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterComponent
