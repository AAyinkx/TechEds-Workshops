//Class is a blueprint for creatinng objects
class Animal {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  poop() {
    console.log(`${this.name} poops.`);
  }

  eat() {
    console.log(`${this.name} eats ${this.food}`);
  }
}

const animal = new Animal("Dog", "marmite");
animal.speak(); // Dog makes a noise.
animal.poop(); // Dog poops.
animal.eat();

class Dog extends Animal {
  constructor(name, food, breed) {
    super(name, food);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} is a ${this.breed}. They bark very loudly`);
  }
}
const dog = new Dog("Bart", "Dinosaurs", "Great dane");
dog.speak();

class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps`);
  }
}
const birdie = new Bird("Sparrow");
birdie.speak();
class FlyingAnimal extends Animal {
  fly() {
    console.log(`${this.name} flies.`);
  }
}
class Pig extends FlyingAnimal {
  speak() {
    console.log(`${this.name} oinks.`);
  }
}
const pig = new Pig("Porky");
pig.speak(); // Porky oinks.
pig.poop(); // Porky poops. (inherited from Animal)
pig.fly(); // Porky flies. (inherted from FlyingAnimal)
