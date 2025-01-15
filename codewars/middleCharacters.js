//Zamieniamy string w tablice
//Sprawdzamy czy tablica jest parzysta czy nie
//Jeśli tablica jest parzysta to długość/2 i długość/2 + 1
//Jeśli tablica jest nieparzysta to zaokrąglona w górę długość/2

function getMiddle(s) {
const length = s.length;
if (length % 2 === 0){
    return s[length / 2 - 1] + s[length / 2];
} else {
    return s[Math.floor(length / 2)]
}
}
console.log(getMiddle("test"));
console.log(getMiddle("arfra"));
console.log(getMiddle("gnauwdbwyd"));