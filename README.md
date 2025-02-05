# 🌟 Advanced React
## React Element 
A React Element is a plain JavaScript object that represents the structure of a UI component. It’s the building block of React applications. A React Component is different from a React Element. A React Component is a function or class that returns React elements. It is more like a blueprint for what React elements should look like. A React Element is the output of JSX or the result of calling a React Component.
- React Components are the reusable building blocks (functions or classes) that generate React Elements.

- React Elements are the actual JavaScript objects that describe how the DOM should look.

- Descriptive Objects: They describe what you want to see on the screen, but they are not the actual DOM nodes.

- Immutable: Once created, you cannot modify a React Element.
## 🔍 Filter( )
The filter() method is used to create a new array containing only the elements that satisfy a specific condition. It does this by executing a callback function on each element of the original array. The callback should return true to include the element in the new array and false to exclude it. This method doesn’t modify the original array and is often used for tasks like removing unwanted items or narrowing down data.

Key Points:
- Non-mutating: It does not change the original array.
 
- Returns a new array: Contains elements that satisfy the condition.

- Callback Function: The function determines whether each element passes the test.
```
// Example: Filter available products that cost less than $50
const products = [
  { name: "Laptop", price: 1200, available: true },
  { name: "Mouse", price: 20, available: false },
  { name: "Keyboard", price: 45, available: true },
  { name: "Monitor", price: 200, available: true },
  { name: "USB Cable", price: 10, available: true }
];

// Use filter to get affordable and available products
const affordableAvailableProducts = products.filter(
  product => product.price < 50 && product.available
);

console.log(affordableAvailableProducts);
// Output: [{ name: "Keyboard", price: 45, available: true }, { name: "USB Cable", price: 10, available: true }]
```

## 🔢 sort( )
The sort() method rearranges the elements of an array in place based on the return value of a comparison function. Without a comparison function, sort() converts the elements to strings and sorts them in lexicographical order. To achieve numerical or custom sorting, you must provide a comparison function.

Key Points:
- Mutates the original array: Unlike filter(), it directly modifies the array.

- Customizable: A comparison function allows for tailored sorting logic.

- Default Behavior: Lexicographical sorting when no comparison function is provided.

<img width="988" alt="Screenshot 2024-11-06 at 9 10 53 AM" src="https://github.com/user-attachments/assets/9a69a506-9ffe-43fc-9214-13f0e900bd8f">

```
// Example: Sort products by price in ascending order
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 200 },
  { name: "USB Cable", price: 10 }
];

// Sort products by price (ascending)
products.sort((a, b) => a.price - b.price);

console.log(products);
// Output:
// [
//   { name: "USB Cable", price: 10 },
//   { name: "Mouse", price: 20 },
//   { name: "Keyboard", price: 45 },
//   { name: "Monitor", price: 200 },
//   { name: "Laptop", price: 1200 }
// ]
```

## 🔄 Map( )
The map() method creates a new array by applying a callback function to each element of the original array. It’s often used for transforming data, such as extracting properties, performing calculations, or formatting elements for display. The map() method does not mutate the original array, and the resulting array has the same length as the original.

Key Points:
- Non-mutating: The original array remains unchanged.

- Transforms data: Creates a new array with transformed elements.

- Callback Function: Defines how each element should be transformed.

```
// Example: Extract product names with their prices as strings
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 200 },
  { name: "USB Cable", price: 10 }
];

// Use map to create a list of strings
const productDescriptions = products.map(
  product => `${product.name}: $${product.price}`
);

console.log(productDescriptions);
// Output: 
// [
//   "Laptop: $1200",
//   "Mouse: $20",
//   "Keyboard: $45",
//   "Monitor: $200",
//   "USB Cable: $10"
// ]
```

## React Hooks:
- You should only call hooks from a React component function ( You should not call hooks inside loops )

- Only call hooks at the **top level** of a React component function ( outside of loops, conditions, and nested functions ) ( You should not call hooks inside if statements ) ( You should not call hooks inside nested functions ) ( You can call multiple state hooks and effect hooks inside a component )

- You are allowed to call multiple state or effect hooks inside a component 

- Make multiple hook calls **in the same sequence**

## ⚖️ useReducer( )
The useReducer hook is an alternative to useState for managing state in React components, especially when state logic becomes complex or involves multiple sub-values. It’s based on the reducer pattern, commonly used in Redux. With useReducer, you define a reducer function that specifies how the state should change in response to different actions.
```
import React, { useReducer } from "react";

// Step 1: Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state; // Return current state for unknown actions
  }
}

// Step 2: Use the reducer in a component
function Counter() {
  const initialState = { count: 0 }; // Initial state
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
```

## 📌 useRef( )
The useRef hook is a versatile tool in React used to maintain a persistent reference to a value or a DOM element across renders, without causing re-renders when the value changes. It is especially useful for scenarios where you need to:

- Access or modify DOM elements directly.

- Store mutable values that don’t trigger re-renders (e.g., timers, previous state, or input focus).

- Retain state across renders without causing additional updates.

Key Points:
- Does Not Cause Re-Renders: Unlike useState, updating a useRef value doesn’t cause the component to re-render.

- Accessing DOM Elements: useRef can store a reference to a DOM element, allowing you to interact with it directly.

- Mutable Object: The useRef hook returns a mutable object with a .current property that you can update.
```
import React, { useRef } from "react";

function FocusInput() {
  // Step 1: Create a ref
  const inputRef = useRef();

  // Step 2: Use the ref to focus the input field
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```
```
import React, { useState, useRef } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0); // State to trigger re-renders
  const renderCount = useRef(0); // Ref initialized to 0

  renderCount.current += 1; // Increment the render count on every render

  return (
    <div>
      <p>Count: {count}</p>
      <p>Render Count: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default RenderCounter;
```

## 🌐 Fetch( ), Asynchronous Javascript
The fetch() function is a JavaScript method used to make network requests, such as fetching data from a server. It works seamlessly in React for retrieving data from REST APIs or other endpoints. Since network requests are asynchronous, you often combine fetch() with JavaScript tools like Promises or async/await for better control.

In React, we typically use fetch() inside a lifecycle hook like useEffect to ensure that data fetching happens during specific component life cycles.

Key Points:
- Native Browser Method: fetch() is built into JavaScript; no additional library is required.

- Asynchronous Operation: fetch() returns a Promise, so you handle its response using .then() or async/await.

- Common Use in React: Combine fetch() with useEffect to load data when the component mounts.

## 🛠 Custom Hooks
Custom hooks are user-defined functions that allow you to encapsulate reusable logic in React. They follow the same rules as built-in hooks and are a great way to share logic between components without duplicating code or relying on higher-order components (HOCs) or render props.

Why Use Custom Hooks?
- Reusability: Custom hooks let you reuse stateful logic (e.g., data fetching, form handling) across multiple components.

- Clean Code: They help you abstract away complex logic, keeping your components focused on rendering UI.

- Separation of Concerns: Move unrelated logic out of components, making them easier to test and maintain.

Key Points About Custom Hooks:
- Naming: A custom hook must start with “use” (e.g., useFetch, useForm) to follow React’s hook rules.

- Built-In Hooks Inside: Custom hooks often combine built-in hooks (useState, useEffect, etc.) to implement the desired functionality.

- No JSX: Custom hooks don’t return JSX; instead, they return values, functions, or objects for use in components.

- Follow React’s Rules: Custom hooks follow the same rules as other hooks (e.g., call them only at the top level, never inside loops or conditions).

## 🧩 Containment Design Pattern
Containment in React refers to a design pattern where components act as wrappers for other elements or components. It’s especially useful when you need a parent component to render unknown or dynamic children passed to it.

Instead of hardcoding child components, you allow them to be passed in via the children prop, making your components more flexible and reusable.

Why Use Containment?

- Flexibility: Allows a parent component to wrap dynamic content without knowing its structure beforehand.

- Reusability: Makes components adaptable to a variety of use cases by simply passing different children.

- Clean Code: Decouples the parent’s layout/logic from the child’s content.
 
```
function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "16px", borderRadius: "8px" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Card>
        <h1>Title</h1>
        <p>This is some content inside the Card component.</p>
      </Card>
    </div>
  );
}
```
```
function Layout({ header, sidebar, content }) {
  return (
    <div style={{ display: "flex" }}>
      <header style={{ flexBasis: "100%", padding: "16px", backgroundColor: "#eee" }}>
        {header}
      </header>
      <aside style={{ width: "200px", padding: "16px", backgroundColor: "#ddd" }}>
        {sidebar}
      </aside>
      <main style={{ flex: 1, padding: "16px" }}>{content}</main>
    </div>
  );
}

function App() {
  return (
    <Layout
      header={<h1>My App Header</h1>}
      sidebar={<ul><li>Option 1</li><li>Option 2</li></ul>}
      content={<p>This is the main content of the app.</p>}
    />
  );
}
```

## 🎨 Specialization Design Pattern
Specialization is a React pattern where you create specialized versions of a general or base component to handle more specific tasks or scenarios. It allows you to reuse the core functionality of a general component while customizing its behavior or appearance for a particular use case.

Why Use Specialization?
- Reusability: Build a general-purpose component once and reuse its base logic for different needs.

- Customization: Tailor the specialized component for specific tasks without duplicating code.

- Separation of Concerns: Keeps the logic of the base component separate from the unique features of specialized versions.
```
// General Button Component
function Button({ children, className, ...props }) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}

// Specialized Primary Button
function PrimaryButton(props) {
  return <Button className="btn-primary" {...props} />;
}

// Specialized Secondary Button
function SecondaryButton(props) {
  return <Button className="btn-secondary" {...props} />;
}

// Usage
function App() {
  return (
    <div>
      <PrimaryButton onClick={() => alert("Primary clicked!")}>Primary</PrimaryButton>
      <SecondaryButton onClick={() => alert("Secondary clicked!")}>Secondary</SecondaryButton>
    </div>
  );
}
```
```
// General Input Component
function Input({ type = "text", placeholder, ...props }) {
  return <input type={type} placeholder={placeholder} {...props} />;
}

// Specialized Email Input
function EmailInput(props) {
  return <Input type="email" placeholder="Enter your email" {...props} />;
}

// Specialized Password Input
function PasswordInput(props) {
  return <Input type="password" placeholder="Enter your password" {...props} />;
}

// Usage
function App() {
  return (
    <form>
      <EmailInput />
      <PasswordInput />
    </form>
  );
}
```

## 🌀 React.cloneElement( )
React.cloneElement() is a method in React that allows you to clone an existing React element and modify its props or children before rendering. This is particularly useful when you want to reuse a component while slightly tweaking its behavior or appearance without directly modifying the original component. The output of React.cloneElement() is a new React element that is a copy of the original element, but with any new or modified props added.
```
React.cloneElement(element, [props], [...children])
// element: The React element you want to clone.

// props (optional): An object containing the new or updated props you want to pass to the cloned element.

// children (optional): The children you want to replace the original element’s children with.
```
Why Use React.cloneElement()?
- Reusability: You can reuse a component with additional or modified props.

- Dynamic Modifications: Add or override props dynamically, based on the parent component’s logic.

- Controlled Updates: Keep the original element intact while creating a “clone” with modified properties.
```
import React from "react";

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Parent() {
  const originalButton = <Button>Click Me</Button>;

  // Clone the button and add new props
  const clonedButton = React.cloneElement(originalButton, {
    onClick: () => alert("Button clicked!"),
  });

  return <div>{clonedButton}</div>;
}

export default Parent;
```
```
import React from "react";

// Button Component
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

// Parent Component
function ButtonList() {
  const buttons = [
    <Button key="1">Button 1</Button>,
    <Button key="2">Button 2</Button>,
    <Button key="3">Button 3</Button>,
  ];

  // Common onClick handler
  const handleClick = (label) => {
    alert(`You clicked ${label}`);
  };

  // Clone each button and add an onClick handler
  const clonedButtons = buttons.map((button) =>
    React.cloneElement(button, {
      onClick: () => handleClick(button.props.children),
    })
  );

  return <div>{clonedButtons}</div>;
}

export default ButtonList;
```

## 🔄 React.Children.map( ) 
In React, the React.Children.map() method is a utility provided to safely and efficiently iterate over the children prop. It allows you to traverse the children of a component, apply transformations, and return a new set of modified children. This is particularly useful when dealing with dynamic or unknown children in a component.
**In React, props are immutable. You’re not allowed to directly modify child.props because it mutates the original child element, which goes against React’s principle of immutability.**
```
React.Children.map(children, function(child[, index]) { ... });
// children: The children prop you want to iterate over.

// child: Each child element in the children prop.

// index (optional): The index of the current child in the iteration.
```
Why Use React.Children.map()?
- Safety: Unlike Array.prototype.map(), it works seamlessly with React’s children, even when they are null, undefined, or a single element (not an array).

- Transform Children: You can modify or augment child components dynamically.

- Consistency: Ensures that all children are traversed, regardless of their structure (array or single element).
```
import React from "react";

function Parent({ children }) {
  const modifiedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      className: `child-${index}`,
    });
  });

  return <div>{modifiedChildren}</div>;
}

function App() {
  return (
    <Parent>
      <p>First Child</p>
      <p>Second Child</p>
      <p>Third Child</p>
    </Parent>
  );
}

export default App;
```


## Higher Order Component


## render Props 


## React Testing Library 
The screen utility in React Testing Library is a global object that provides access to the DOM rendered during a test. When you use React Testing Library to render a component, the component and its children are rendered into a real DOM tree (in a virtual browser environment like JSDOM), and screen lets you query this DOM.

## Jest 

## Questions
- How to pass data from child to parents?
- How to render an element outside of component scope/tree? Create Portal from "react-domain"
- how to implement code splitting in Reacp apps and why?

## To read more:
- Bundle, Websocket, Markup, Javascript promises, Callback, useDebouncer
- What is the proper way of designing a useEffect? do we really have to define the function inside?

## To create code sample:
- Lazy loading, Suspense, React code splitting
- Redux: you can create a dark mode toggler to practice

  

## Resources
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 - https://react.dev/learn/rendering-lists#rendering-data-from-arrays
 - https://react.dev/learn/rendering-lists#where-to-get-your-key
 - https://react.dev/blog/2023/03/16/introducing-react-dev
 - https://legacy.reactjs.org/docs/forms.html
 - https://formik.org
 - https://github.com/jquense/yup
 - https://github.com/react-hook-form/react-hook-form
 - https://legacy.reactjs.org/docs/react-api.html#reactmemo
 - https://legacy.reactjs.org/docs/hooks-reference.html#usememo
 - Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 - Props: https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component
 - useState: https://react.dev/reference/react/useState
 - useEffect: https://react.dev/reference/react/useEffect
 - Hooks: https://legacy.reactjs.org/docs/hooks-rules.html
 - Promises: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
 - Async/await: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 - useReducer: https://react.dev/reference/react/useReducer
 - useRef: https://react.dev/reference/react/useRef
 - Custom Hooks: https://react.dev/learn/reusing-logic-with-custom-hooks
 - Premade Components: https://www.chakra-ui.com/playground
 - Redux: https://react-redux.js.org/api/connect, https://redux.js.org/api/compose
 - Loadash: https://lodash.com/docs/4.17.15#flowRight
 - Downshift ( automcomplete, combobox, select experience components): https://github.com/downshift-js/downshift
 - Render Props: https://legacy.reactjs.org/docs/render-props.html
 - Higher Order Components: https://legacy.reactjs.org/docs/higher-order-components.html
 - Forwarding refs in higher order components: https://legacy.reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components
 - Testing: https://testing-library.com/docs/dom-testing-library/api-events
 - React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
 - CI / CD: https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment
 - Practical Test Pyramid: https://martinfowler.com/articles/practical-test-pyramid.html
 - Jest: https://jestjs.io/docs/getting-started
 - ChakraUI: https://www.chakra-ui.com/docs/components/concepts/overview
 - Formik ( to create forms ): https://formik.org/docs/overview
 - Yup ( complement to Formik for validation ): https://github.com/jquense/yup
