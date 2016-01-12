const assert = require('assert');

function Animal(name) {
  // assert(name);
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log('Animal#eat the food!');
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

Cat.prototype = Animal.prototype;

Cat.prototype.meow = function() {
  console.log(this.name + ' says Cat#meow');
};

Cat.prototype.eat = function() {
  console.log('Cat#eat: ', this.name);
};

// https://s-media-cache-ak0.pinimg.com/736x/90/b8/6a/90b86af93a54b86b9a682e45f97b1acf.jpg
var giraffeSheep = new Animal('Tina');
giraffeSheep.meow();

// var gizmo = new Cat('gizmo', 7);
