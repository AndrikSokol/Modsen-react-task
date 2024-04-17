class Human {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`
    );
  }
}

const person1 = new Person("YA", 30, "Russia");
const person2 = new Person("Andrik", 21, "Belarus");

person1.displayInfo();
person2.displayInfo();
