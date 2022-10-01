//ArrayMethods:

//forEach:we can use this forEach in array of object
const number = [4, 2, 8, 5];
// function take input and  print its indexes
// function multipBy2(number,index){
//     console.log(`indexes is ${index}`)
//     console.log(`${number}*2=${number*2}`)
// }
// multipBy2(number[0],0)
//like this to make multiple ele we use for loop
// number.forEach(function(number,index){
//     console.log(`indexes is ${index}`)
//     console.log(`${number}*2=${number*2}`)
// })//it works same as for loop and receive as call back can be do seperately or define direction making anonymous
//using forEach multiple 2 with array ele
// number.forEach(function(numb){
//     console.log(numb*2)
// })
// number.forEach((numb)=>{
//     console.log(numb*2) //both are same
// })
//map method  very usefull in react,return new array of computed operation always return in map method can be apply to object
const numb = [3, 4, 5, 6, 6, 6, 8];
// const square=function (number){
//     return number**2
// }
// const sq=numb.map((numb,index)=>{
//     return `${numb**2} and index:${index}`
// })
// console.log(sq)

//filter method: return new array of filtered value which is computed
const numby = [1, 2, 6, 3, 4, 5, 8];
//seperate odd and even
const isEven = function (numb) {
  return numb % 2 == 0;
};
// const evennum=numby.filter(isEven)
// const evennum = numby.filter((numb) => {
//   return numb % 2 == 0;
// });
// console.log(evennum);

//reduce Method:aim:sum all numbers of ele which will give single answer for getting a whole answer
const num = [1, 2, 3, 4, 5];
// const sum=num.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue
// },initialValue)
//accumulator currentvalue  return
// 1                 2           3
// 3                 3           6
// 6                 4          10
// 10                5          15
// 15
// console.log(sum)
const userCart = [
  {
    prodId: 1,
    prodName: "mob",
    price: 12000,
  },
  {
    prodId: 2,
    prodName: "TV",
    price: 12000,
  },
  {
    prodId: 3,
    prodName: "Laptop",
    price: 12000,
  },
];
const totPrice = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);
console.log(totPrice);

//sort:arranging elements in order based on ASCII value it'll change priginal array
//this will work based on the ASCII value
//will consider this by string and take ASCII value so it show wierd in numbers
const uName = ["harshith", "abcd", "moh"]; //by ASCII value we get correct by checking the first letter of ASCII and it works in strings and it takes capital letter and sort capital first
uName.sort();
console.log(uName);
const numbers = [5, 9, 1200, 400, 3000];
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => {
  // return a-b;//ascending
  return b - a; //descending
});
console.log(numbers);
//1200-410--->positive>0 790 replace b first and then a
// --->negative 5-9--->-4 negative first a and then b
// price low-high or high-low uses sort
const prods = [
  { prodId: 1, prodName: "p1", price: 3000 },
  { prodId: 2, prodName: "p1", price: 3500 },
  { prodId: 3, prodName: "p1", price: 300 },
];
const lowhigh = prods.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(lowhigh);

//findMethod:based on logic it will give the first occurrence of element in array which needed quickly
const myArr = ["Hello", "cat", "dog", "lion"];
function isLength3(string) {
  return string.length === 3;
}
console.log(myArr.find(isLength3));
// console.log(isLength3("dog"))
const user = [
  {
    userId: 1,
    uname: "ran",
  },
  {
    userId: 2,
    uname: "men",
  },
  {
    userId: 3,
    uname: "aamm",
  },
];
const id = user.find((id) => {
  return id.userId === 3;
});
console.log(id);

//every method:return the true or false of a callback function which will be boolean and return true if all condition satisfy then only return true else false
const num1 = [2, 4, 6, 8, 9, 10]; //need to check ele is even
const ans = num1.every((number) => number % 2 === 0);
// console.log(ans);
const userCart1 = [
  { prodId: 1, prodName: "p1", price: 3000 },
  { prodId: 2, prodName: "p1", price: 3500 },
  { prodId: 3, prodName: "p1", price: 300000 },
];
//check every prod< 4000
const userEvery = userCart1.every((cartItem) => {
  return cartItem.price < 4000;
});
console.log(userEvery);

//some method:it return true if anyone ele is satisfy condition if it fail in all ele then only return false
const num10 = [2, 3, 5, 8, 10];
//any one is present then true or false
const val = num10.some((num) => num % 2 == 0);
console.log(val);
const tr = userCart1.some((price) => price.price > 2000);
console.log(tr);

//fill method:make array of 10ele -1 here fill the data starting from index with ending index and this will modify  the original array
const myArr1 = new Array(10).fill(-1);
console.log(myArr1);
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
newArr.fill(0, 2, 4);
console.log(newArr);

//splice Method:it's used to delete and insert (from where to start ,no of ele to delete,) and it affect the original array
const items = ["item1", "item2", "item3", "item4"];
//delete it return deleted items and store it to a variable
// items.splice(0,1);
// console.log(items)
// //insert
// items.splice(1,0,"insertedItem")
// console.log(items)
//delete and insert
items.splice(0, 2, "hello", 1);
console.log(items);
