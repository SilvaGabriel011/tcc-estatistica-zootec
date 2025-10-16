## Executive Summary

TCC Gado Gordo is a Brazilian Streamlit application for bovine market data analysis. It provides data upload and cleaning, statistical analysis (using SciPy, StatsModels, scikit-learn), interactive Plotly visualizations, Excel/PDF export (OpenPyXL, XlsxWriter, ReportLab), AI assistant integration (Ollama, Google Generative AI/Gemini, OpenAI) with streaming responses, and a reference library via Semantic Scholar. Core modules include AI integration, data cleaning, stats, plots, exports, notifications, theme management, and feature flags. Pages cover upload/analysis, results/export, AI assistant, references, batch analysis, dataset comparison, data quality, and synthetic data generation. The stack uses Streamlit frontend with FastAPI/Uvicorn backend, Redis/Celery for background tasks, and WebSockets for real-time features. Recent issues to address: syntax/indentation errors, DataFrame boolean evaluation errors, import problems, corrupted strings, complex error handling, and general code quality, performance, and UX improvements. Expected outcomes: stable, maintainable codebase; improved performance and error handling; enhanced developer experience and user-facing reliability; and scoped new features marked with inScope flag.

## Core Functionalities

- **Data Upload & Cleaning**: Upload multiple cattle market datasets, perform memory-optimized cleaning, validation, missing value handling, and preprocessing steps. (Priority: **High**)
- **Statistical Analysis & Visualizations**: Run statistical tests, outlier detection, and interactive Plotly visualizations with dashboards and comparison tools. (Priority: **High**)
- **AI Assistant Integration**: Chat interface using Ollama/Gemini/OpenAI for data-aware conversations, streaming responses, model selection, and citation support via reference library. (Priority: **Medium**)
- **Export & Reporting**: Advanced Excel and PDF export with charts, pivot tables, conditional formatting, and batch export capabilities. (Priority: **Medium**)
- **Performance, QA & Maintainability**: Improve code quality, error handling, fix syntax/indentation issues, add feature flags, logging, background tasks, and tests for reliability. (Priority: **High**)

## Tech Stack

- **Frontend**: Streamlit
- **Data Processing**: Pandas, NumPy
- **Data Visualization**: Plotly
- **Mathematical computations**: SciPy
- **Analytics**: StatsModels
- **Machine Learning**: Scikit-learn
- **Backend**: OpenPyXL, ReportLab, requests
- **Export**: XlsxWriter
- **Backend API development**: FastAPI
- **Server**: Uvicorn
- **Data Storage**: Redis
- **Task Management**: Celery
- **AI Writing Assistance**: Google Generative AI
- **AI Insights**: OpenAI
- **HTML Analysis**: Ollama
- **Real-time communication**: WebSockets
- **Templating**: Jinja2
- **Configuration**: python-dotenv

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

### - [ ] **Milestone 1**: **User onboarding & authentication: landing, auth, settings, and role management.**

- [ ] **Login Validation** - (S): As a: user, I want to: login with valid credentials, So that: I can access my account securely
  - **Acceptance Criteria:**
    - [ ] User can login with valid credentials and is redirected to the dashboard
System rejects invalid credentials with a clear error message
Session tokens are generated and stored securely
Login attempt logs are recorded for security monitoring
- [ ] **Password Reset** - (M): As a: user, I want to: reset my password securely, So that: I can regain access if I forget credentials
  - **Acceptance Criteria:**
    - [ ] User can initiate password reset with registered email
Reset token sent via email with expiry
New password adheres to policy and is stored securely
Audit log records password reset events
- [ ] **AI Model Selection** - (M): As a: user, I want to: select AI model for assistant interactions, So that: I can balance speed, cost, and quality
  - **Acceptance Criteria:**
    - [ ] User can choose from available models (e.g., GPT-4, GPT-
    - [ ] 5)
Selected model persists per session or user
Model change applies to subsequent AI interactions
Invalid selection is blocked with user feedback
Backend routing directs requests to chosen model
- [ ] **Diagnostic Mode** - (M): As a: admin, I want to: enable diagnostic mode for deeper logging and metrics, So that: I can troubleshoot issues faster
  - **Acceptance Criteria:**
    - [ ] Admin can toggle diagnostic mode
Diagnostic logs including user actions are captured
Performance impact minimized
Logs accessible via secure interface
Diagnostic mode can be disabled safely
- [ ] **Data Retention** - (M): As a: admin, I want to: configure data retention policies, So that: we comply with regulations and storage usage is optimized
  - **Acceptance Criteria:**
    - [ ] Policy can be set for retention period by data category
Policy applied to new and existing data where applicable
Audit trail for policy changes
Storage usage reports reflect retention actions
Policy changes propagate to background cleanup jobs
- [ ] **Privacy & API Keys** - (L): As a: admin, I want to: manage privacy settings and API keys securely, So that: we protect user data and integrate with external services
  - **Acceptance Criteria:**
    - [ ] API keys stored securely with rotation
Only authorized admins can view/edit keys
Privacy policy configurations are exposed to admin
Audit logs for access to keys
Keys can be rotated and invalidated
- [ ] **Notification Preferences** - (S): As a: user, I want to: configure notification channels and thresholds, So that: I receive timely alerts without overload
  - **Acceptance Criteria:**
    - [ ] User can enable/disable push/email/SMS notifications
Users can set thresholds for alerts
Preferences persist across sessions
Notifications respect user time zones
System delivers test notification
- [ ] **Export Settings** - (S): As a: admin, I want to: export settings to a file (CSV/JSON), So that: I can backup and share configuration
  - **Acceptance Criteria:**
    - [ ] Admin can export current settings in CSV and JSON
Export includes all relevant preferences and model choices
Export respects user permissions
Export trigger is auditable
Export file integrity validated on download
- [ ] **Theme Toggle** - (XS): As a: user, I want to: toggle between light and dark themes, So that: I can customize the UI to my preference
  - **Acceptance Criteria:**
    - [ ] User can switch theme via UI toggle
Theme persists across sessions
Theme toggle applies to all pages without reload
Invalid theme input is ignored gracefully
Theme preference stored securely in local storage or user profile

### - [ ] **Milestone 2**: **Core data ingestion: upload, cleaning, data quality checks, and generator for synthetic data.**

- [ ] **Upload File** - (S): As a: data analyst, I want to: upload a data file (CSV/Excel), So that: I can begin cleaning and analyzing the dataset
  - **Acceptance Criteria:**
    - [ ] User can upload CSV and Excel files
System validates file type and size
Uploaded data is parsed into a dataframe without errors
Invalid files produce a clear error message
Memory footprint is within defined limits
- [ ] **Data Preview** - (S): As a: data analyst, I want to: preview the uploaded data (head, tail, sample, columns), So that: I can quickly inspect structure and contents
  - **Acceptance Criteria:**
    - [ ] Preview shows first/last N rows
Columns inferred with types
Missing values count per column
Sample of 100 rows or less
Loading time under 2 seconds for typical file sizes
- [ ] **Auto-clean Suggestions** - (M): As a: data steward, I want to: receive automatic cleaning suggestions (trim whitespace, handle nulls, deduplicate), So that: I can apply quality improvements quickly
  - **Acceptance Criteria:**
    - [ ] Suggestions include whitespace trimming, null handling, and deduplication
One-click apply of suggestions
Preview changes before applying
No data loss during cleaning steps
- [ ] **Column Mapping** - (M): As a: data engineer, I want to: map source columns to target schema (rename, type casting), So that: I can align data for downstream processes
  - **Acceptance Criteria:**
    - [ ] User can map any column to a new name
Type casting rules are applied where specified
Validation ensures no required columns are dropped
Mappings persist for session or save to profile
- [ ] **Validate Types** - (M): As a: data scientist, I want to: validate column data types against schema (numeric, date, categorical), So that: I can ensure model-ready or analysis-ready data
  - **Acceptance Criteria:**
    - [ ] Types validated per column
Mismatched types flagged with actionable errors
Option to coerce types with user confirmation
Audit trail of changes for traceability
- [ ] **Show Errors** - (S): As a: user, I want to: surface errors encountered during upload/cleaning, So that: I can quickly identify and fix issues
  - **Acceptance Criteria:**
    - [ ] Error messages contextual and actionable
Errors categorized by stage (upload/cleaning)
Retry options after fixes
Error logging to persistent store
- [ ] **Memory Optimization** - (L): As a: system administrator, I want to: optimize memory usage during upload and cleaning (chunk processing, garbage collection), So that: I can handle large datasets efficiently
  - **Acceptance Criteria:**
    - [ ] Process data in chunks
Garbage collection triggered appropriately
Peak memory usage within defined limit
Benchmark shows improved throughput
- [ ] **Auto-Clean Suggestions - AI-driven cleaning recommendations (inScope:true)** - (L): 
  - **Acceptance Criteria:**
    - [ ] AI suggests cleaning actions per dataset
Actions are non-destructive by default with preview
User can apply suggestions
Audit trail of applied actions
Performance acceptable for typical SMB datasets
- [ ] **Batch Quality Jobs - Run data quality checks for multiple files (inScope:true)** - (L): 
  - **Acceptance Criteria:**
    - [ ] Queue batch jobs across multiple files
Progress tracking and summaries
Retries for failed jobs
Results consolidated dashboard
Resource usage limits and throttling

### - [ ] **Milestone 3**: **Analysis dashboard and visualization: statistical analysis, plots, comparison, and batch processing.**

- [ ] **Analysis Overview** - (S): As a: data analyst, I want to: view a concise overview of analytics results within the dashboard, So that: I can quickly assess overall performance and trends
  - **Acceptance Criteria:**
    - [ ] The overview aggregates key metrics (e.g., total records, completed analyses) and displays them on the dashboard
Overview updates in real-time or on refresh with minimal latency
Users can customize which metrics are visible
The data source for metrics is validated and secure
Edge: handles empty datasets gracefully
- [ ] **Interactive Charts** - (M): As a: data analyst, I want to: interact with charts (hover, filter, zoom) on the dashboard, So that: I can explore data subsets and derive insights
  - **Acceptance Criteria:**
    - [ ] Charts respond to hover with tooltips
Filters apply to corresponding charts without full page reload
Zoom/pan functionality works on at least two chart types
State persists across interactions until user resets
Edge: maintains performance with large datasets
- [ ] **Statistical Summary** - (S): As a: data analyst, I want to: generate a statistical summary panel (means, medians, quartiles, std dev) for the current dataset, So that: I can quickly understand distribution and central tendencies
  - **Acceptance Criteria:**
    - [ ] Summary includes mean, median, mode, std dev, min/max, quartiles
Summary updates when dataset changes
Handles missing values gracefully
Exportable as a CSV/JSON fragment for downstream tools
Edge: supports optional percentile ranks
- [ ] **Comparative Analysis** - (M): As a: data analyst, I want to: compare multiple datasets side-by-side within the dashboard, So that: I can identify relative performance and differences
  - **Acceptance Criteria:**
    - [ ] Users can select multiple datasets for comparison
Comparison view shows aligned metrics and visualizations
Differing data schemas are normalized for comparison
Performance remains acceptable with 3+ datasets
Export of comparison results supported
- [ ] **Data Quality Flags** - (S): As a: data steward, I want to: see data quality flags (incomplete, inconsistent, outliers) on the dashboard, So that: I can quickly identify issues needing remediation
  - **Acceptance Criteria:**
    - [ ] Flags appear on affected records or aggregates
Flag definitions are clear and configurable
Drill-down to problematic records supported
Automated alerts for critical quality issues
Edge: integration with data cleaning module for remediation suggestions
- [ ] **Export Results** - (S): As a: user, I want to: export dashboard results and charts to a file (CSV, Excel, PDF), So that: I can share analyses with stakeholders
  - **Acceptance Criteria:**
    - [ ] Export button triggers download in selected format
Export includes visible charts and tables
Formats preserve styling where possible
Large datasets handled via chunked export or streaming
Error handling with user-friendly messages
- [ ] **Batch Summary** - (S): As a: data analyst, I want to: see a batch run summary (status, progress, results) for batch analyses, So that: I can monitor long-running tasks
  - **Acceptance Criteria:**
    - [ ] Batch summary updates in real-time
Shows progress, ETA, and results
Ability to pause/resume/cancel batch jobs
Error handling and retry mechanisms
Audit trail of batch actions
- [ ] **Compare Summary** - (S): As a: data analyst, I want to: compare dataset summaries across sources, So that: I can identify discrepancies quickly and decide on data quality actions
  - **Acceptance Criteria:**
    - [ ] User can generate a side-by-side summary comparison for two datasets
System highlights mismatches in key fields (count, mean, missing values)
Comparison report can be exported as CSV or PDF
System handles datasets with different schemas by aligning common fields
Performance: comparison results return within 5 seconds for datasets up to 1M rows
- [ ] **Statistical Diff** - (M): As a: data scientist, I want to: compute statistical differences between datasets, So that: I can quantify and validate changes between versions
  - **Acceptance Criteria:**
    - [ ] Statistical tests (e.g., t-test, KS-test) run on aligned features
Results include p-values, effect sizes, and confidence intervals
Edge case handling for non-numeric columns and missing data
Outputs are exportable and plottable
Computation completes within reasonable time for typical SMB datasets
- [ ] **Export Comparison** - (S): As a: analyst, I want to: export the entire comparison results, So that: I can share findings with stakeholders
  - **Acceptance Criteria:**
    - [ ] Export in multiple formats (CSV, Excel, PDF)
Preserve formatting and legends in exports
Includes metadata about datasets and comparison parameters
Handles large exports efficiently (streaming or chunked)
Validation: exported file matches in-app results
- [ ] **Visual Diff** - (S): As a: product analyst, I want to: render visual diff between datasets, So that: I can quickly spot differences via charts and overlays
  - **Acceptance Criteria:**
    - [ ] Interactive visual diffs (overlays, delta plots) render for numeric features
Non-numeric features are summarized with counts and distributions
Exported visuals maintain fidelity in PDF/PNG exports
Interaction updates reflected in reports
Performance: visuals render under 2 seconds for typical SMB sizes
- [ ] **Batch Upload Processing** - (S): As a: data user, I want to: batch upload multiple files for processing, So that: I can save time and process large datasets efficiently
  - **Acceptance Criteria:**
    - [ ] User can select multiple files for batch upload
System validates file types and sizes before processing
All uploaded files are queued and processed in the batch without errors
Progress of batch upload is shown to the user in real time
Uploaded files are stored securely with unique identifiers
- [ ] **Batch Cleaning Pipeline** - (M): As a: data engineer, I want to: run a batch cleaning pipeline on uploaded datasets, So that: data quality is improved for downstream analysis
  - **Acceptance Criteria:**
    - [ ] Batch cleaning tasks are applied to all files in the batch
Cleaning rules are configurable per dataset
Logs of cleaning steps are stored
Edge cases like missing values are handled gracefully
Output datasets are saved with metadata about cleaning steps
- [ ] **Batch Statistical Analysis** - (M): As a: data analyst, I want to: run batch statistical analyses on cleaned data, So that: I can generate insights across multiple datasets
  - **Acceptance Criteria:**
    - [ ] Statistical tests execute for each dataset in batch
Results are aggregated with per-dataset and batch-level summaries
Errors in individual datasets do not block the batch overall
Results export to CSV/Excel with clear labeling
- [ ] **Batch Progress Monitoring** - (XS): As a: project manager, I want to: monitor batch processing progress, So that: I can track throughput and stay informed
  - **Acceptance Criteria:**
    - [ ] Real-time progress bars for batch stages
Per-dataset progress indicators
Alerts on failures or timeouts
Historical batch run logs available
Dashboard widget updates in near real-time
- [ ] **Batch Export Results** - (S): As a: admin, I want to: export batch results to a shareable file, So that: stakeholders can access consolidated findings
  - **Acceptance Criteria:**
    - [ ] Export supports CSV, Excel with formatting
Includes per-dataset and batch-level summaries
Export job status is visible to user
Security permissions enforced for export
Export file includes audit trail

### - [ ] **Milestone 4**: **AI assistant, reference library, and export features: AI chat integration, Semantic Scholar references, Excel/PDF export, and theme/notifications.**

- [ ] **Conversation Context Persistence (inScope:true)** - (M): As a: AI assistant user, I want to: maintain conversation context across interactions, So that: I can have coherent multi-turn conversations without repeating context
  - **Acceptance Criteria:**
    - [ ] User can initiate a chat session and have context preserved for at least 10 turns
Context data is stored securely with proper encryption
System restores previous context after page refresh or session resume
No leakage of context between concurrent sessions
Audit log records context persistence events
- [ ] **Error Handling & Retry UX (inScope:true)** - (M): As a: AI assistant user, I want to: gracefully handle AI errors and allow retry, So that: I can recover from failed responses without losing context
  - **Acceptance Criteria:**
    - [ ] Error toast or banner explains issue clearly
Retry option re-sends last user input
Context preserved on retry
Telemetry logs capture error reasons and outcomes
Fallback response provided after repeated failures
- [ ] **Prompt Templates & Guidelines (inScope:true)** - (S): As a: AI assistant user, I want to: access predefined prompt templates and guidelines, So that: I can craft effective prompts and get better responses
  - **Acceptance Criteria:**
    - [ ] Templates are accessible from UI with category tagging
Templates validate before sending to AI model
User can customize/save templates
Templates affect response quality and are logged for analytics
Edge case: missing template selection defaults to a generic prompt
- [ ] **Usage Limits & Quotas Display (inScope:true)** - (S): As a: AI assistant user, I want to: see my usage limits and remaining quotas, So that: I can manage expectations and plan usage
  - **Acceptance Criteria:**
    - [ ] Display current quotas in UI
Real-time or near real-time update of usage
Alerts when near limits
Accurate per-user quota tracking and audit trail
- [ ] **Export Chat Transcript (inScope:true)** - (M): As a: AI assistant user, I want to: export chat transcripts to a downloadable file, So that: I can share or archive conversations
  - **Acceptance Criteria:**
    - [ ] Transcript export supports PDF/TXT/CSV
Includes timestamps and model responses
Export respects privacy/data masking rules
User can choose date range and export all/all visible messages
Export progress indicator and success confirmation
- [ ] **Search Semantic Scholar** - (S): As a: Researcher, I want to: Search Semantic Scholar, So that: I can locate relevant references quickly and build a bibliography
  - **Acceptance Criteria:**
    - [ ] User can search Semantic Scholar by keyword
Results load within 2 seconds
At least 5 relevant results per query
Duplicate results are filtered
System handles API rate limiting gracefully
- [ ] **Save Citation** - (M): As a: Researcher, I want to: Save a citation, So that: I can curate a personal bibliography
  - **Acceptance Criteria:**
    - [ ] User can save a citation to a personal library
Saved citations persist across sessions
UI shows saved status on reference list
Can remove saved citations
Data stored securely in database
- [ ] **Export ABNT Citation** - (M): As a: Researcher, I want to: Export ABNT citation, So that: I can include properly formatted references in documents
  - **Acceptance Criteria:**
    - [ ] ABNT formatted export available
Export supports multiple references
Incorrect formatting handled with warnings
Export file downloadable
Locale handling for ABNT rules
- [ ] **Bulk Import References** - (L): As a: Researcher, I want to: Bulk import references, So that: I can rapidly ingest large collections
  - **Acceptance Criteria:**
    - [ ] Users can upload common formats (RIS, BibTeX, EndNote)
Parsing errors reported with actionable messages
Progress indicator during import
Imported references appear in library
Duplicates are detected and handled gracefully
- [ ] **InScope: Integrate AI Summaries** - (L): As a: Researcher, I want to: Integrate AI summaries, So that: I can quickly grasp key points of references
  - **Acceptance Criteria:**
    - [ ] AI-generated summaries displayed with references
Summaries can be expanded/collapsed
Quality of AI summaries validated
User can opt-out of AI summaries
System handles API quotas gracefully
- [ ] **Reference Details View** - (S): As a: Researcher, I want to: View reference details, So that: I can inspect metadata before deciding to cite
  - **Acceptance Criteria:**
    - [ ] Detail view shows title authors year venue DOI URL
Pagination or lazy loading for long lists
Edit capability for notes
Copy citation feature
Responsive UI
- [ ] **Reference Tagging** - (M): As a: Researcher, I want to: Tag references, So that: I can organize and filter references by topics
  - **Acceptance Criteria:**
    - [ ] User can apply multiple tags
Tags persist across sessions
Filter by tag returns relevant results
Untag/reference tagging deletion works
Tags are stored efficiently in database
