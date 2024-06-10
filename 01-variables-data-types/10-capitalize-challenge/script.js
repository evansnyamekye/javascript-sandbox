//I would first declare a const variable
const myString = 'environment';

let myNewString; 

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1); 
myNewString = myString[0].toUpperCase() + myString.substring(1); 
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`; 

console.log(myNewString);
 