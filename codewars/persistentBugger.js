function persistence(num, score = 0) {
    if (num < 10){
        return score;
    } else {
        let numArray = num.toString().split('').map(Number);
        let sum = numArray.reduce((accumulator, currentValue) => {
            return accumulator * currentValue;
            }, 1);
        return persistence(sum, score + 1);
    }
 }

 console.log(persistence(27));