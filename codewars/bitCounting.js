var countBits = function(n) {
    let array = n.toString(2).split('');
    let score = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === '1'){
            score += 1;
        }
    }
   return score;
   };

   console.log(countBits(5))