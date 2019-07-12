setTimeout(() => {
    console.log('2 seconds are up!');
}, 2000);

names = ['Lando', 'Pat', 'Javier'];
shortNames = names.filter(name => name.length <= 4);

console.log(shortNames);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitute: 0
        }

        callback(data);
    }, 2000);
};

geocode('Buenos Aires', (data) => {
    console.log(data);
});

// Challenge

// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = num1 + num2;
        callback(sum);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})