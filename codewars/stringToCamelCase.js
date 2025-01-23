/*function toCamelCase(str){
    let score = [];
    let strArray = str.replace(/[-_ ]/g, ' ').split('');
    for (let i = 0; i < strArray.length; i++){
        if (strArray[i] == ' '){
            score.push(strArray[i + 1].toUpperCase())
        } else {
            score.push(strArray[i])
        }
    }

    return score.join('');
    }*/
    /*
    function toCamelCase(str) {
        let score = [];
        let strArray = str.split('');
        for (let i = 0; i < strArray.length; i++) {
            if (strArray[i] === '-' || strArray[i] === '_' || strArray[i] === ' ') {
                if (i + 1 < strArray.length) {
                    score.push(strArray[i + 1].toUpperCase());
                    i++; 
                }
            } else {
                score.push(strArray[i]);
            }
        }
    
        return score.join('');
    }

    console.log(toCamelCase("Bla bla_bla-bla")) //BlaBlaBlaBla */

    function toCamelCase(str) {
        let strArray = str.replace(/[-_ ]/g, ' ').split(' ');
    
        for (let i = 1; i < strArray.length; i++) {
            strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
        }
    
        return strArray.join('');
    }
    
    console.log(toCamelCase("Bla bla_bla-bla")); // "BlaBlaBlaBla"


