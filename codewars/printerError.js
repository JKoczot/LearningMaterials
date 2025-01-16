function printerError(s) {
    let array = s.split(''); 
    let errors = 0;
    let allChar = array.length;
    for (let i = 0; i < array.length; i++){
        if (array[i] === "a" || array[i] === "b" ||array[i] === "c" || array[i] === "d" || array[i] === "e" || array[i] === "f" || array[i] === "g" || array[i] === "h" || array[i] === "i" || array[i] === "j" || array[i] === "k" || array[i] === "l" || array[i] === "m"){
            errors += 0;
        } else {
            errors += 1;
        }
    } 
    return errors + "/" + allChar; 
}


console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")); // 3/56