function duplicateCount(text){
    let lowerCaseText = text.toLowerCase();
    let charCounts = {};

    for (let char of lowerCaseText) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    let duplicates = Object.values(charCounts).filter(count => count > 1);

    return duplicates.length; 

  }


  console.log(duplicateCount("aBBc12"));