Project Architecture
src/ Directory
The source directory is the core of the application, containing all the essential code files and structures.
api/
services/: Consists of different service files handling distinct API calls, ensuring a separation of concerns.
axios.js: This file centralizes the Axios configuration, managing the base URL, headers, timeouts, and other essential HTTP settings.
index.js: The main file that exports all API functions, making them accessible across the project.
assets/
images/: Stores all image files including logos, backgrounds, and other visual media.
icons/: Contains various icon files that provide a consistent look and feel across the application.
components/
shared/: Houses reusable components such as buttons, input fields, etc., promoting consistency and reducing code duplication.
layout/: Defines structural components like headers, footers, navigation bars, etc., facilitating consistent layout design.
Individual Component Directories: Each component has a dedicated directory containing the component file, test file, and a SCSS module file.
ComponentName.js: The main file for the component, including its structure and logic.
ComponentName.test.js: Contains tests specific to the corresponding component.
ComponentName.module.scss: Includes the SCSS module containing styles specific to this component, allowing for local scope and encapsulated styling.


containers/
Encapsulates components that are directly connected to the Redux store or other state management logic, enhancing maintainability and testability.
Individual Container Directories: Containers also follow a similar structure to components.
ContainerName.js: Defines the container connecting components to state management.
ContainerName.test.js: Includes tests specific to the corresponding container.
ContainerName.module.scss: SCSS module with styles scoped to this particular container.
hooks/
A dedicated folder for custom React hooks that encapsulate complex logic, improving code readability and reusability.
utils/
Contains various utility functions that provide common operations like formatting, validation, and so on.
contexts/
Houses React context providers for managing global application state, enabling smooth state propagation and manipulation.
routes/
Defines all route configurations and related logic, controlling the application's navigation and user flow.
styles/
Contains global styles, themes, variables, and mixins to ensure a cohesive visual design.
hooks/: Houses tests for custom hooks, ensuring their logic functions properly.
utils/: Incorporates tests for various utility functions, verifying their correctness.
App.js
Main application component, setting up the global context providers and routing.
index.js
The entry point for the application where the React app is initialized and rendered to the DOM.
Installed Packages
Testing and Development
@testing-library/jest-dom: Allows using custom jest matchers for assertions related to the DOM, enhancing readability and expressiveness of the tests.
@testing-library/react: Provides utilities for testing React components, allowing you to simulate rendering and user interactions.
@testing-library/user-event: Simulates user events such as clicking and typing, making it easier to test components as the users would use them.
jest: Primary testing framework, offering a wide array of functionalities to write and run tests.
Core Libraries
react: The core library for building the user interface, facilitating component-based development.
react-dom: Responsible for rendering React components to the DOM, enabling dynamic, interactive UIs.
Networking
axios: A promise-based HTTP client that simplifies making requests to external services, with broad browser compatibility.
State Management
react-redux: Integrates Redux with React, allowing for more robust state management across components.
redux: A central state container that enables predictable state management and manipulation.
Routing
react-router-dom: A powerful routing library that manages navigation and component rendering based on URL paths.
Other Utilities
react-scripts: Offers a collection of scripts and configurations for bootstrapping and running a React application, reducing manual setup.


Styling Approach
We follow a modular SCSS approach, where each component or container has its SCSS module. This encapsulates styles, avoiding conflicts and promoting consistency.

SCSS Modules: These files allow for CSS to be scoped locally to the component or container, promoting maintainability and reusability.
Naming Convention: We use the .module.scss extension to clearly indicate SCSS modules.
Testing Philosophy
Each component and container has its test file, providing a comprehensive suite of tests. This approach ensures close alignment between code and tests, facilitating robust testing practices.

Location: Test files are located within the same directory as the corresponding code, ensuring easy navigation and maintenance.
Libraries: We use libraries like Jest and React Testing Library to conduct unit and integration testing.



