# 🌟 Advanced React

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

## React Hooks 
### Hooks Basic Rules:
- You should only call hooks from a React component function ( You should not call hooks inside loops )
- Only call hooks at the **top level** of a React component function ( outside of loops, conditions, and nested functions ) ( You should not call hooks inside if statements ) ( You should not call hooks inside nested functions ) ( You can call multiple state hooks and effect hooks inside a component )
- You are allowed to call multiple state or effect hooks inside a component 
- Make multiple hook calls **in the same sequence**

### ⚖️ useReducer( )
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

### useRef( )
The returned value from the useRef hook invocation is an object.  

### Fetch( ), Asynchronous Javascript
-

### Custom Hooks
- Name them with “use”
- Only use hooks inside custom hooks
- Custom hook should at least use one built in React hook  
- Custom hooks must also follow these key rules:
   - Only call hooks at the top level: No hooks inside loops, conditions, or nested functions.
   - Only call hooks in React functions: This means inside components or other custom hooks.
- Custom hooks don’t have a render cycle:
  - Unlike components, custom hooks are just functions.
  - They don’t return JSX; instead, they return values or functions to be used by a component.
  
## Children Prop, Component Composition
- Containment: **What it means?** It’s about passing components inside other components using the children prop. **Why it’s useful?** It allows you to make flexible and reusable components that “contain” other elements or components.
  
- Specialization: **What it means?** It’s about creating a specific version of a more general component. **Why it’s useful?** It lets you reuse the base functionality of a component but tailor it for specific use cases.

## React.Clone( )
This lets you copy and modify an existing React element. It’s like creating a “twin” of an element, but you can change its props or add new ones. **Why use it?** When you need to pass additional props or modify existing ones on a child element without directly changing it.
### React.cloneElement( )
The output of React.cloneElement() is a new React element that is a copy of the original element, but with any new or modified props added.

## React.Children( )
This is a helper for working with props.children (the stuff you pass inside a component). It helps inspect, modify, or loop through the children elements safely. **Why use it?** When you need to interact with or manipulate child elements, especially when there are multiple.
### React.Children.map( )
The output of React.Children.map() is a new array of React elements where each element is the result of applying the callback function to each child.


## Containment 


## Specialization


## Higher Order Component


## render Props 


## React Testing Library 


## Jest 


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
