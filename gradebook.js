const grades = [];
const average = getAverage(grades);

function getAverage(grades) {
    let total = 0;
    for (const grade of grades) {
        total += grade;
    }
    return total / grades.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


function getGrade(score) {
if (score === 100 ){
    return "A++";
} else if (score >= 90){
    return "A";
} else if (score >= 80){
    return "B";
} else if (score >= 70){
    return "C";
} else if (score >= 60){
    return "D";
} else if (score <= 59){
return "F";
}}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function hasPassingGrade(score) {
  return score >= 60;  
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));


function studentMsg(grades, studentScore) {
if (studentScore >= 60){
    return "Class average: " + getAverage(grades) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
} else {
    return "Class average: " + getAverage(grades) + ". Your grade: " + getGrade(studentScore) + ". You failed the course."
}}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))