## Executive Summary

Aplicação Streamlit "TCC Gado Gordo" para análise de dados de bovinos. Objetivo: tornar a aplicação mais robusta e flexível, com melhor validação e tratamento de dados, suporte a múltiplos formatos (Excel, CSV, Parquet), tratamento de erros aprimorado, expansão de funcionalidades de análise e visualização, e interface mais intuitiva. Tecnologias atuais: Streamlit, Pandas, NumPy, Plotly, SciPy. Entregáveis esperados: upload e validação de dados aprimorados, curadoria e limpeza automatizada, novas visualizações e análises estatísticas, exportações melhoradas, assistente IA refinado. Resultados esperados: maior confiabilidade, usabilidade e suporte a workflows de pesquisa e gestão pecuária, usando pacotes atualizados (ex: pyarrow para Parquet, pandera para validação).

## Core Functionalities

- **Flexible Data Ingestion**: Robust upload system supporting Excel, CSV, Parquet, and JSON with schema inference, type coercion, and file validation using latest pandas and pyarrow. (Priority: **High**)
- **Data Validation & Cleaning**: Comprehensive validation pipeline with rules, missingness handling, outlier detection, and automated cleaning steps (core/cleaning refactor) using pydantic and pandera for schemas. (Priority: **High**)
- **Advanced Analytics & Visualizations**: Expanded statistical analyses (descriptive, inferential, ROI calculations) and interactive Plotly visualizations (histograms, boxplots, scatter, correlation matrices) with configurable parameters. (Priority: **High**)
- **Enhanced Error Handling & UX**: Centralized error handling, user-friendly messages, input hints, improved Streamlit UI flow and guidance, and logging/telemetry for diagnostics. (Priority: **Medium**)
- **AI Assistant & Export Capabilities**: Improved AI assistant integration for insights and recommendations (using local/lighter LLMs or API) and flexible export options (Excel, CSV, PDF) with latest openpyxl and xlsxwriter. (Priority: **Medium**)

## Tech Stack

- **Frontend**: Streamlit
- **Data Processing**: Pandas, NumPy
- **Data Visualization**: Plotly
- **Mathematical computations**: SciPy
- **Excel file handling**: openpyxl
- **Data**: pyarrow
- **Utility**: python-magic
- **Validation**: pydantic, Cerberus, Great Expectations
- **Backend**: loguru, openai, xlsxwriter
- **Monitoring**: sentry-sdk
- **Machine Learning**: scikit-learn
- **Visualization**: seaborn
- **Linter**: black
- **Testing**: pytest

## Development Guidelines & Best Practices

Follow these guidelines while implementing the project:

- **Placeholder Images**: Use [Unsplash](https://unsplash.com) or [Picsum Photos](https://picsum.photos) for placeholder images
  - Example: `https://source.unsplash.com/random/800x600?nature`
  - Example: `https://picsum.photos/800/600`
- **Code Quality**: Write clean, maintainable code with proper comments and documentation
- **Testing**: Test each feature thoroughly before marking it as complete
- **Commit Messages**: Use clear, descriptive commit messages that reference the task/story ID
- **Error Handling**: Implement proper error handling and user-friendly error messages
- **Responsive Design**: Ensure all UI components work across mobile, tablet, and desktop devices
- **Accessibility**: Follow WCAG guidelines for accessible UI components
- **Performance**: Optimize images, minimize bundle sizes, and implement lazy loading where appropriate
- **Security**: Never commit API keys or sensitive credentials; use environment variables
- **API & Model Versions**: Always use the latest available APIs and models unless the user explicitly specifies a different version
- **Progress Updates**: Update task checkboxes in real-time as you work through the plan

## Project Timeline

This plan lays out your roadmap in **Milestones**, **Stories** with acceptance criteria, and **Subtasks**. Follow the plan task by task and update progress on milestones, stories, and subtasks immediately as you work on them based on the legend below.

**Progress Legend:**
- `- [ ]` = To-do (not started)
- `- [~]` = In progress (currently working on)
- `- [x]` = Completed (finished)
- `- [/]` = Skipped (not needed)

Tasks are categorized by complexity to guide time estimations: XS, S, M, L, XL, XXL.

### - [ ] **Milestone 1**: **Data ingestion and validation: robust multi-format upload, parsing, and validation of datasets.**

- [ ] **Upload CSV/Excel** - (S): As a: data analyst, I want to: upload CSV/Excel files, So that: I can ingest tabular data for analysis in the platform
  - **Acceptance Criteria:**
    - [ ] User can upload CSV and Excel files (.csv, .xlsx)
System validates file MIME types and extension
Upload supports large files with progress indicator
System reports error for unsupported formats or corrupted files
Uploaded data is parsed into a dataframe with correct schema
- [ ] **Auto-detect Format** - (M): As a: data analyst, I want to: auto-detect data format on upload (delimiters, headers, encoding), So that: I can seamlessly ingest data with minimal user configuration
  - **Acceptance Criteria:**
    - [ ] System detects delimiter (comma, semicolon, tab) and header presence automatically
Detected encoding is reported and applied
Incorrect or ambiguous formats prompt user confirmation
Successful ingestion after auto-detection preserves data integrity
- [ ] **Data Validation Feedback** - (M): As a: data steward, I want to: receive validation feedback on uploaded data (types, missing values, outliers), So that: I can ensure dataset quality before analysis
  - **Acceptance Criteria:**
    - [ ] Validation results show data type inference for each column
Missing values count per column is displayed
Outliers flagged using defined thresholds
Clear actionable feedback is presented to user
Validation results do not alter original data without user confirmation
- [ ] **Preview & Curate Columns** - (S): As a: data analyst, I want to: preview columns and curate (rename, reorder, drop) before analysis, So that: I can tailor dataset to modeling needs
  - **Acceptance Criteria:**
    - [ ] Column preview shows name, type, sample values
User can rename, reorder, or drop columns
Changes preview in real-time
Unsaved changes prompt before proceed
Column metadata persists for downstream steps
- [ ] **Robust Error Messages** - (S): As a: user, I want to: receive robust, actionable error messages during upload, So that: I can quickly resolve issues and retry
  - **Acceptance Criteria:**
    - [ ] Error messages identify failing step (file, format, data)
Suggestions for remediation provided
Error logs accessible to support
Errors do not corrupt existing dataset or session
Retry/abort options available
- [ ] **Support ZIP/JSON** - (L): As a: data engineer, I want to: upload ZIP archives and JSON files, So that: I can ingest compressed datasets and nested data without manual extraction
  - **Acceptance Criteria:**
    - [ ] ZIP archives are extracted and content presented for ingest
JSON files parsed with schema inference
Invalid/archive errors clearly communicated
Nested structures handled or flattened according to policy
Original files stored securely for audit trail
- [ ] **Retry Upload** - (XS): As a: user, I want to: retry an upload after failure, So that: I can recover from transient issues without restarting the process
  - **Acceptance Criteria:**
    - [ ] Retry button re-uploads the original file
Upload state resets appropriately on retry
No data loss on retry
User is informed of retry outcome (success/failure)
Failure limits and backoff strategy considered

### - [ ] **Milestone 2**: **Variable curation and data cleaning workflows to prepare datasets for analysis.**

- [ ] **Auto-detect Column Types (inScope:true)** - (S): As a: data scientist, I want to: auto-detect column data types in uploaded datasets, So that: I can establish accurate data types for downstream transformations and analyses
  - **Acceptance Criteria:**
    - [ ] Dataset uploaded with various column types (numeric, categorical, date) are automatically detected and labeled
Detection accuracy: non-numeric columns identified correctly with >95% accuracy on test sets
System handles missing or mixed-type columns gracefully without failing the detection
Resulting metadata is stored with dataset and reused in subsequent steps
Performance: column type detection completes within 2 seconds for typical SMB datasets
- [ ] **Missing Value Suggestions (inScope:true)** - (M): As a: data steward, I want to: receive missing value handling suggestions for each column, So that: I can apply appropriate imputation or deletion strategies
  - **Acceptance Criteria:**
    - [ ] For each column, system suggests at least one imputation method (mean/median for numeric, most frequent for categorical)
User can preview suggested imputations and select preferred method
System shows expected impact on summary statistics after imputation
Edge cases: columns with all values missing are handled with a default imputation suggestion
Audit trail: imputations applied are logged with timestamp and user
complexity
S
- [ ] **Standardize Units & Labels (inScope:true)**: 
- [ ] **Preview & Accept Transformations (inScope:true)**: 
- [ ] **Save/Load Curation Presets (inScope:true)**: 
- [ ] **Flag Inconsistent Records (inScope:true)**: 
- [ ] **Manual Variable Mapping (inScope:true)**: 
- [ ] **View Variable Glossary Link (inScope:false)**: 

### - [ ] **Milestone 3**: **Core analysis dashboard and visualization features: descriptive statistics and expanded visualizations.**

- [ ] **Upload Validation** - (M): As a: data analyst, I want to: upload data files (Excel/CSV) with validation checks, So that: data quality is ensured before analysis.
  - **Acceptance Criteria:**
    - [ ] User can upload Excel and CSV files successfully
System validates file type and size on upload
Invalid files are rejected with a clear error message
Uploaded data passes schema validation (required columns)
Audit log records for each upload attempt
- [ ] **Flexible Import** - (L): As a: data analyst, I want to: import data from multiple sources/formats (CSV, Excel, API), So that: analysis can proceed regardless of source system.
  - **Acceptance Criteria:**
    - [ ] Supports CSV, Excel import
API data fetch with basic auth optional
Error handling for source unavailability
Data mapping and type inference on import
Logs import activity
- [ ] **Advanced Visuals** - (L): As a: data viz specialist, I want to: add advanced visualizations (interactive plots, heatmaps), So that: users explore data more effectively.
  - **Acceptance Criteria:**
    - [ ] Supports interactive Plotly visuals
Heatmaps and multi-axis charts
Performance remains responsive with large datasets
Exports preserve visuals fidelity
- [ ] **Error Reporting** - (S): As a: user, I want to: have better error reporting and guidance, So that: issues are diagnosed quickly and correctly.
  - **Acceptance Criteria:**
    - [ ] Clear error messages with actionable guidance
Error logs for debugging
User-friendly stack traces avoided in UI
Retry mechanisms for recoverable errors
- [ ] **Descriptive Expansion** - (M): As a: data scientist, I want to: expand descriptive statistics suite (mean, median, std, quantiles, etc.), So that: users gain deeper insights.
  - **Acceptance Criteria:**
    - [ ] Calculates a comprehensive set of descriptive metrics
Handles missing values gracefully
Results are presented in exportable formats
Outputs integrate with existing dashboards
- [ ] **Export Enhancements** - (M): As a: analyst, I want to: enhance export options (Excel/CSV with charts), So that: users share results comprehensively.
  - **Acceptance Criteria:**
    - [ ] Exports include charts and summaries
Export preserves formatting
Supports bulk export with progress feedback
Export targets multiple formats and sheets
- [ ] **IA Assistant Integration** - (M): As a: user, I want to: integrate IA assistant to guide analysis, So that: users get contextual help and faster insights.
  - **Acceptance Criteria:**
    - [ ] IA assistant prompts contextually
Guided analysis steps
Fallback to manual mode
Performance impact within acceptable thresholds
- [ ] **Enhanced Plot Types: Add violin and heatmap visualizations with configurable options. inScope:true** - (M): As a: data analyst, I want to: add violin and heatmap visualizations with configurable options, So that: I can explore distributions and correlations more effectively within the visualization module.
  - **Acceptance Criteria:**
    - [ ] User can add violin plots and heatmaps with configurable parameters (color, axis, grouping)
Plots render correctly with responsive sizing
Exporters/filters preserve new plot types
Validation handles invalid configurations gracefully
New plots are accessible in UI without breaking existing charts
- [ ] **Interactive Filters: Allow users to apply multi-select and range filters to visualizations. inScope:true** - (S): As a: data analyst, I want to: allow users to apply multi-select and range filters to visualizations, So that: I can focus on specific data segments directly from charts.
  - **Acceptance Criteria:**
    - [ ] Multi-select filter supports at least 4 categories
Range filters work across numeric fields with min/max bounds
Filters update visualizations in real-time
Filtered data exports respect current filters
Edge cases with empty selections are handled gracefully
- [ ] **Export Charts: Enable export of Plotly charts as PNG/SVG and underlying data as CSV. inScope:true** - (M): As a: data analyst, I want to: export charts as PNG/SVG and underlying data as CSV, So that: I can share figures and raw data for reporting.
  - **Acceptance Criteria:**
    - [ ] Export to PNG/SVG works for all current charts
Data export CSV includes current view with applied filters
Export preserves chart styling and labels
Export fails gracefully with clear message and retry
Large data exports are streamed without blocking UI
- [ ] **Format Flex Support: Auto-detect and visualize data from Excel, CSV, and JSON uploads. inScope:true** - (M): As a: data analyst, I want to: auto-detect and visualize data from Excel, CSV, and JSON uploads, So that: I can analyze data from diverse sources without manual formatting.
  - **Acceptance Criteria:**
    - [ ] Uploads supported for Excel, CSV, JSON formats
Auto-detection identifies data types and headers
Appropriate visualizations render based on data shape
Error messages clear for unsupported formats
Robust handling of missing values across formats
- [ ] **Error Feedback: Show clear validation/error messages within visualization panel. inScope:true** - (S): As a: data analyst, I want to: show clear validation/error messages within visualization panel, So that: users understand issues without breaking workflow.
  - **Acceptance Criteria:**
    - [ ] Error messages are displayed unobtrusively within chart panels
Messages describe the issue and suggested corrective action
Focus remains on the chart with non-blocking behavior
Errors do not crash the page or lose user state
Logs capture error details for debugging (with consent)

### - [ ] **Milestone 4**: **AI assistant enhancements and glossary integration for user guidance and domain definitions.**

- [ ] **Expanded Analyses** - (M): As a: data analyst, I want to: expand analytical capabilities and generate deeper insights, So that: I can provide richer findings for stakeholders
  - **Acceptance Criteria:**
    - [ ] User can run expanded analyses with new parameter options
Results include expanded metrics and visuals
System handles larger datasets without error
Analyses preserve existing outputs for compatibility
Error handling for invalid parameters is robust
- [ ] **Advanced Visualizations** - (L): As a: user, I want to: access advanced visualizations (interactive plots, multi-series dashboards), So that: I can explore data more effectively
  - **Acceptance Criteria:**
    - [ ] Interactive plots render correctly
Multiple series can be compared on a single chart
Export of visuals to PNG/PDF works
Dashboard layout remains responsive
Performance under larger datasets is acceptable
- [ ] **Export Improvements** - (M): As a: data manager, I want to: export results with configurable formats and metadata, So that: I can share findings in preferred formats
  - **Acceptance Criteria:**
    - [ ] Export supports CSV/Excel with metadata
Exports include data validation status
Export performance is acceptable for large datasets
Export includes option to filter/transform data before export
Security: sensitive columns can be masked or excluded
- [ ] **IA Assistant Enhancements** - (M): As a: user, I want to: use an enhanced AI assistant with better context retention and paraphrasing capabilities, So that: I can get more accurate and concise guidance
  - **Acceptance Criteria:**
    - [ ] Assistant retains context across interactions
Paraphrasing is accurate with reduced repetition
User can trigger summaries and action items
Latency remains within acceptable bounds
Fails gracefully with clear messages when context is lost
- [ ] **Curadoria Workflow** - (M): As a: user, I want to: curate data assets and variables within the workflow, So that: I can ensure data quality and relevance for analyses
  - **Acceptance Criteria:**
    - [ ] Workflow can add/edit/remove variables
Validation rules apply to curated data
Audit trail of changes
User sees impact of curations on results
Exported datasets reflect curated state
- [ ] **Glossary UI** - (S): As a: user, I want to: access a glossary of terms within the UI, So that: I can understand domain terminology without leaving the app
  - **Acceptance Criteria:**
    - [ ] Glossary search and filter works
Terms link to definitions
Glossary adapts to context within AI assistant
Performance impact is minimal
- [ ] **Add Glossary Entry (admin)** - (M): As a: admin, I want to: add glossary term with definition and example, So that: I can enrich the glossary for user reference
  - **Acceptance Criteria:**
    - [ ] Admin can input term, definition, and example
Validation prevents empty fields and duplicates
New entry appears in glossary listing promptly
Audit trail of added entries
Permission check ensures only admins can add
- [ ] **InScope: Enhanced Glossary Import** - (L): As a: admin, I want to: import glossary entries from a file, So that: I can bulk populate glossary
  - **Acceptance Criteria:**
    - [ ] Admin can upload file (CSV/Excel)
System validates file structure and required fields
Imports sequentially with rollback on error
Duplicate detection and merge strategy
Audit log of imports
- [ ] **Search Term** - (S): As a: user, I want to: search glossary terms, So that: I can quickly find definitions
  - **Acceptance Criteria:**
    - [ ] Search field filters terms in real-time
Results show matching term and definition
No results shows friendly message
Search handles special characters
Performance acceptable for large glossaries
- [ ] **Export Glossary** - (M): As a: user, I want to: export glossary to Excel/CSV, So that: I can use definitions offline
  - **Acceptance Criteria:**
    - [ ] Export creates downloadable file in Excel/CSV
Includes term, definition, and example fields
Export respects current filter/search if applied
Export handles large glossaries without crashing
File is saved with meaningful name and timestamp
- [ ] **View Glossary** - (XS): As a: user, I want to: view glossary entries, So that: I can understand domain terms when analyzing data
  - **Acceptance Criteria:**
    - [ ] User can view a list of glossary terms
Glossary loads within 2 seconds
Entries display term, definition, and example where available
System handles empty glossary gracefully
Data is retrieved from new glossary service implemented in this scope

### - [ ] **Milestone 5**: **Exporting results, reports and ROI calculators; result presentation and export to Excel.**

- [ ] **Export CSV** - (S): As a: data analyst, I want to: export the current dataset to a CSV file, So that: I can share results with stakeholders in a portable format
  - **Acceptance Criteria:**
    - [ ] User can export data to CSV with default delimiter comma
Export selects all visible columns by default and allows column selection
Exported CSV includes header row and data rows accurately
System validates data integrity during export (no NaN corruption)
Exported file is downloadable within 5 seconds on moderate data sizes
- [ ] **Include Visuals** - (M): As a: data analyst, I want to: include visuals in the export, So that: I can share charts alongside data for better interpretation
  - **Acceptance Criteria:**
    - [ ] Export package includes charts as images or embedded visuals
Export supports multiple formats (CSV with visuals or zipped package)
Visuals correspond to selected data variables and timeframes
Export integrity checks ensure image/visual data is not corrupted
UI indicates which visuals are included in the export
- [ ] **Select Variables** - (XS): As a: data analyst, I want to: select variables to include in export, So that: I can control which data is exported for relevance and size
  - **Acceptance Criteria:**
    - [ ] User can toggle variables to include/exclude
Selected variables persist for the session
Export respects the current variable selection when generating CSV
Validation prevents selecting more than available variables
UI provides search and filter for variables
- [ ] **Export Metadata** - (S): As a: data analyst, I want to: export metadata about the dataset and export process, So that: I can document provenance and data lineage
  - **Acceptance Criteria:**
    - [ ] Metadata includes dataset schema, data sources, variable descriptions
Export log records timestamp and user action
Exported metadata is in a standard format (JSON or YAML)
Metadata file accompanies the main export
System ensures metadata is consistent with exported data
