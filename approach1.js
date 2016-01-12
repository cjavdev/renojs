const assert = require('assert');

function Animal(name) {
  // assert(name);
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log('Animal#eat');
};

Animal.prototype.ageOneYear = function() {
  this.age++;
  console.log(this.name + ' is getting older! They are now: ' + this.age);
  return this.age;
};

function Cat(name, age) {
  this.age = age;
  // Should I set the name? is the name already set?
}

Cat.prototype = new Animal();

Cat.prototype.eat = function() {
  console.log('Cat#eat: ', this.name);
};

var gizmo = new Cat('gizmo', 7);
gizmo.eat();
gizmo.ageOneYear();
