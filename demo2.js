'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  ageOneYear() {
    this.age++;
    console.log(`${this.name} is now ${this.age}!`);
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  meow() {
    console.log(`${this.name} says meow`);
  }
}

var g = new Animal('gizmo');
g.ageOneYear();
g.meow();
