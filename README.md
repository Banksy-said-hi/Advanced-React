# Advanced React
### Filter( )
In JavaScript, when using the filter method on an array, the predicate function should return a Boolean value (true or false) for each element.

- true means the element will be included in the resulting filtered array.
- false means the element will be excluded.

### Sorting( )
arrays in JavaScript offer the sort() method, which sorts the elements of an array based on a comparison function provided. The return value from that comparison function determines how the sorting is performed

<img width="988" alt="Screenshot 2024-11-06 at 9 10 53 AM" src="https://github.com/user-attachments/assets/9a69a506-9ffe-43fc-9214-13f0e900bd8f">

### Mapping( )
to apply the desired projection and display the information as requested, you can chain the map operator at the end and return a <li> item with the dessert name and its calories.

## React Hooks 
### Hooks Basic Rules:
- You should only call hooks from a React component function ( You should not call hooks inside loops )
- Only call hooks at the **top level** of a React component function ( outside of loops, conditions, and nested functions ) ( You should not call hooks inside if statements ) ( You should not call hooks inside nested functions ) ( You can call multiple state hooks and effect hooks inside a component )
- You are allowed to call multiple state or effect hooks inside a component 
- Make multiple hook calls **in the same sequence**

### useReducer( )
The useReducer hook gets an initial state and a reducer function.  

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

## React.Children( )
This is a helper for working with props.children (the stuff you pass inside a component). It helps inspect, modify, or loop through the children elements safely. **Why use it?** When you need to interact with or manipulate child elements, especially when there are multiple.

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
