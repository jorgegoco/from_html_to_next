# Transitioning from Plain JavaScript to React

## 1. Imperative Programming with JavaScript

Updating the DOM directly with JavaScript is powerful but can be verbose and complex. This approach is an example of imperative programming where you specify how to perform each step.

## 2. Simplifying DOM Manipulation

Libraries like React.js can simplify this process by providing higher-level abstractions to manipulate the DOM.

## 3. Introduction to React

React is a popular declarative library that helps developers build user interfaces. As a developer, you can tell React what you want to happen to the user interface, and React will figure out the steps of how to update the DOM on your behalf.

## 4. Integrating React into Your Project

To use React in your project, you can load two scripts from an external website called unpkg.com:

- `react` is the core React library.
- `react-dom` provides DOM-specific methods that enable you to use React with the DOM.

## 5. Rendering with ReactDOM

Instead of directly manipulating the DOM with plain JavaScript, you can use the `ReactDOM.render()` method from `react-dom` to instruct React what to render.

## 6. Understanding JSX

React uses JSX, a syntax extension for JavaScript that allows you to describe your UI in a familiar HTML-like syntax. However, browsers don’t understand JSX out of the box.

## 7. Transforming JSX with Babel

To make your JSX code understandable by browsers, you’ll need a JavaScript compiler, such as Babel, to transform your JSX code into regular JavaScript. You can add it from an external website like unpkg.com. In addition, you will need to inform Babel what code to transform by changing the script type to type=text/jsx.
