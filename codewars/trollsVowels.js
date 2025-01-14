function disemvowel(str) {
    let strArray = str.split('');
    let noVowels = "";
      for (let i = 0; strArray.length > i; i++){
        if (strArray[i] === "a" || strArray[i] === "e" ||strArray[i] === "i" || strArray[i] ==="o" ||strArray[i] === "u"){
           strArray -= strArray[i] ;
        } 
        
      }
    noVowels = strArray.join();
    return noVowels;
  }

  console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"