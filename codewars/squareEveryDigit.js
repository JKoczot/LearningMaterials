function squareDigits(num){
    let numbers = num.toString().split('');
     let score = [];
     for (let i = 0; i < numbers.length; i++){
       score.push(Number(numbers[i] * numbers[i]))
     }
     
     return score.join('');
   }


   console.log(squareDigits(3212)) //9414