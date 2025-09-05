const aboutMe = {
  name: "Joshua",
  age: 22,
  course: "BSIS",
  introduce() {
    console.log("Hi, my name is " + aboutMe.name + " and I am " + aboutMe.age + " years old.");
  }
};

aboutMe.hobby = "cycling"

aboutMe.introduce();
console.log(aboutMe);