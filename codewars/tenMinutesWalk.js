function isValidWalk(walk) {
    if (walk.length > 10){
        return false;
    }
    let nCount = 0;
    let sCount = 0;
    let wCount = 0;
    let eCount = 0;

    for (let direction of walk){
        if (direction === 'n') nCount++;
        if (direction === 's') sCount++;
        if (direction === 'w') wCount++;
        if (direction === 'e') eCount++;
    }
    return sCount === nCount && wCount === eCount;
   }

   console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
   console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
   console.log(isValidWalk(['n']));
   console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))