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
console.log(cat.makeSound())