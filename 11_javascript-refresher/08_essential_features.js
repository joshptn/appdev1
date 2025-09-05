const hobbies = ["cycling", "swimming", "riding"]
hobbies.map(hobby => console.log(hobby))


const student = { name: "joshua", age: 22 };
const { name, age } = student;

console.log(name);
console.log(age);

const array = [1, 2, 3]
const newArray= [...array, 4, 5]

console.log(newArray);