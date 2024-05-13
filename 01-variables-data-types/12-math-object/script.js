
const x = Math.floor(Math.random() * 100 + 1); 
const y = Math.floor(Math.random() * 50 + 1);

console.log(x, y); 

//Get the sum
const sum = x + y; 
const sumOutPut =  `${x} + ${y}; = ${sum}`
console.log(sumOutPut); 

//Get the different
const diff = x - y; 
const diffOutPut =  `${x} - ${y}; = ${diff}`
console.log(diffOutPut); 

//Get the product
const prod = x * y; 
const productOutPut =  `${x} * ${y}; = ${prod}`
console.log(productOutPut); 

//Get the quotient
const qua = x / y; 
const quodientOutPut =  `${x} / ${y}; = ${qua}`
console.log(quodientOutPut); 


//Get the sum
const reminder = x % y; 
const reminderOutPut =  `${x} % ${y}; = ${reminder}`
console.log(reminderOutPut); 
