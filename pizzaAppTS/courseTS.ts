let myName: string = "Bob"
const myName2 = "Bob"
let numberOfWheels: number = 4
let isStudent: boolean = false

type Food = string
let favouriteFood: Food = "pizza"


type Person = {
    name: string, 
    age: number, 
    isStudent: boolean,
    address?: Address,
    role: UserRole
}

type Address = {
    street: string,
    city: string, 
    country: string
}

let person1: Person = {
    name: "Joe",
    age: 22,
    isStudent: true,
    role: "member"
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "124 Main",
        city: "New York",
        country: "USA"
    },
    role: "guest"
}

let ages: number[] = [100, 101]
//ages.push("sto")

let people: Person[] = [person1, person2]

let students: Array<Person> = [person1]


type UserRole = "guest" | "member" | "admin"
let userRole: UserRole = "admin"

// let value: any = 1
// value.toUpperCase() 
// value = "Hi!"
// value.map()

const gameScores = [14, 21, 33, 42, 59]
const favouriteThings = ["thing1", "thing2", "thing3", "thing4"]
const voters = [{name: "Alice", age: 42}, {name: "Bob", age: 40}]

function getLastItem<PlaceholderType>(array: PlaceholderType[]){
    return array[array.length - 1]
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));