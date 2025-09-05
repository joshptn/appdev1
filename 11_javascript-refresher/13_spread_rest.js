const numbers = [1, 2, 3];
const user = { name: "joshua", age: 22 };

const newNumbers = [...numbers, 4, 5];
const newUser = { ...user, hobby: "cycling" };

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}


console.log(newNumbers);
console.log(newUser);
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));