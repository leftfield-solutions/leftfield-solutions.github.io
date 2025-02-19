# CLI for SPFx projects

# Install

```powershell
npm install -g @leftfield-solutions/spfx-cli
```

# Description

This package streamlines SharePoint Framework development by providing commands that address common challenges. A primary issue is managing workbench URLs when multiple developers work on the same project across different tenants and sites. While the initialPage setting in serve.json allows using a global environment variable for the tenant domain (e.g., "initialPage": "https://{tenantDomain}/\_layouts/workbench.aspx"), this approach is insufficient for developers working with multiple tenants.

The serve command in this package resolves this by processing .env files within your project and replacing variables in the serve.json configuration. This enables each developer to customize their workbench URL. Furthermore, the package supports the use of different .env files for various development stages, offering greater flexibility.

# Commands

## add alias

---

**Description:** This command will add a new alias for the cli using the name that is provided.

```powershell
lf add-alias 'name'
```

> _if alias is not created then the default is 'lf'_

## serve

---

**Description:** This command will use spfx-fast-serve package when in project or use the gulp serve command if not.
Recommend using spfx-fast-serve package as it is faster and more reliable.

```powershell
lf serve
```

> serves the project using default settings in the .env file if exists and default settings in the serve.json file in ./config folder.

```powershell
lf serve -c [config name in serve.json]
```

> serves the project using default settings in the .env file if exists and matching name settings in the serve.json file in ./config folder.

```powershell
lf serve -e [env file name]
```

> serves the project using the matching .env file name if exists and default settings in the serve.json file in ./config folder.

_Example:_

> ```powershell
> lf serve -e dev
> ```

> The application checks for a .env.dev file in the project's root directory. If found, it will use the environment variables defined within that file when running the project.

## build

---

```powershell
lf build
```

> this command will build the project by running npm run build from the package.json scripts file.

## bundle

---

```powershell
lf bundle
```

> this command will bundle the project and take the package.json version and update the SharePoint Solution Package version

```powershell
lf bundle -i ['major' | 'minor' | 'patch']
```

> this command will bundle the project and take the package.json version and increment it by major | minor | patch passed into parameter and then update the SharePoint Solution Package version to match the package.json version.

### Open folder of sppkg file location

```powershell
lf open-solution
```

> this command opens finder | windows explorer of where the solution package is located

## Visual Studio Code Commands

---

requires visual studio code to be installed and having having 'code' in the terminal / command line

```powershell
lf vs
```

> this command will open the default project (refer to vs-list to see projects saved in program) in visual studio code

```powershell
lf vs .
```

> this command will open visual studio code in the current directory

```powershell
lf vs ['name-of-project']
```

> this command will open visual studio code with the matching project name

```powershell
lf vs-default ['name-of-project']
```

> this command will set project1 as the default project in visual studio code

```powershell
lf vs-add
```

> this command will add current directory with name of the current directory to the list of projects in visual studio code

```powershell
lf vs-add ['name-of-project']
```

> this command will add current directory with name provided to the list of projects in visual studio code

```powershell
lf vs-remove ['name-of-project']
```

> this command will remove project from the list of projects in visual studio code

```powershell
lf vs-list
```

> this command will list all projects in visual studio code

## Version

---

```powershell
lf version -l
```

> this command will list the version of package.json and package-solution.json

```powershell
lf version -s
```

> this command will sync the package.json version to package-solution.json version

```powershell
lf version -i ['major' | 'minor' | 'patch']
```

> this command will increment patch # in package.json and then replace package-solution.json version with updated package.json version based on the argument passed in.
> <br>Options are major, minor, patch
> <br>major = 1.0.0 -> 2.0.0
> <br>minor = 1.0.0 -> 1.1.0
> <br>patch = 1.0.0 -> 1.0.1

```powershell
lf encode <value>
```

> this command will encode a string so it can be safely included as part of a Uniform Resource Identifier (URI)

```powershell
lf decode <value>
```

> this command will decode a string that has been previously encoded using encodeURIComponent

---

## Disclaimer

THIS CODE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.
