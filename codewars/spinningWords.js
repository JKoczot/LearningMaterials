function spinWords(string){
    let reverse = string.split(' ');
    let score = [];
    for (let i = 0; i < reverse.length; i++){
      if (reverse[i].length >= 5){
        score.push(reverse[i].split('').reverse().join(''));
      } else {
        score.push(reverse[i]);
      }
    }
    return score.join('');
  }

  console.log(spinWords("Welcome"))