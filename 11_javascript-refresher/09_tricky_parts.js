console.log(5 == "5");
console.log(5 === "5");

let a;
const b = null;

console.log(a);
console.log(b);

const student = {
  name: "joshua",
  age: 22,
  regFunc: function () {
    console.log(this.name, this.age);
  },
  arrowFunc: () => {
    console.log(this.name, this.age);
  },
};

student.regFunc();
student.arrowFunc();

const array1 = [1, 2, 3];
const array2 = array1; 

array2.push(4);
console.log(array1)
console.log(array2)


const arr1 = [1, 2, 3];
const arr2 = [...arr1] 

arr2.push(4);
console.log(arr1)
console.log(arr2)