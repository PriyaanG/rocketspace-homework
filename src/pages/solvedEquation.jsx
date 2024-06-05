import React from 'react';

const solvedEquation = ({ numbers, operation }) => {
   
  if (operation == "+") {
  for (let i = 0; i < numbers.length; ++i){ 
    answer = answer + numbers[i]
  } 
    if (operation == "*") {
    for (let i = 0; i < numbers.length; ++i){
// We set it to 1 because n * 1 = n. 
// If we had set it to 0, we'd be multiplying by 0. 
let output = 1; 
// Loop over the array starting from index 0 to it's length. 

  output *= numbers[i]; 

      answer = output
 console.log("The product is: " + output); 
  } 
      
      if (operation == "-") {
  for (let i = 0; i < numbers.length; ++i){ 
    answer = answer - numbers[i]
  } 
      
        if (operation == "/"){
          for (let i = 0; i < myArray.length; ++i) { 
   if (i = 0){
     output = numbers[i]
   }
   else{
     answer = output /= numbers[i]
   }         
} 
      
 console.log("The quotient is: " + answer); 
  } 
        }
        
  return (
    <div>
      <h2>Array of Numbers</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default solvedEquation;
