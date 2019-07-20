const greeter = (name, age = 'unknown') => {
    console.log(`Hello ${name}, your age is ${age}`);
}

greeter('Lando');
// Parameters are set to undefined if not sent
// If they have a default value, they get set to that instead
greeter();  