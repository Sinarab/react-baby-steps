# React - baby steps

## Setup

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

#### How it begins - React + Vite

```bash
npm create vite@latest
```

#### How it begins - manually

Create with:

```bash
npm init -y
```

Add react

```bash
npm install react@18 react-dom@18.2 react-scripts@5.0
```

Add inital scripts:

```
"dev": "react-scripts start",
"build": "react-scripts build",
```

Create a `public` folder
Create a basic `index.html` file
Add a div tag to be targeted by react

```
<div id="root"></div>
```

Create a `src` folder
Create a basic `index.js` file
Render `root` with `react-dom`.