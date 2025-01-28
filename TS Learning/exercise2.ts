interface Uzytkownik {
    readonly identyfikator: number,
    email: string,
    imie?: string,
    // role: Role
}

// enum Role{
//     admin,
//     editor,
//     viewer
// }

const user01: Uzytkownik = {
identyfikator: 1,
email: "admin@example.com",
imie: "Jan", 
// role: Role.admin
}

const user02: Uzytkownik = {
identyfikator: 2,
email: "monika@example.com",
imie: "Monika", 
// role: Role.editor
}

const user03: Uzytkownik = {
identyfikator: 3,
email: "klopsik@example.com", 
// role: Role.viewer
}

const user04: Uzytkownik = {
identyfikator: 4,
email: "adam@example.com",
imie: "Adam", 
// role: Role.viewer
}

const userBase: Uzytkownik[] = [user01, user02, user03, user04];

function findUserById(id: number): string {
    const user = userBase.find(user => user.identyfikator === id);
    return user ? `To ID nalezy do ${user.imie}` : `Nie ma takiego ID`;
}

console.log(findUserById(2)); 
console.log(findUserById(5));