console.log("Welcome to Chrome! Hello JavaScript.");
console.log("Sonali");
console.log("I love JS");

// name is deprecated via vscode - not related to JS
// name = "Sonali";
// console.log(name);
// age = 26;
// console.log(age);
// price = 99.99;
// console.log(price + 1);
// x = null; // we know what is inside but its empty
// console.log(x);
// y = undefined; // not sure what is inside it
// console.log(y);
// isValid = false;
// console.log(isValid);

// Console = 25;
// console.log(Console);

// let name = "sonali";
// name = "saruabh";
// only one variable is declared 'name' and is getting updated
// const PI = 3.14;
// console.log(PI);
// let y;
// console.log(y);
// const x;
// {
//     let a = 5;
//     // let a = 10; - gives error because of let is a block scope
//     console.log(a);
// }
// let a = 10;
// console.log(a);
// console.log(name);
// const age = 26;
// age = 28;
// const can't be updated > gives error at runtime
// console.log(age);
// let price = 1000.505;
// var fullName = "saurabh";
// var fullName = "saurabh singh";
// 2 variables are declared - creating 2 memory locations
// console.log(fullName);

// let age = -26.05;
// console.log(typeof age);
// let name = "saurabh";
// let isFollow = true;
// let y;
// let x = null;
// console.log(typeof x); // > object
// let bigInteger = BigInt("123");
// console.log(bigInteger); // 123n
// let symbolExample = Symbol("Hi"); // Symbol(Hi)
// const student = {
//     fullName : "Sonali Soni",
//     age : 20,
//     cgpa : 8.2,
//     isPass : true
// };
// console.log(student.fullName);
// console.log(student["age"]);
// student.cgpa = student.cgpa + 1;
// console.log(student.cgpa);
// student is obj and is const 
// we cant update const but we can update keys inside const obj

// Ques 1
// const product = {
//     productName : "Parker Jotter Standard CT Ball Pen (Black)",
//     price : 285,
//     discountOffer : 5,
//     ratings : 4,
//     isDeal : true
// };
// console.log("123" + 1); // 1231 > string
// console.log("123" - 1); // 122 > number

// Ques 2
const profile = {
    username : "@beingsonalisoni",
    name : "sonali soni",
    isVerified : true,
    isFollow : false,
    post : 50,
    followers : 569000,
    following : 5,
    description : "FLY"
};
console.log(typeof profile);
console.log(typeof profile.followers);
