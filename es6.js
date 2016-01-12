/*globals console, class */
/*jshint node: true */
'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`Animal#eat the food, ${this.name}!`);
  }

  ageOneYear() {
    this.age++;
    console.log(`${this.name} is getting older! They are now: ${this.age}`);
    return this.age;
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  meow() {
    console.log(`${this.name} says Cat#meow`);
  }

  eat() {
    console.log(`Cat#eat: ${this.name}`);
  }
}

// https://s-media-cache-ak0.pinimg.com/736x/90/b8/6a/90b86af93a54b86b9a682e45f97b1acf.jpg
var giraffeSheep = new Animal('Tina');
// giraffeSheep.meow();
giraffeSheep.eat();

var gizmo = new Cat('gizmo', 7);
gizmo.meow();
gizmo.ageOneYear();
