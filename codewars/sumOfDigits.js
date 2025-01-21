function digitalRoot(n) {
if (n < 10){
    return n;
} else {
let nArray = n.toString().split('').map(Number);
let sum = nArray.reduce((accumulator, currentValue) => {
return accumulator + currentValue;
}, 0);
return digitalRoot(sum);
}

  }

  console.log(digitalRoot(16)); // 7
  console.log(digitalRoot(456)); //6
  console.log(digitalRoot(5)); //5

   /*let scoreTooLong = 0;
    if (numberArray.length === 2){
scoreCorrect = numberArray[0] + numberArray[1];
    } else if (numberArray.length === 1) {
scoreCorrect = numberArray[0];
    } else {
    for (let i =0; i < numberArray.length; i++){
        scoreTooLong += numberArray[i]
    }
return scoreTooLong;
    }
let numberArray = n.toString().split('').map(Number);
    let scoreCorrect = 0;*/

/* for (let i = 0; i < numberArray.length; i++){
    scoreCorrect += numberArray[i];
 }

    if (scoreCorrect.length >= 2){
let scoreArray = n.toString().split('').map(Number);
for (let e = 0; e < scoreArray.length; e++){
    scoreCorrect += scoreArray[e]
}
    };*/