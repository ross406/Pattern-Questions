// const arrayOfObjects = [
//   { name: 'Shyam', city: 'Pune' },
//   { name: 'Ram', city: 'Pune' },
//   { name: 'Mohit', city: 'Mumbai' },
//   { name: 'Roshan', city: 'Bangluru' },
//   { name: 'Naveen', city: 'Chennai' },
// ];

// const pune = arrayOfObjects.filter((arr) => {
//   // if (arr.city === 'Pune') {
//   //   return arr.city;
//   // }
//   arr.city === 'Pune';
// });

// const cities = arrayOfObjects.map((arr) => {
//   return arr.city;
// });

// console.log(cities);

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let counter = 0;
let string = '';

for (let i = 1; i < 16; i++) {
  string += `${i}`;

  string += ' ';

  if (i === 1 || i === 3 || i === 6 || i === 10) {
    string += '\n';
  }
}

console.log(string);
