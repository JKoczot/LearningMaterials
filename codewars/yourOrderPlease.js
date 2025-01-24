function order(words){
let wordsArray = words.split(" ");
let sortedArray = wordsArray.sort((a, b) => {
let numberA = a.match(/\d/);
let numberB = b.match(/\d/);
return numberA - numberB;
});
 return sortedArray.join(' ');
 }

  console.log(order("is2 Thi1s T4est 3a"));
  console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
  console.log(order(""));