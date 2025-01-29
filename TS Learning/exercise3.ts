enum Rola {
    admin = "ADMIN",
    editor = "EDIT",
    viewer = "VIEW"
}

interface User {
    readonly i: number,
    name: string,
    mail: string, 
    readonly gender: "Female" | "Male",
    a: number,
    role: Rola
}


const aga: User = {
    i: 1,
    name: "Aga", 
    mail: "aga@example.com",
    gender: "Female",
    a: 30,
    role: Rola.admin
}

const tomi: User = {
    i: 2,
    name: "Tomasz", 
    mail: "tomek@example.com", 
    gender: "Male",
    a: 25, 
    role: Rola.editor
}

const pablo: User = {
    i: 3, 
    name: "Paweł",
    mail: "pawel@example.com",
    gender: "Male", 
    a: 20,
    role: Rola.viewer
}

type userUpdater = (file:User) => User; 

const updateFileName: userUpdater = (file) => {
    return { ...file, name: file.name + "_updated" }; 
}

