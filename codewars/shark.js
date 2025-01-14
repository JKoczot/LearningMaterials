function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
let yourTime = pontoonDistance / youSpeed ;
let sharkTime = sharkDistance / sharkSpeed ; 
if (dolphin === true){
    yourTime = yourTime / 2 ;
}
if (yourTime < sharkTime){
    return "Alive!";
} else {
    return "Shark Bait!";
}
}


console.log(shark(12, 50, 4, 8, true)) // "Alive!"
console.log(shark(7, 55, 4, 16, true)) // "Alive!"
console.log(shark(24, 0, 4, 8, true)) // "Shark Bait!"