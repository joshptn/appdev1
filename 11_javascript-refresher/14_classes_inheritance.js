class Person {
  constructor(name) {
    this.name = "joshua";
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

class Student extends Person {
  studying() {
    console.log(this.name + " is studying");
  }
}

const person = new Person()
const student = new Student()
person.sayHello()
student.sayHello()
student.studying()