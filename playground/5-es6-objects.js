// Object property shorthand

const name = 'Lando';
const userAge = 36;

const user = {
    // Same as name: name,
    // Works because the property name and the variable have the same name
    name,
    age: userAge,
    location: 'Buenos Aires'
}

console.log(user);

// Object desctructuring

const product = {
    label: 'Red Notebook',
    price: 4,
    stock: 201,
    salePrice: undefined
};

// ES5
// const label = product.label;
// const stock = product.stock;

// ES6
const {label:productLabel, stock, rating = 0} = product;

// We can specify a custom variable name with the following format
// property:variableName

// We can specify a default value a variable with the following format
// property = 'default value'

console.log(productLabel);
console.log(stock);

// Non existing object properties get undefined value, no error is shown
console.log(rating);

// Destructuring also works on function arguments that receive an object
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product);