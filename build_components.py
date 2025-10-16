#!/usr/bin/env python3
"""
Script para build dos componentes React
"""

import os
import subprocess
import sys

def run_command(command, cwd=None):
    """Execute command and return success status."""
    try:
        result = subprocess.run(command, shell=True, cwd=cwd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"SUCCESS: {command}")
            return True
        else:
            print(f"ERROR: {command}")
            print(f"Error: {result.stderr}")
            return False
    except Exception as e:
        print(f"ERROR: {command} - Exception: {e}")
        return False

def check_node_installed():
    """Check if Node.js is installed."""
    try:
        result = subprocess.run("node --version", shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"SUCCESS: Node.js {result.stdout.strip()}")
            return True
        else:
            print("ERROR: Node.js not found")
            return False
    except:
        print("ERROR: Node.js not found")
        return False

def check_npm_installed():
    """Check if npm is installed."""
    try:
        result = subprocess.run("npm --version", shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"SUCCESS: npm {result.stdout.strip()}")
            return True
        else:
            print("ERROR: npm not found")
            return False
    except:
        print("ERROR: npm not found")
        return False

def install_frontend_dependencies():
    """Install frontend dependencies."""
    print("\nInstalling frontend dependencies...")
    
    # Install root dependencies
    if not run_command("npm install", "frontend"):
        return False
    
    # Install component dependencies
    components = ["upload_component", "filter_component", "chat_component"]
    
    for component in components:
        component_path = f"frontend/{component}"
        if os.path.exists(component_path):
            print(f"Installing dependencies for {component}...")
            if not run_command("npm install", component_path):
                print(f"Warning: Failed to install dependencies for {component}")
        else:
            print(f"Warning: Component {component} not found")
    
    return True

def build_component(component_name):
    """Build a specific component."""
    component_path = f"frontend/{component_name}"
    
    if not os.path.exists(component_path):
        print(f"ERROR: Component {component_name} not found at {component_path}")
        return False
    
    print(f"\nBuilding {component_name}...")
    
    # Check if package.json exists
    package_json = os.path.join(component_path, "package.json")
    if not os.path.exists(package_json):
        print(f"ERROR: package.json not found for {component_name}")
        return False
    
    # Run build
    if run_command("npm run build", component_path):
        build_dir = os.path.join(component_path, "build")
        if os.path.exists(build_dir):
            print(f"SUCCESS: {component_name} built successfully")
            return True
        else:
            print(f"ERROR: Build directory not created for {component_name}")
            return False
    else:
        print(f"ERROR: Build failed for {component_name}")
        return False

def build_all_components():
    """Build all components."""
    print("\nBuilding all React components...")
    
    components = ["upload_component", "filter_component", "chat_component"]
    success_count = 0
    
    for component in components:
        if build_component(component):
            success_count += 1
    
    print(f"\nBuild Summary: {success_count}/{len(components)} components built successfully")
    
    if success_count == len(components):
        print("SUCCESS: All components built successfully!")
        return True
    else:
        print("WARNING: Some components failed to build")
        return False

def create_build_info():
    """Create build information file."""
    import datetime
    
    build_info = {
        "build_date": datetime.datetime.now().isoformat(),
        "node_version": subprocess.run("node --version", shell=True, capture_output=True, text=True).stdout.strip(),
        "npm_version": subprocess.run("npm --version", shell=True, capture_output=True, text=True).stdout.strip(),
        "components": []
    }
    
    components = ["upload_component", "filter_component", "chat_component"]
    
    for component in components:
        component_path = f"frontend/{component}"
        build_dir = os.path.join(component_path, "build")
        
        component_info = {
            "name": component,
            "built": os.path.exists(build_dir),
            "build_path": build_dir
        }
        
        if component_info["built"]:
            # Get build size
            try:
                total_size = sum(
                    os.path.getsize(os.path.join(dirpath, filename))
                    for dirpath, dirnames, filenames in os.walk(build_dir)
                    for filename in filenames
                )
                component_info["size_kb"] = round(total_size / 1024, 2)
            except:
                component_info["size_kb"] = 0
        
        build_info["components"].append(component_info)
    
    # Save build info
    import json
    with open("frontend/build-info.json", "w", encoding="utf-8") as f:
        json.dump(build_info, f, indent=2, ensure_ascii=False)
    
    print("Build info saved to frontend/build-info.json")

def main():
    """Main build script."""
    print("TCC Gado Gordo - Component Build Script")
    print("=" * 50)
    
    # Check prerequisites
    if not check_node_installed():
        print("\nERROR: Node.js is required but not installed.")
        print("Please install Node.js from https://nodejs.org/")
        sys.exit(1)
    
    if not check_npm_installed():
        print("\nERROR: npm is required but not installed.")
        print("Please install npm (usually comes with Node.js)")
        sys.exit(1)
    
    # Check if frontend directory exists
    if not os.path.exists("frontend"):
        print("\nERROR: Frontend directory not found.")
        print("Please run this script from the project root directory.")
        sys.exit(1)
    
    # Parse command line arguments
    if len(sys.argv) > 1:
        component = sys.argv[1]
        if component in ["upload_component", "filter_component", "chat_component"]:
            print(f"\nBuilding specific component: {component}")
            if build_component(component):
                print(f"\nSUCCESS: {component} built successfully!")
                sys.exit(0)
            else:
                print(f"\nERROR: Failed to build {component}")
                sys.exit(1)
        else:
            print(f"\nERROR: Unknown component: {component}")
            print("Available components: upload_component, filter_component, chat_component")
            sys.exit(1)
    
    # Build all components
    print("\nBuilding all components...")
    
    # Install dependencies first
    if not install_frontend_dependencies():
        print("\nWARNING: Some dependencies failed to install, but continuing...")
    
    # Build all components
    if build_all_components():
        create_build_info()
        print("\nSUCCESS: Build completed successfully!")
        print("\nNext steps:")
        print("1. Run: streamlit run app.py")
        print("2. Run: uvicorn api:app --reload --port 8000")
        print("3. Open: http://localhost:8501")
        sys.exit(0)
    else:
        print("\nERROR: Build completed with errors.")
        print("\nTroubleshooting:")
        print("1. Check Node.js and npm versions")
        print("2. Try: npm install in each component directory")
        print("3. Check for TypeScript errors")
        sys.exit(1)

if __name__ == "__main__":
    main()
