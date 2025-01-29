class Animals {
    makeSound(): void{
        console.log("Uknown sound.")
    }
}

class Dog extends Animals {
    makeSound(): void {
        console.log("Woof, woof")
    }
}

class Cat extends Animals {
    makeSound(): void {
        console.log("Meow, meow")
    }
}

const cat = new Cat
const animals = new Animals
const dog = new Dog

animals.makeSound()
cat.makeSound()
dog.makeSound()
