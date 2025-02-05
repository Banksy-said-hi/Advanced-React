// Numerical input formatting
// TASK: 
// Create an inpiut field that formats the input as a phone number.
// Adding paranthesis around the first 3 digits and a dash after the 7th digit.
// not solved yet!

import React, {useState, useRef} from 'react'

const NumericalInputFormatting = () => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const value = e.target.value;
        const digitCount = value.length;
        setInput(digitCount)
        if(digitCount === 3) {
            inputRef.current.value = "(" + value + ")";
        } else if (digitCount === 8) {
            inputRef.current.value = value + "-";
        }
    }

    return (
        <div className="App">
        <input onChange={handleChange} ref={inputRef} maxLength={12}/>
        <br/>
        {input}
        </div>
    )
}

export default NumericalInputFormatting
