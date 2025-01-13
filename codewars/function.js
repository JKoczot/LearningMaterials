function typeOfSum(a, b) {
    let result = a + b;
    return typeof result; 
  }

let ab = 1
let bc = 2
let cd = "a"
let de = "b"

console.log(typeOfSum(ab, bc));
console.log(typeOfSum(cd, de));
console.log(typeOfSum(ab, de));
console.log(typeOfSum(cd, bc));