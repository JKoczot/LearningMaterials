function evenAndOdd(num){
    let oddNumbers = [];
    let evenNumbers = [];
    let numStr = num.toString();
    
    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]); // Convert the character back to a number
        if (digit % 2 === 0) {
            evenNumbers.push(digit);
        } else {
            oddNumbers.push(digit);
        }
    } 
    
    return [evenNumbers, oddNumbers];
  }

  console.log(evenAndOdd(126453)); 
  console.log(evenAndOdd(3012));
  console.log(evenAndOdd(4628));