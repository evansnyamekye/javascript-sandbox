let x; 
const person = {
        name: 'Evans K', 
        age: '38', 
        isAdmin: true,
        address: {
            street: '#7 new bortianor - 2nd street Golden',
            state: 'Greater Accra - Ga South', 
            city: 'West Hills - Weija'
        },

        hobbies: 'music, dancing'
    }; 

    x = person.name; 
    x = person.address.state; 
    x = person.hobbies;

    person.name = 'Auntie Ceci';

    x = person; 

console.log(x);

