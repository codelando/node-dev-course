const fs = require('fs');

// const book = {
//     title: 'The Lean Startup',
//     author: 'Eric Ries'
// }

// // Convert to JSON string.
// const bookJSON = JSON.stringify(book);
// // Write JSON to file.
// fs.writeFileSync('1-json.json', bookJSON);

// // Convert to JS object.
// // const bookObject = JSON.parse(bookJSON);
// // console.log(bookObject.author);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Read file and parse data
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// Modify properties and save new data
user.name = 'Lando';
user.age = 36;
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON);