# JavaScript Inheritance

http://www.objectplayground.com/

+ JS Inheritance vs Clasical Inheritance
+ Approach 1: Instance of parent as prototype
+ Approach II: Parent and child share prototype
+ Approach C: Use a Surrogate function
+ ES2015 syntax
+ Approach four: `Object.create`


## Approach 1: Instance of parent as prototype (flawed)

```javascript
function Animal(name) {
  this.name = name;
}
function Cat(name, age) {
  this.age = age;
  // Should I set the name? is the name already set?
}
Cat.prototype = new Animal();
```

**Pros**: This is simple :)
**Cons**: Requires creating an instance of `Animal`.
Q: What is the `Cat` prototypes name? What if the Animal constructor required
`name`?


## Approach II: Parent and child share prototype (flawed)

```javascript
function Animal(name) {
  this.name = name;
}
function Cat(name, age) {
  this.name = name;
  this.age = age;
}
Cat.prototype = Animal.prototype
```

**Cons**: Changes to `Cat` will be applied to `Animal`. :( Not all `Animal`'s
`meow`.


## Approach C: Child prototype's __proto__ points at Parent prototype

```javascript
function Animal(name) {
  this.name = name;
}
function Cat(name, age) {
  this.name = name;
  this.age = age;
}
function Surrogate() {}
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate();
```

**Pros**: We have control over what the Surrogate constructor does.
Modifications to the Cat's prototype are not propogated to the Animal's
prototype. Lookup works.
**Cons**: Confusing.


## Class Syntax (ES6)

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
```

**Pros**: Less verbose, more familiar syntax.
**Cons**: Not fully supported.

## Approach four: `Object.create`

```javascript
function Animal(name) {
  this.name = name;
}
function Cat(name, age) {
  this.name = name;
  this.age = age;
}
Cat.prototype = Object.create(Animal.prototype);
```

**Pros**: All the benefits of using a Surrogate fn.
**Cons**: ?
