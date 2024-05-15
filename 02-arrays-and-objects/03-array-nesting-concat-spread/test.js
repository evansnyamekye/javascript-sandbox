// const arr = [1,2,3,4,5]; 

// arr.reverse();
// arr.push(0);
// arr.unshift(6)

// console.log(arr);
/*Requirement 
we need to look at values conatined in the array
if there is a duplicate, we will use the slice method to take it off 
before we use the concat method to merge these arrays. 
*/
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8,9,10];

const arr3 = arr1.slice(0, 4).concat(arr2); 
console.log(arr3);
 