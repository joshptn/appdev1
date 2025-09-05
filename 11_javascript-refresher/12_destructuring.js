const person = {
  name: "joshua", 
  age: 22  
};

const hobbies = ["cycling", "riding"]; 

function printName(person) {
  const {name, age} = person
  
  console.log(name, age)
}

console.log(hobbies[0], hobbies[1])
printName(person)