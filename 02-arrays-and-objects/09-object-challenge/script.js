//step 1
const library = [
    {
    title: 'the god father',
    author: 'scarface',
    status: {
        own: true,
        reading: false, 
        read: false
    },
},
    {
    title: 'Windows',
    author: 'bill gate',
    status: {
        own: true,
        reading: false, 
        read: false
    },
},
    {
    title: 'escalete-Inherittance',
    author: 'bond will',
    status: {
        own: true,
        reading: false, 
        read: false
    },
}
]; 

//step 2
library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;

//step 3
const { title: firstbook } = library[0]; 
console.log(firstbook)







