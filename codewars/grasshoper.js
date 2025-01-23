var summation = function (num) {
    let score = 0;
    for (let i = 1; i <= num; i++){
      score += i
    }
    return score;
  }

  console.log(summation(5));