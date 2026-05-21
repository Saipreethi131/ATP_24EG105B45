# React Fetch Users

An asynchronous React application fetching and rendering live user listings from a public mock API endpoint.

## Key Features
- **Asynchronous API Integration**: Performs automated REST API fetches to `https://jsonplaceholder.typicode.com/users` using modern JS `fetch` inside React `useEffect` hooks.
- **Robust Connection Lifecycle**: Contains safety checks to render a full-screen `LOADING...` placeholder or custom red error warnings if backend requests fail.
- **Interactive Counters**: Allows tracking user selection counts with live state button components.

## Commands
- **Start Local Server**: `npm run dev`
- **Build Production Assets**: `npm run build`
