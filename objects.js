//arrays are good but not sufficient for real world data ,it stores key value pairs and don't have index objects are reference type using . we need to get the values
// key ->property,can store array also default it will be in string "name"and age are same avoid duplicate key:value and take recents one

//create
const person={
    "name":"rakesh",//property
    age:22,
    hobbies:["guitor","sleeping"]
}
console.log(person)
console.log(typeof person)

//access data from object through dot operatore
console.log(person.name)
console.log(person.age)
console.log(person.hobbies)
console.log(person["name"])
console.log(person["age"])
console.log(person["hobbies"])

person.gender="male";//to add key value to existing obj
console.log(person)
person["personality"]="good"
console.log(person)

//diff between dot and bracket
// to add space need to do with string
// console.log(person.person hobbies)//dot cannot access multiple property name with space
console.log(person["person  hobbies"])

const key="email"
const key2="phoneNum"
// person.key="r@gmail.com"//if i need to add key through dot it will add like that ony
person[key]="r@gmail.com"
person[key2]=9743297092
console.log(person)

//how to iterate object
// two ways for-inloop and Object.keys
for(let key in person){//key will store the key name of object
    console.log(`${key}:${person[key]}`)//to access object through for in
    console.log(key,+":"+person[key])//to access object through for in
}
console.log(Object.keys(person))//return array of object
console.log(typeof Object.keys(person))//return array of object
console.log(Array.isArray(Object.keys(person)))
for(let key of Object.keys(person)){
    console.log(key)
    console.log(person[key])
}