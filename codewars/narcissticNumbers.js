function narcissistic(value) {
let valueArray = value.toString().split('').map(Number);
let score = 0;
for (let i = 0; i < valueArray.length; i++){
    score += Math.pow(valueArray[i],  valueArray.length);
}
return score === value;
  }

  
console.log(narcissistic(153))