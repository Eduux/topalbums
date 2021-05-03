# React Architecture

- React
- Custom Create react app
- Reuse components
- Tests with React Testing Library

**This is your source code tree:**

```
src
|-- assets
|-- styles
|-- components
|-- containers
|-- helpers
|-- pages
|-- routes
|-- services
|-- App.js
|-- index.js
...
```
components | pages => The folder structure will look like this:

```
components | pages
|-- YouComponent
    |-- index.ts
    |-- styles.scss
    |-- // Extra files for things like helpers or styles
...
```
<br/>

# Folders description

### `./assets`

Here will be all your project assets as images, icons...

### `./components`

Components are presentational only elements, grouping UI items

### `./containers`

Containers are responsible for connecting components with services and global state management. All the logic stays here, to keep components only with visual concerns

### `./pages`

Pages are mapped in routes and have all the components needed to implement a functionality

### `./routes`

Routes contains the `react-router-dom` implementation to map the project's routes to the respective pages

### `./services`

Services are responsible to handle the connection with all external elements, like APIs

### `./helpers`

Directory to keep all `helpers` functions to share all over the project

<br>

# Scripts

### Server from develop

> `npm start`

### Code from build

> `npm run build`

### Running tests

> `npm test`

### Running tests coverage

> `npm run coverage`
