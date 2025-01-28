/*function multiply (a: number, b: number): number{
    return a * b;
}*/
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(2, 3));


function greeter(name?: string): string{
    return name ? `Hello ${name}` : "Hello guest!"
};

console.log(greeter('Jasiek'));
console.log(greeter());

function adder(c: string, d: string): string{
    return `${c} ${d}`;
}

console.log(adder("hello", "test"));

type parameters = string | number

function parametersValue(abc: parameters): parameters {
    return typeof abc === "string" ? abc.length : abc + 1;
}

console.log(parametersValue("Maciej"));
console.log(parametersValue(3));

interface User {
    id: number,
    name: string,
    email?: string,
    age?: number
}

function userCheckUp (abc: User): string {
    return abc.email ? `User ${abc.name} with id = ${abc.id} has ${abc.email} email` : `User ${abc.name} doesnt have email`
}

const tomek: User = {
    id: 1, 
    name: "Tomek",
    email: "tomek@tomek.pl",
    age: 28
}


console.log(userCheckUp(tomek));
console.log(userCheckUp(tomek));


function innaNazwa(a, b){
    return a + b;
}

console.log(innaNazwa(1, 0));
console.log(innaNazwa(3, 15));
