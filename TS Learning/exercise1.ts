interface User{
    id: number, 
    name: string, 
    email?: string
}

const user1: User = {
    id: 28,
    name: "Jasiek",
    email: "jk@exmaple.com"
}

const user2: User ={
    id: 10,
    name: "Agnieszka"
}

const user3: User ={
    id: 11,
    name: "Jacek"
}

const user4: User ={
    id: 25,
    name: "Monika",
    email: "monika@example.com"
}
type selector = string | number 

function processValue(x: selector): selector{
    return typeof x === "string" ? x.length : x + 1;
}

function greetUser (user: User): string{
return user.email ? `Hello, ${user.name}! Your email: ${user.email}` : `Hello, ${user.name}!`;
}

let usersBase = [user1, user2, user3, user4];

console.log(greetUser(user1));
console.log(greetUser(user2));
console.log(greetUser(user3));
console.log(greetUser(user4));

console.log(greetUser(pablo))