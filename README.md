# Advanced-React
## Filter( )
In JavaScript, when using the filter method on an array, the predicate function should return a Boolean value (true or false) for each element.

- true means the element will be included in the resulting filtered array.
- false means the element will be excluded.

```
const numbers = [5, 12, 8, 130, 44];

const filteredNumbers = numbers.filter((num) => num > 10);

console.log(filteredNumbers); // Output: [12, 130, 44]
```

## Sorting( )
arrays in JavaScript offer the sort() method, which sorts the elements of an array based on a comparison function provided. The return value from that comparison function determines how the sorting is performed

<img width="988" alt="Screenshot 2024-11-06 at 9 10 53 AM" src="https://github.com/user-attachments/assets/9a69a506-9ffe-43fc-9214-13f0e900bd8f">

## Mapping( )
to apply the desired projection and display the information as requested, you can chain the map operator at the end and return a <li> item with the dessert name and its calories.
```
const DessertsList = (props) => {
 const lowCaloriesDesserts = props.data
   .filter((dessert) => {
     return dessert.calories < 500;
   })
   .sort((a, b) => { 
     return a.calories - b.calories; 
   })
   .map((dessert) => { 
     return ( 
       <li>
         {dessert.name} - {dessert.calories} cal 
       </li> 
     ); 
   }); 
 return <ul>{lowCaloriesDesserts}</ul>; 
}
export default DessertsList;
```
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
 - 
