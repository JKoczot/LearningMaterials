function duplicateEncode(word){
let lowerCaseText = word.toLowerCase();
let charCount = {};
let result = "";

for (let char of lowerCaseText) {
    charCount[char] = (charCount[char] || 0) + 1; 
}
for (let char of lowerCaseText) {
if (charCount[char] === 1) {
    result.push("(";
} else {
    result.push(")";
}
}
return result;
}

console.log(duplicateEncode("AaaBBc12"));
