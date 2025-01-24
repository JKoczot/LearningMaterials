function openOrSenior(data){
    let score = [];
    for (let i = 0; i < data.length; i++){
     if (data[i][0] >= 55 && data[i][1] > 7){
      score.push("Senior");
    } else {
      score.push("Open")
    }}
    return score; 
  }

  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))