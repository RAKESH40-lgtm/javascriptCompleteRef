/*
History of Js:
netscape navigator browser 1995 to make interactive using js Mocha then liveScript->js due  to popular of javaintern et explorer discover jscript due to unneccary for this to lern both so they give ecma and made js as ecma script
ecma which is standardization,make js standardize ecma-262 ES1:1997 same program ES5:2009 add lots of feature ES6:2015 has many update in the history of js which is known as modern js memebers of tc39 will decide the update of js for every year it get update 
Javascript is backward compatible which is it can us built past,is not forward compatible ,which is browser update
for this babel compiler  in browser which will do the perform in browser. 
importance of adding script in body due to it first load html and run js
if need to add in head then add defer
*/
"use strict";//it helps to avoid mistake


console.log("Hello world!")//prints in console. can be ""or ''or``
//single line ccomment for our documentation
/* multiline-comment
 */
//variable are store some information and can manipulate it based on our convinience

//declare a variable
var firstName="ram"//var keyword used to define a firstname which is used 
//use a variable
console.log(firstName)
// js is case-sensitive
//change value
firstName="hello"//to change not to use var keyword again
// var can be declare again to same var name but it declare twice
// even without keyword can declare a variable

//rules for variable

// 1)cannot start with number ex:var 1value, var value1 (correct)
// 2)can use _ or $ like first_name or _firstname or replace with $.
// 3)cannot useSpace like first name(invalid) first_name snakecase 
// convention :camelCase is prefered

// let and const
let  firstname="he"
// let and var diff:
// blockscope and function scope use let commonlly and it cannot allow to redeclare but can be manipulate it  

//declare constant which remain constant
const val=4
// here it cannot manipulate only can use