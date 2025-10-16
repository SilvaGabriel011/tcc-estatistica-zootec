"""Feature flags to enable a simplified diagnostic mode.

Toggle modules here to reduce surface area and catch errors earlier.
"""

# Global diagnostic switch
SIMPLE_MODE: bool = True

# Per-feature toggles (can be overridden by env in future)
ENABLE_AI: bool = True
ENABLE_PDF: bool = True
ENABLE_EXCEL_ADVANCED: bool = True
ENABLE_SEMANTIC_SCHOLAR: bool = True
ENABLE_BATCH: bool = False
ENABLE_COMPARE: bool = False
ENABLE_QUALITY: bool = False
ENABLE_GENERATOR: bool = False

