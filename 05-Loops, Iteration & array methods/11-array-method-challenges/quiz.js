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

const youngPeople = people.filter((person) => person <= 25); 

console.log(youngPeople);

/*
1. From the products array.
2. create an array called availableProducts that contains objects with ONLY 
 the productName and price properties of products 
 that are in stock.
3. The productName property should 
 be a concatenation of the brand and model.
*/
const products = [
  {
    productName: 'spagatti',
    brand: 'sicilly-wave',
    model: 'FDF-Q23',
    shopLinStock: true,
    price: 48
  },
  {
    productName: 'rice',
    brand: 'tatalia-longrain',
    model: 'THIA-R21',
    inStock: true,
    price: 211
  },
  {
    productName: 'beef',
    brand: 'excerter',
    model: 'EV231',
    inStock: true,
    price: 241
  },
  {
    productName: 'chicken',
    brand: 'Darko-farms',
    model: 'DKR-90',
    inStock: true,
    price: 643
  },
  {
    productName: 'cheese',
    brand: 'barely-BRAD',
    model: 'ChessKits',
    shopLocinStock: true,
    price: 48
  }
];

const availableProducts = products.filter(product => 
product.inStock)
  .map((product) => ({
   productName: `${product.brand}`,
   price: `${product.price}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  })
 );


console.log(availableProducts)
