/*function arrayDiff(a, b) {
  let score = [];
  for (let i = 0; i < a.length; i++){
    if (a[i] !== b[0]){
      score.push(a[i]);
    }
  }
  return score;
}*/

function arrayDiff(a, b) {
  let score = [];
  for (let i = 0; i < a.length; i++){
   if (!b.includes(a[i])){
      score.push(a[i]);
    }
  }
  return score;
}

console.log(arrayDiff([1, 2], [1]))