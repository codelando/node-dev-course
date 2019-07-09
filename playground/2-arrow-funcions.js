// const square = function (x) {
//     return x * x;
// }

// Arrow function (long form)
// const square = (x) => {
//     return x * x;
// }

// Arrow function (short form)
// If the function consists of only one return statement, we can omit the curly braces
// and the return keyword
// const square = (x) => x * x;

// If we only have one parameter, we can also omit the parentesis from the parameter
// const square = x => x * x;

// console.log(square(3));

// const event = {
//     name: 'My birthday party',
//     // Regular function, can access object properties using this keyword
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name);
//     }
// }


// const event = {
//     name: 'My birthday party',
//     // Arrow function, CAN'T access object properties using this keyword
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name);
//     }
// }

const event = {
    name: 'My birthday party',
    guestList: ['Lando', 'Javi', 'Pat'],
    // ES6 object method, can access object properties using this keyword
    printGuestList() {
        console.log('Guest list for ' + this.name);

        // // Won't work as a regular function will bind this keywork to it's parent
        // this.guestList.forEach(function (guest) {
        //     console.log(`${guest} is attending ${this.name}`);
        // });

        // Will work as an arrow function won't bind this keywork to it's parent
        this.guestList.forEach((guest) => {
            console.log(`${guest} is attending ${this.name}`);
        });
    }
}

event.printGuestList();