function abbrevName(name){
let array = name.split('');
let firstLetter = name[0].toUpperCase();
let secondLetter = "";
for (let i = 0; i < array.length; i++){
    if (array[i] === " "){
        secondLetter = array[i + 1].toUpperCase();
    }
}

return firstLetter + "." + secondLetter;
}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"));


//return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();