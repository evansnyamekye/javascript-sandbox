//Challenge 1
const getCelsius = (f) =>  (f - 32) * 5 / 9;  
console.log(`The Temperature is ${getCelsius(50)} \xB0C`); 

//Challenge 2
function minMax(arr){
    const min = Math.min(...arr); 
    const max = Math.max(...arr)

    return {
        min,
        max
    }
}

console.log(minMax([1,2,3,4,5,6])); 


//Challenge 3
((length, width) => {
    const area = length * width; 

    const output = `The area of a rectangle with a length of ${length} 
    and a width of ${width} is ${area}.`;
    
    console.log(output); 
})(20, 5);


const x = 10; 
const y = 5


if (x === y) {
console.log(`${x} is equal than ${y}`)
} else {
    console.log(`${x} is NOT equal to ${y}`)
}

const d = new Date(10, 30, 20, 8, 0, 0); 
const hour = d.getHours(); 

if (hour < 10){
    console.log('good morning')
} else {
    console.log('good evening')
}


const age = 18; 

if (age >= 15) {
        console.log('You can vote')
} else {
    console.log('You can not vote');
}

