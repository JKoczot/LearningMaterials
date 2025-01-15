function matchCheck(s){
const charToExtractX = "x";
const charToExtractO = "o";
let allXs = [];
let allOs = [];
for (let charX of s){
    if (charX.toLowerCase() === charToExtractX){
         allXs.push(charX);
    }
}

for (let charO of s){
    if (charO.toLowerCase() === charToExtractO){
        allOs.push(charO);
    }
}

return allXs.length === allOs.length; 
}

console.log(matchCheck("xxoo"));
console.log(matchCheck("xoo"))