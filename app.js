var student = "Student Name: Afia Noor"
console.log(student);
var marks = "Mark-Sheet";
console.log(marks);
var subject = "Subjects";
console.log(subject);
var english = "English:80";
console.log(english);
var urdu = "Urdu:75";
console.log(urdu);
var math = "Math:95";
console.log(math);
var science = "Science:78";
console.log(science);
var islamiat = "Islamiat:86";
console.log(islamiat);
var pst = "PST:70";
console.log(pst);
var art = "Art:90";
console.log(art);
var totalMarks = "Total-marks:700";

var totalMarks = 700;
var english1 = 80;
var urdu1 = 75;
var math1 = 95;
var science1 = 78;
var islamiyat1 = 86;
var pst1 = 70;
var art1 = 90;
var marks1 = english1 + urdu1 + math1 + science1 + islamiyat1 + pst1 + art1;
console.log(`Total marks: ${totalMarks}`);
console.log(`Your marks: ${marks1}`);
var result = marks1 / totalMarks * 100;
console.log(`Percentage ${result} %`)
var grade;
if (result >= 90) {
    grade = "A+";
}
else if (result >= 80) {
    grade = "A";
}
else if (result >= 70) {
    grade = "B"
}
else if (result >= 60) {
    grade = "C"
} else if (result >= 50) {
    grade = "Fail"
}
console.log(`Congratulations, ${student} your percentage is,  ${result}%  your Grade is 🥳🎖️🎊🎉 ${grade}`);