function validatePIN (pin) {
    if ((pin.length === 6 || pin.length === 4) && /^[0-9]+$/.test(pin)){
        return true;
    } else {
        return false;
    };
  };
  
  console.log(validatePIN("-1.234"));

