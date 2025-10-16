param()

pip show ruff | Out-Null; if (!$?) { pip install ruff }
pip show black | Out-Null; if (!$?) { pip install black }
pip show mypy | Out-Null; if (!$?) { pip install mypy }

ruff .
if (!$?) { exit 1 }

black --check .
if (!$?) { exit 1 }

mypy --ignore-missing-imports .
if (!$?) { exit 1 }

# Smoke import of Streamlit pages
Get-ChildItem -Path pages -Filter *.py | ForEach-Object {
  $p = $_.FullName
  python -c "import importlib.util, sys; p=r'$p'; s=importlib.util.spec_from_file_location('x', p); m=importlib.util.module_from_spec(s); s.loader.exec_module(m)"
  if (!$?) { exit 1 }
}

Write-Host "OK"

