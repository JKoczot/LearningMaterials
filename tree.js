const leaves = "#";
const count = 6;
const rows = [];
const trunk = "| |";
let inverted = true; 
let trunkOn = false;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + leaves.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }

  for (let i = 1; i <= count; i++) {
  if (inverted){
    rows.unshift(padRow(i, count));
  } else{
    rows.push(padRow(i, count));
}}

//ALSO WORKING:

    /*while(rows.length < count){
        if (inverted){
            rows.unshift(padRow(rows.length + 1, count));
    }
    else {
        rows.push(padRow(rows.length + 1, count));
    }};*/

  if (trunkOn){
    function trunkRow(){
    return ".".repeat(count - 2) + trunk + ".".repeat(count - 2);
    }}else{
        function trunkRow(){
            return " ".repeat(count - 2) + " ".repeat(2) + " ".repeat(count - 2);
        }
    }
    

  let result = "";
  
  for (const row of rows) {
    result = result + row + "\n";
  }

console.log(result + trunkRow());

  