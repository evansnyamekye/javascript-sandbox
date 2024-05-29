// **Instructions:**

/*Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under.
 The `name` property should have their first and last name.
*/

const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  /*
 1. Take the people array 
 2. Create an array called youngPeople - stores objects with ONLY name & email.
 4. properties of all the people that are 25 and under
 3.the `name` properties should have first name and last name 
  */

const youngPeople = people.
filter((person) => person.age <= 25)
.map((person) => ({
    email: person.email, 
    phone: person.phone,
    name: person.firstName + ' ' + person.lastName,
}))
console.log(youngPeople); 

/*
Take the employees array and create an array called experiencedEmployees that 
stores objects with ONLY the name and position properties of all the employees
 that have more than 5 years of experience. The name property should be a combination of first name and last name.
*/

const employees = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      experience: 15,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      experience: 47,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      experience: 25,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      experience: 2
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      experience: 2
    },
  ];

const experiencedEmployees = employees.
filter((person) => person.experience >= 5)
.map((employees) => ({
    name: employees.firstName + ' ' + employees.lastName,
    email: employees.email
}))

console.log(experiencedEmployees); 
