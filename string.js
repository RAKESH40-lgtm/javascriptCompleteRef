//string indexing
let $name="hello";
// it has indexes
// h e l l o
// 0 1 2 3 4
$name[0]//prints h

$name.length//to know the length of string also consider spaces starts from first character including space
$name.length-1//last index 

//strings method
let firstName= "       rakesh        "
console.log(firstName.length);
let newStr=firstName.trim()//remove the first and last space and return  another str or
firstName=firstName.trim()

console.log(newStr.length)
firstName.toUpperCase()//change all cases to uppercase and return new str has it's immutable
firstName.toLowerCase()//change all cases to lowercase
newStr=firstName.slice(0,6)//(startindex,endindex) it exclude endindex if given startindex ony then it prints all .
console.log(newStr) 

let str1="hello"
let str2="world"
let greet=str1+" "+str2//concatenate two str 
// "number"+"number"->String
// number+""-> String
// +"number"->number

//template STring
let age=22
let name$="rak"
let about=`my name is ${name$} and age is ${age}`//easy way to concatenate two or more string using template literal {}placeholder
