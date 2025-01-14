/*function positiveSum(arr) {
    let number = 0;
    let score = 0;
    for (let i = 0; i < arr.length; i++){
      number = arr[i];
        if (arr[i] > 0){
        score = number =+ arr[i];
    }
    }
      return score; 
  }*/

  function positiveSum(arr) {
    let score = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        score += arr[i];
    }
}
return score; 
  }

  console.log(positiveSum([1, -4, 7, 12])); // 20