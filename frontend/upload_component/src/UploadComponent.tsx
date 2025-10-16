import React, { useState, useCallback, useMemo, useRef, memo } from 'react'
import { Streamlit } from 'streamlit-component-lib'

interface UploadComponentProps {
  maxFileSize?: number
  allowedTypes?: string[]
  chunkSize?: number
}

interface UploadProgress {
  file: File
  progress: number
  status: 'uploading' | 'processing' | 'completed' | 'error'
  error?: string
}

const UploadComponent: React.FC<UploadComponentProps> = memo(({
  maxFileSize = 100 * 1024 * 1024, // 100MB default
  allowedTypes = ['.xlsx', '.csv'],
  chunkSize = 1024 * 1024 // 1MB chunks
}) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploads, setUploads] = useState<UploadProgress[]>([])
  const [isUploading, setIsUploading] = useState(false)
  
  // Refs para performance
  const fileInputRef = useRef<HTMLInputElement>(null)
  const uploadTimeoutRef = useRef<NodeJS.Timeout>()

  // Memoizar validação para performance
  const validateFile = useCallback((file: File): string | null => {
    if (file.size > maxFileSize) {
      return `Arquivo muito grande. Máximo: ${Math.round(maxFileSize / 1024 / 1024)}MB`
    }
    
    const extension = '.' + file.name.split('.').pop()?.toLowerCase()
    if (!allowedTypes.includes(extension)) {
      return `Tipo de arquivo não suportado. Permitidos: ${allowedTypes.join(', ')}`
    }
    
    return null
  }, [maxFileSize, allowedTypes])

  const uploadFile = async (file: File) => {
    const validationError = validateFile(file)
    if (validationError) {
      setUploads(prev => [...prev, {
        file,
        progress: 0,
        status: 'error',
        error: validationError
      }])
      return
    }

    const uploadId = Date.now().toString()
    setUploads(prev => [...prev, {
      file,
      progress: 0,
      status: 'uploading'
    }])

    try {
      // Simulate chunked upload with progress
      const totalChunks = Math.ceil(file.size / chunkSize)
      
      for (let i = 0; i < totalChunks; i++) {
        const start = i * chunkSize
        const end = Math.min(start + chunkSize, file.size)
        const chunk = file.slice(start, end)
        
        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 100))
        
        const progress = Math.round(((i + 1) / totalChunks) * 90) // 90% for upload
        
        setUploads(prev => prev.map(upload => 
          upload.file === file 
            ? { ...upload, progress }
            : upload
        ))
      }

      // Update to processing status
      setUploads(prev => prev.map(upload => 
        upload.file === file 
          ? { ...upload, progress: 95, status: 'processing' }
          : upload
      ))

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500))

      // Complete upload
      setUploads(prev => prev.map(upload => 
        upload.file === file 
          ? { ...upload, progress: 100, status: 'completed' }
          : upload
      ))

      // Send file data to Streamlit
      const fileData = await fileToBase64(file)
      Streamlit.setComponentValue({
        file: {
          name: file.name,
          size: file.size,
          type: file.type,
          data: fileData
        },
        uploadId,
        status: 'completed'
      })

    } catch (error) {
      setUploads(prev => prev.map(upload => 
        upload.file === file 
          ? { 
              ...upload, 
              progress: 0, 
              status: 'error', 
              error: error instanceof Error ? error.message : 'Erro no upload'
            }
          : upload
      ))
    }
  }

  // Memoizar conversão de arquivo
  const fileToBase64 = useCallback((file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    files.forEach(uploadFile)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    files.forEach(uploadFile)
  }, [])

  // Memoizar formatação de tamanho
  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }, [])

  const getStatusIcon = (status: UploadProgress['status']) => {
    switch (status) {
      case 'uploading':
      case 'processing':
        return '⏳'
      case 'completed':
        return '✅'
      case 'error':
        return '❌'
      default:
        return '📄'
    }
  }

  const getStatusText = (status: UploadProgress['status']) => {
    switch (status) {
      case 'uploading':
        return 'Enviando...'
      case 'processing':
        return 'Processando...'
      case 'completed':
        return 'Concluído'
      case 'error':
        return 'Erro'
      default:
        return 'Aguardando...'
    }
  }

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Drop Zone */}
      <div
        style={{
          border: `2px dashed ${isDragOver ? '#007bff' : '#ccc'}`,
          borderRadius: '8px',
          padding: '40px 20px',
          textAlign: 'center',
          backgroundColor: isDragOver ? '#f8f9fa' : '#fff',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📁</div>
        <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>
          Arraste arquivos aqui ou clique para selecionar
        </h3>
        <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>
          Formatos aceitos: {allowedTypes.join(', ')} • Máximo: {Math.round(maxFileSize / 1024 / 1024)}MB
        </p>
        
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={allowedTypes.join(',')}
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </div>

      {/* Upload Progress */}
      {uploads.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#333' }}>Arquivos</h4>
          {uploads.map((upload, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '12px',
                backgroundColor: '#fff'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{getStatusIcon(upload.status)}</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>
                      {upload.file.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {formatFileSize(upload.file.size)}
                    </div>
                  </div>
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: upload.status === 'error' ? '#dc3545' : '#28a745'
                }}>
                  {getStatusText(upload.status)}
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{
                width: '100%',
                height: '6px',
                backgroundColor: '#e0e0e0',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <div
                  style={{
                    width: `${upload.progress}%`,
                    height: '100%',
                    backgroundColor: upload.status === 'error' ? '#dc3545' : '#007bff',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>

              {/* Error Message */}
              {upload.error && (
                <div style={{
                  marginTop: '8px',
                  padding: '8px',
                  backgroundColor: '#f8d7da',
                  border: '1px solid #f5c6cb',
                  borderRadius: '4px',
                  color: '#721c24',
                  fontSize: '12px'
                }}>
                  {upload.error}
                </div>
              )}

              {/* Progress Percentage */}
              {upload.status !== 'error' && upload.status !== 'completed' && (
                <div style={{
                  textAlign: 'right',
                  fontSize: '12px',
                  color: '#666',
                  marginTop: '4px'
                }}>
                  {upload.progress}%
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
})

// Display name para debugging
UploadComponent.displayName = 'UploadComponent'

export default UploadComponent
