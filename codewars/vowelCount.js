function getCount(str) {
    let strArray = str.split('');
    for (let i = 0; strArray.length > i; i++){
      if (strArray[i] === "a" || strArray[i] === "e" ||strArray[i] === "i" || strArray[i] ==="o" ||strArray[i] === "u"){
        strArray -= strArray[i];
      } 
    }
    return strArray;
  }

  console.log(getCount("abracadabra")); // 5