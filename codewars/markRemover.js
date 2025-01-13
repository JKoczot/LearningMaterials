function remove (string) {
    return string.replaceAll('!', '') + "!";
     
  }


  console.log(remove("Hi!"));
    console.log(remove("Hi! Hi!"));
    console.log(remove("Hi! Hi! Hi!"));
    console.log(remove("Hi! Hi!!!!!"));
    console.log(remove("Hi"));