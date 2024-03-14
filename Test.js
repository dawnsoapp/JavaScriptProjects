// operators
let x = 5;
let y = 10;
let z = x + y;
console.log(x *= y);
console.log(z);

// variables + string
let firstName = "John", lastName = "Doe", age = 35;
console.log("His name is", firstName, lastName, "and he is", age, "years old.");

// objects 
const person = {
    firstName: "Dawn",
    lastName: "Soap"
};
console.log(person.firstName, person.lastName);

const person2 = {
    name : "Tulip", age : 27
}
console.log(person2.name, "is", person2.age)

let roses = "roses";
roses = roses.toUpperCase();
console.log(roses)
let sunflowers = "SUNFLOWERS";
sunflowers = sunflowers.toLowerCase();
console.log(sunflowers);

// arrays 
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2)
fruits.push("Cherry")
fruits.sort()
console.log(fruits)