function highAndLow (numbers) {
let high = Math.max( ... numbers.split(" ").map(Number));
let low = Math.min( ... numbers.split(" ").map(Number));
return "(" + high + " " + low + ")";
}

console.log(highAndLow("1 2 3 4 5")) // "5 1"
console.log(highAndLow("1 2 -3 4 5")) // "5 -3"
console.log(highAndLow("1 9 3 4 -5")) // "9 -5"