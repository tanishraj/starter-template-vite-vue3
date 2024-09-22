# Vite Vue Starter Template

This project is a simple Vue.js application scaffolded with Vite. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. Vite + Vue 3.0 + SCSS + Vue Router 4.0

## Table of Contents

-   [Introduction](#introduction)
-   [Installation](#installation)
-   [Scripts](#scripts)
-   [Dependencies](#dependencies)
-   [Dev Dependencies](#dev-dependencies)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Introduction

This project utilizes Vue 3 and Vue Router for building a single-page application (SPA). The development environment is powered by Vite, which provides fast hot module replacement (HMR) and optimized build performance.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**: First, you need to clone the repository to your local machine using Git.

    ```bash
    git clone https://github.com/tanishraj/starter-template.git
    cd vite_vue
    ```

2. **Install dependencies**: After navigating to the project directory, install the necessary dependencies using yarn.

    ```bash
    yarn install
    ```

## Scripts

This project comes with several scripts to help with development, building, and previewing the application.

-   **dev**: Starts the development server with hot module replacement.

    ```bash
    yarn run dev
    ```

-   **build**: Builds the project for production, generating optimized static files in the `dist` directory.

    ```bash
    yarn run build
    ```

-   **preview**: Locally serves the production build from the `dist` directory.

    ```bash
    yarn run preview
    ```

-   **lint**: Runs ESLint to check for code style issues.

    ```bash
    yarn run lint
    ```

-   **lint:fix**: Runs ESLint to fix code style issues and then runs Stylelint to fix CSS/SCSS issues.

    ```bash
    yarn run lint:fix
    ```

-   **format**: Runs Prettier to format all files.

    ```bash
    yarn run format
    ```

-   **stylelint**: Runs Stylelint to check for CSS/SCSS style issues.

    ```bash
    yarn run stylelint
    ```

-   **stylelint:fix**: Runs Stylelint to fix CSS/SCSS style issues.

    ```bash
    yarn run stylelint:fix
    ```

## Dependencies

The project relies on the following main dependencies:

-   **vue**: Vue.js is a progressive framework for building user interfaces. This project uses version ^3.4.29.
-   **vue-router**: Vue Router is the official router for Vue.js, enabling the creation of single-page applications with navigation. This project uses version 4.

## Dev Dependencies

For development purposes, the project includes several dev dependencies:

-   **@eslint/js**: ESLint's JavaScript runtime. Version ^9.11.0 is used.
-   **@vitejs/plugin-vue**: This plugin enables Vue support in Vite. Version ^5.0.5 is used.
-   **eslint**: ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. Version ^9.11.0 is used.
-   **eslint-config-prettier**: Turns off all rules that are unnecessary or might conflict with Prettier. Version ^9.1.0 is used.
-   **eslint-plugin-prettier**: Runs Prettier as an ESLint rule. Version ^5.2.1 is used.
-   **eslint-plugin-vue**: Official ESLint plugin for Vue.js. Version ^9.28.0 is used.
-   **prettier**: An opinionated code formatter. Version ^3.3.3 is used.
-   **sass**: Sass is a preprocessor scripting language that is interpreted or compiled into CSS. Version ^1.77.6 is used.
-   **stylelint**: A mighty, modern linter that helps you avoid errors and enforce conventions in your styles. Version ^16.9.0 is used.
-   **stylelint-prettier**: Runs Prettier as a Stylelint rule. Version ^5.0.2 is used.
-   **stylelint-scss**: A collection of SCSS specific linting rules for Stylelint. Version ^6.7.0 is used.
-   **vite**: Vite is a next-generation frontend tooling that provides a fast development environment. Version ^5.3.1 is used.

## Usage

To work with this project, you can use the following commands:

1. **Development**: Start the development server with:

    ```bash
    yarn run dev
    ```

    This will start the Vite development server, and you can view your application in the browser at `http://localhost:5173`. Any changes you make to the code will be hot-reloaded automatically.

2. **Build**: To create a production build of the application, run:

    ```bash
    yarn run build
    ```

    This command will generate optimized static files in the `dist` directory. These files are ready to be deployed to a web server.

3. **Preview**: To preview the production build locally, run:

    ```bash
    yarn run preview
    ```

    This command will start a local server to serve the files from the `dist` directory. You can view the production build in the browser at `http://localhost:5173`.

4. **Linting and Formatting**: To ensure code quality and consistency, you can use the following commands:

    ```bash
    yarn run lint        # Check for code style issues
    yarn run lint:fix    # Fix code style issues
    yarn run format      # Format all files
    yarn run stylelint   # Check for CSS/SCSS style issues
    yarn run stylelint:fix # Fix CSS/SCSS style issues
    ```

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please submit an issue or pull request. For major changes, please open an issue first to discuss the changes you would like to make.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
