function mumbling (s){
    let array = s.split('');
    let result = [];
for (let i = 0; i < s.length; i++){
let repeatedChar = array[i].toUpperCase() + array[i].toLowerCase().repeat(i);
result.push(repeatedChar);
}

return result.join('-');
}

console.log(mumbling("Test"));