'use strict';
const assert = require('assert');

function Animal(name) {
  assert(name);
  this.name = name;
}

function Cat(name, age) {
  this.age = age;
  Animal.call(this, name);
}

Animal.prototype.meow = function() {
  console.log(`${this.name} says meow`);
};

Cat.prototype = Object.create(Animal.prototype);

// var giraffeSheep = new Animal('Tina');
// giraffeSheep.meow();
// var gizmo = new Cat('gizmo', 7);
// gizmo.meow();
// console.log(gizmo.name);
//

var olaf = {
  name: 'olaf',
  melt: function () {
    console.log(`${this.name} is melting....`);
  },
};

var frosty = Object.create(olaf);
frosty.name = 'frosty';
frosty.melt();
