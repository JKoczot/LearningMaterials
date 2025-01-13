let word = "kajak";

function planidromyCheck(word){
    let wordReversed = word.split('').reverse().join('');
    if(word === wordReversed){
        return "This word is a palindrom.";
    } else {
        return "This word is not a palindrom.";
    }
}

console.log(planidromyCheck(word));