function cubeChecker(volume, side){
    if (volume === side ** 3 && volume > 0 && side > 0) {
    return true;
    } else {
      return false;
    }
  };

  let volume = -8
  let side = -2

  console.log(cubeChecker(volume, side));