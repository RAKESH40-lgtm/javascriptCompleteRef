//iterables:by which for-Of loop of can be run string,array are iterable below are examples
// const names="rakesh"
// for(let char of names){
//     console.log(char)
// }
const users={'key1':"value1","key2":"value2"}//objects are not iterable

//array like object:which has length property and can access ex:string
const names="rakesh"
console.log(names.length)
console.log(names[0])

//sets(it's iterable):store data (in linear order like array),set also have its own method ,unique items only (duplicate not allowed),no index based access(return undefined if we print console.log(numbers[2]) ),order is not guarented which can be run for loop

// const numbers=new Set();//to create set
// const numbers=new Set([1,2,3]);//array set
// console.log(numbers)
const str=new Set("Hello");//array set
// console.log(str)
// console.log(typeof numbers)//return object type
const item=["item1","item2"]
const numbers=new Set();//can be empty
numbers.add(1)//to add we use method add in set
numbers.add(item)//it avoid duplicate but it can create duplicate when we explicitly add same items by this numbers.add(["item1","item2"])
numbers.add(["item1","item2"])
numbers.add(5)
numbers.add(6)
numbers.add(7)
numbers.add(8)
numbers.add(9)
numbers.add(2)
console.log(numbers.has(3))//return true if that searched item is present
console.log(numbers)
for(let numb of numbers){
    console.log(numb)
}
//when to use if we have unique elements then only we need to use set or to reduce the duplicate 
const myArr=[1,2,4,4,4,6,5,6,5]
const uniqueEle=new Set(myArr)//set will not affect original array
console.log(uniqueEle)
let length=0;
for(let num of uniqueEle){
    length=length+1
}
console.log(length)

//map dataStructure:is like a object which store key:value which is iterable  ,it's in order fashion

// const person={
//     name:"rl",
//     age:7
// }
//object-literals key->string and symbol if number also placed then it'll be string by default
// console.log(person.name)
// console.log(person[name])
// map also store key:value in map key can have any type be placed
const person1=new Map()//create a map by new
// const person1=new Map(['firstname','harshit'],[1,0])//another way of creating map

person1.set('firstname','ravi')
person1.set('age',7)
person1.set(1,2)
console.log(person1.get(1))//get the particular key-value
console.log(person1.keys())//to get all keys of the map
// console.log(person1);
// for(let key of person1.keys()){
//     console.log(key,typeof key)
// } to destructure key,value by []
for(let [key,value] of person1){
    console.log(key,value)
}
const person={
    id:1,
    name:"ccal"
}
const person2={
    id:2,
    name:"aksia"
}
//to add object information person not by using object but use map
//without get in map if we console it'll give object =>object
const extraInfo=new Map()
extraInfo.set(person,{age:8,gender:'male'})
extraInfo.set(person2,{age:9,gender:"male"})
// console.log(extraInfo)
// console.log(person.id)
// console.log(extraInfo.get(person).age)
console.log(person2.id)
console.log(extraInfo.get(person2).gender)
//clone using object.assign
const obj={
    key1:"val1",
    key2:"val2",
}
// const obj2=obj//which occupies both obj in heap memory,which affects both on adding to original to avoid this we use clone
// const obj2={...obj} //one way uisng spread operator
const obj2=Object.assign({},obj)//here in the syntax we're assigning obj with  specifies empty object {} of obj and ,obj specify key-value from which object need to clone
console.log(obj2)
//optional chaining
const user={
firstNam:"h",
// address:{housenum:'1234'}//here it's a object
}
console.log(user?.firstNam)
console.log(user?.address?.housenum)
console.log(user.firstNam)
console.log(user.address.housenum)//if we comment this we get error has undefined of obj.key which isn't exist now but exist later to avoid error and can be print undefined ?. will give the undefined if the housenum and address is not exist which can be check the object key value is present or not which is called as optional chaining.