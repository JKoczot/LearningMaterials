function friend(friends){
    let homies = [];
    for (let i = 0; i < friends.length; i++){
        if (friends[i].length === 4){
            homies.push(friends[i])
        }
    }
    return homies; 
  }

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))