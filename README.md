
# Stanford University Component Service

A consistent approach to Componenet Services.

The Stanford University Component Service uses Taiwind CSS and REACT and is incorporated into this package.


## System dependencies
See official instalation steps here 
https://docs.squiz.net/component-service/latest/getting-started/index.html#installation

## Getting started

Clone this project

```bash
  git clone git@gitlab.squiz.net:stanford/components.git
```

Go to the project directory

```bash
  cd components
```

Install dependencies

```bash
  npm install
```

## Directory structure
The core directory structure is defined below:
- /components
  - Contains all components in the system
- /packages
  - Use the packages directory to store any reusable elements. Eg - cards.
- /build
  - The core configuration files for local development and deployment
  - Use with caution!
  - Tailwind build processes and other packages cab be configured here


## Using

Start the development server. This is used for most purposes during development.

```bash
  npm run start
```

Build components for deployment.

```bash
  npm run build
```

### Deploying components <Not finalised>

```bash
  npm run deploy (currently not active)
```

### Creating new components
Start with the base component by duplicating the entire `/components/__su_base` folder.


## External files
External files, such as global css, is placed within a centralised `preview.html` file located under `/packages/__globalPreview/`. 

This file is used within each components `manifest.json` and can be used to add any specific external files or additional HTML to assist with the development process.

