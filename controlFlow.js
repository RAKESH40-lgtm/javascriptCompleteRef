//conditional stmt
// let age = 20;
// if (age >= 20) {
//   //code to right
//   console.log("can play"); //it prints when it's true
// } else {
//   console.log("user can play soduku"); //it execute when it's false}

// let num = 14;
// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// falsyValues->goes to else block of condition
// false
// ""
// null
// undefined
// 0

//truthy values:->all which give true block
// "anc"
// other than 0

//ternary
// let age$ = 15;
// let drink;
// if (age$ >= 5) {
//   drink = "coffee";
// } else {
//   drink = "milk";
// }
// console.log(drink);

// shortend of conditional by ternary operator conditional
// let drinky=age$>=5?"true":"false"

//to check multiple value condition we use and or  and to avoid multiple condition we use together by logical operator
// &&->true true true
// ||->true false true
// let names = "ravi";
// let ages = 16;
// if (names[0] === "r" && ages > 15) {
//   console.log("inside if");
// } else {
//   console.log("inside else");
// }
// if (names[0] === "r" || ages > 15) {
//   console.log("inside if");
// } else {
//   console.log("inside else");
// }
//nested if-else->to check many condition
// wining number 19
// 19 your guess is right
// 17 too low
// 20 too high
// let winner = 19;
// let userGuess = Number(prompt("enter the number"));
// if (userGuess === winner) {
//   console.log("your guess is right");
// } else {
//   if (userGuess < winner) {
//     console.log("too low");
//   } else {
//     console.log("to high");
//   }
// }

// if-else if-else->ladder kind structure here check other when the condition fails
// let val = 2;
// if (val < 0) {
//   console.log("value is lesser");
// } else if (val > 0) {
//   console.log("value is greater");
// } else {
//   console.log("value is equal");
// }
// console.log("nested if-else if completed");

//switch-case similar to if-else-if
// let day = 0;
// switch (day) {
//   case 0:
//     console.log("sunday");
//     break; // stops after execution of above case
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   default:
//     console.log("invalid");
// }

//while loop->looping uses when repeatition is present
// 0 to 9 print
// let i=0
// while(i<10){
//     console.log(i)
//     i++;
// }
// console.log("while loop executed")

// example num=10 sum=1+2+..10
// let sum=0
// let num$=10
// let iVal=0
// while(iVal<=num$){
//     sum+=iVal;
//     iVal++

// }
// console.log(sum)

// n*(n+1)/2->get sum of n natural number
//for(initial;ConditionRule;inc/decr){//code}
// let i=0//by this initialize can access outside loop
// for (; i <= n; i++) {
//   console.log(i);
// }
//using for loop sum of n number
// let sum=0
// for(let i=0;i<=10;i++){
//   sum+=i
// }
// console.log(sum);

//break and continue
//break stop the loop when it reach that condition
//continue starts the loop again after reaching that condition and ignore that cond value.
// for(let i=1;i<=10;i++){
//   if(i===4){
//      break;
//   }
//   console.log(i)
// }
// console.log("break works")

// for(let i=1;i<=10;i++){
//   if(i===4){
//      continue;
//   }
//   console.log(i)
// }
// console.log("cotinue works")

//do-while
//first it runs prg and check the condition

do{
  console.log(i)
  i++
}while(i<=5);
