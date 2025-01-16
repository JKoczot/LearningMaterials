function centuryCalc (number){
 return number % 100 === 0 ? Math.floor(number / 100) : Math.floor(number / 100) + 1;
}

console.log(centuryCalc(1111));
console.log(centuryCalc(2015));
console.log(centuryCalc(2000))

//const century = year => Math.ceil(year/100)