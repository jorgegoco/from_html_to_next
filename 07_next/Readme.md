# Migrating from React to Next.js

## Prerequisites

- Node.js installed on your machine.

## Steps

1. **Create a React app**: Start with a basic React application.

2. **Delete unnecessary scripts**: The react and react-dom scripts since you’ve installed them with npm. The Babel script because Next.js has a compiler that transforms JSX into valid JavaScript browsers can understand.

3. **Install Next.js, React, and ReactDOM**: Use npm to install these packages locally:

   ```
   npm install next react react-dom
   ```

   This will add the latest versions of Next.js, React, and ReactDOM to your project.

4. **Update scripts in package.json**: Change the scripts in your `package.json` to use Next.js:

   ```json
   "scripts": {
       "dev": "next dev"
   }
   ```

   You can now start the development server by running `npm run dev` in your terminal.

5. **index.html file**:

- Remove the `<html>` and `<body>` tags because Next.js will create these for you.
- The code that interacts with app element and ReactDom.render() method.
- The `<script type="text/jsx">` tag.

  The only code left in the HTML file is JSX, so you can change the file type from .html to .js or .jsx.

6. **Create a pages directory**: In Next.js, each page is associated with a route based on its file name. So create a new directory called `pages` and move your `index.js` (or `index.jsx`) file into it. Add default export to your main React component to help Next.js distinguish which component to render as the main component of this page.

7. **Test your application**: Run your application locally to make sure everything works. You can do this by running `npm run dev` and navigating to `localhost:3000` in your browser.
