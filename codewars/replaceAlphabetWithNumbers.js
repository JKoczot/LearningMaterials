function alphabetPosition(text) {
    let score = [];
    let arrayText = text.toLowerCase().split('');

    for (let i = 0; i < arrayText.length; i++){
        if (arrayText[i] == 'a'){
            score.push('1')
        } else if (arrayText[i] == 'b') {
            score.push('2')
        } else if (arrayText[i] == 'c') {
            score.push('3')
        } else if (arrayText[i] == 'd') {
            score.push('4')
        } else if (arrayText[i] == 'e') {
            score.push('5')
        } else if (arrayText[i] == 'f') {
            score.push('6')
        } else if (arrayText[i] == 'g') {
            score.push('7')
        } else if (arrayText[i] == 'h') {
            score.push('8')
        } else if (arrayText[i] == 'i') {
            score.push('9')
        } else if (arrayText[i] == 'j') {
            score.push('10')
        } else if (arrayText[i] == 'k') {
            score.push('11')
        } else if (arrayText[i] == 'l') {
            score.push('12')
        } else if (arrayText[i] == 'm') {
            score.push('13')
        } else if (arrayText[i] == 'n') {
            score.push('14')
        } else if (arrayText[i] == 'o') {
            score.push('15')
        } else if (arrayText[i] == 'p') {
            score.push('16')
        } else if (arrayText[i] == 'r') {
            score.push('17')
        } else if (arrayText[i] == 's') {
            score.push('18')
        } else if (arrayText[i] == 't') {
            score.push('19')
        } else if (arrayText[i] == 'u') {
            score.push('20')
        } else if (arrayText[i] == 'w') {
            score.push('21')
        } else if (arrayText[i] == 'y') {
            score.push('23')
        } else if (arrayText[i] == 'x') {
            score.push('24')
        } else if (arrayText[i] == 'z') {
            score.push('25')
        } else if (arrayText[i] == 'v') {
            score.push('22')
        }
    }

    return score.join(' ');
  }

  console.log(alphabetPosition("aaa"));
  console.log(alphabetPosition("DLUGI tekst bez polskich znakow"));


  //Funkcja od CoPilota, jestem glupi 
  /*
  unction replaceAlphabetWithNumbers(str) {
    let score = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let char of str.toLowerCase()) {
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            score.push(index + 1);
        }
    }

    return score.join(', ');
}

console.log(replaceAlphabetWithNumbers("abc")); // "1, 2, 3"
console.log(replaceAlphabetWithNumbers("xyz")); // "24, 25, 26" */