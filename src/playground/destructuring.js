//Object Destructuring
//
// console.log('destructuring')
// const person = {
//   name: 'Roger',
//   age: 36,
//   location: {
//     city: 'Dallas',
//     temp: 90
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`)

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


// Array Destructuring
//
//

const address = ['1703 Brookhollow Dr', 'Carrollton', 'Texas', '75010']
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [name, , mediumPrice] = item;
console.log(`A medium ${name} costs ${mediumPrice}`)