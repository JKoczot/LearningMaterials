function removeChar(str){
let rts = str.split('');
rts.shift() && rts.pop();
 rts = rts.join('');

return rts;
};

console.log(removeChar("eloquent")); 


