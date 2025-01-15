function jadeSmithonator (s){
    let array = s.split('');
for (let i = 0; i < s.length; i++){
    if (array[i] === ' ' && i + 1 < array.length){
       array[i +1] = array[i + 1].toUpperCase();
    }
}
    
    return array.join('');
}

console.log(jadeSmithonator("Quote with lower cases")); //Quote With Lower Cases