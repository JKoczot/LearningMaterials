// function count (a, b){
// let c = a + b;
// return c;
// }

// console.log(count(1, 3));

function friend(friends){
    let homies = [];
    for (let i = 0; i < friends.length; i++){
        if (friends[i].length == 4){
            homies.push(friends[i])
        }
    }
    return homies; 
}

console.log(friend(["Ryan", "Kieran", "Mark"]));


function test (a, b){
    return a + b;
}

console.log(test(1));