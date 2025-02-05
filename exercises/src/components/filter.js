// TASK:
// You are given an array of cars
// You have to render the list of cars in the browser
// there should be an input accepting string from the user
// the result should be filtered based on the input
// the filter should be case insensitive
// the filter should be based on the model of the car
// the filter should be done in real time
// the input should be a controlled component
// the input should be a text input
import '../App.css';
import { useState } from 'react';
import React from 'react';

function Filter() {
  // 20 cars in an array
  const cars = [
    { make: 'Ford', model: 'Fiesta' },
    { make: 'Ford', model: 'Focus' },
    { make: 'Ford', model: 'Mustang' },
    { make: 'Nissan', model: 'GT-R' },
    { make: 'Nissan', model: '370Z' },
    { make: 'Nissan', model: 'Sentra' },
    { make: 'Honda', model: 'Accord' },
    { make: 'Honda', model: 'Civic' },
    { make: 'Honda', model: 'CR-V' },
    { make: 'Toyota', model: 'Corolla' },
    { make: 'Toyota', model: 'Camry' },
    { make: 'Toyota', model: 'Prius' },
    { make: 'Chevrolet', model: 'Impala' },
    { make: 'Chevrolet', model: 'Malibu' },
    { make: 'Chevrolet', model: 'Camaro' },
    { make: 'Volkswagen', model: 'Jetta' },
    { make: 'Volkswagen', model: 'Passat' },
    { make: 'Volkswagen', model: 'Beetle' },
    { make: 'Tesla', model: 'Model S' },
    { make: 'Tesla', model: 'Model 3' },
  ];

  const [input, setInput] = useState('');

  // setFilteredCars())
  const filteredCars = cars.filter((car) => car.model.toLowerCase().includes(input.toLowerCase()));

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange}/>
      {filteredCars.map((car) => (
        <div>
          <p>{car.model}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
