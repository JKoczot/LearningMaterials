function noBoringZeros(n) {
    if (n == 0){
      return n;
    } else {
      while (n % 10 === 0) {
        n = n / 10;
      }
      return n;
      }
    }
  


    console.log(noBoringZeros(1450)); 
    console.log(noBoringZeros(960000)); 
    console.log(noBoringZeros(1050)); 
    console.log(noBoringZeros(-1050)); 
    console.log(noBoringZeros(0)); 