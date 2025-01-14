function digitize(n) {
    let reverseN = Array.from(String(n), Number);

    return reverseN.reverse();
  }


  console.log(digitize(35231)); // [1, 3, 2, 5, 3]
  console.log(digitize(23582357)); // [7, 5, 3, 2, 8, 5, 3, 2]