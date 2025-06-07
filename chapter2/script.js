console.log("Hello JavaScript!");
// single line comment
/* muli-line comment */

// let a = 5;
// let b = 2;
// let b = "5";

// Arithmetic Operators
// console.log("a =", a, "and b =", b);
// let c1 = "a + b = " + (a + b);
// let c2 = "a + b = " + a + b;
// let c3 = a + b;
// console.log(c1);
// console.log(c2);
// console.log("a + b =", c3);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b); // 5^2

// Unary Operators
// console.log(a++); // post increment - first logs 5 (a) and then increment it to 6
// a++; // 6+1 = 7
// console.log(a); // 7
// console.log(++a); // pre increment - first increment (8) and then logs
// b--;
// console.log(b);

// Assignment Operators
// a += 4; // a = a+4; 
// console.log(a+=1);
// console.log(a**=4);

// Comparator Operator
// console.log("a =", a);
// console.log("b =", a);
// console.log("a == b", a == b);
// console.log("a === b", a === b); // value && type
// console.log("a != b", a != b);
// console.log("a !== b", a !== b); // value && type
// console.log("a > b", a > b);
// console.log("a < b", a < b);
// console.log("a >= b", a >= b);
// console.log("a <= b", a <= b);

// Logical Operators
// let a = 6;
// let b = 5;
// let condition1 = a > b; // true
// let condition2 = a === 6; // true
// console.log("condition1 && condition2 =", condition1 && condition2);
// console.log("condition1 || condition2 =", a < b || a === 6);
// console.log("!(a < b) =", !(a < b));

// Conditional Statements
// let age = 15;
// if(age >= 18) {
//     console.log("Eligible for voting.");
// }
// if(age < 18) {
//     console.log("Not eligible for voting.");
// }

// let mode = "dark";
// let color;
// if(mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);
// // DOM 

// let num = 10;
// if(num % 10 === 0) {
// 	console.log(num, "is even");
// } else {
// 	console.log(num, "is odd");
// }

// if(age < 18) {
//     console.log("junior");
// } else if(age > 60) {
//     console.log("senior");
// } else {
//     console.log("middle");
// }

// if(mode === "dark") console.log(mode);

// console.log(age >= 18 ? "adult" : "underage");


// let expr = "papaya";
// switch(expr) {
// 	case "orange": console.log("oranges are orange and tangy");
// 	break;
//     case "mangoes": console.log("mangoes are yellow");
//     break;
//     case "apples":
//     case "papaya": console.log("papayas are orange and sweet");
//     break;
//     default : console.log("it is a fruit");
// }

// let foo = 0;
// switch(foo) {
//     case -1: console.log("negative 1");
//     break;
//     case 0: console.log(0);
//     case 1: console.log(1);
//     break;
//     case 2: console.log(2);
//     break;
//     default: console.log("number");
// }

// QUESTION 1
// prompt("Sonali");

// let num = prompt("Enter a number:");
// // on clicking on cancel it stores null in the number
// // prompt returns string
// // null % 5  // null coerces to 0, so 0 % 5 = 0
// if(num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// } else if (num % 5 !== 0) {
//     console.log(num, "is NOT a multiple of 5");
// } else {
// 	console.log("value is null");
// }

// alert("Hey there Sonali!");

// QUES 2
let score = prompt("Enter student score:");
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
} else if(score >= 70 && score <= 89) {
		grade = "B";
} else if(score >= 60 && score <= 69) {
		grade = "C";
} else if(score >= 50 && score <= 59) {
		grade = "D";
} else if(score >= 40 && score <= 49) {
		grade = "E";
} else if(score >=0 && score <= 39) {
		grade = "F";
}

console.log("According to your score your grade is:", grade);