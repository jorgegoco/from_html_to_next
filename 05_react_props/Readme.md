# Understanding React Props

## 1. HTML Attributes and React Props

Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the `src` attribute of an `<img>` element changes the image that is shown. Changing the `href` attribute of an `<a>` tag changes the destination of the link.

Similarly, you can pass pieces of information as properties to React components. These are called `props`.

## 2. Designing Components with Props

Just like a JavaScript function, you can design components that accept custom arguments (or props) that change the component’s behavior or what is visibly shown when it’s rendered to the screen. Then, you can pass down these props from parent components to child components.

## 3. One-Way Data Flow in React

In React, data flows down the component tree. This is referred to as one-way data flow. State, which will be discussed in the next section, can be passed from parent to child components as props.

## 4. Object Destructuring with Props

Since `props` is an object, you can use object destructuring to explicitly name the values of props inside your function parameters.

## 5. Using Variables in JSX

To use the variable you defined, you can use curly braces `{}`, a special JSX syntax that allows you to write regular JavaScript directly inside your JSX markup.

## 6. Transitioning Between JSX and JavaScript

You can think of curly braces as a way to enter "JavaScript land" while you are in "JSX land". You can add any JavaScript expression (something that evaluates to a single value) inside curly braces.
