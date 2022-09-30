//computed property
const key1="objkey1"
const key2="objkey2"

const value1="myvalue1"
const value2="myvalue2"

//make objects {}has key1 and value1 like that
const obj={
    [key1]:value1,//computed part of variable
    [key2]:value2,
}
// const obj2={}
// obj2[key1]=value1
// obj2[key2]=value2
// console.log(obj)
// console.log(obj2)

//spread operator:to spread the propertie(object) and elements(array) it works as iterable
const obj1={
    key1:"value1",
    key2:"value2",
}
const obj2={
    key1:"update",
    key3:"value3",
    key4:"value4",
}
console.log(obj1);
const newObj={
    ...obj,...obj2,key69:"value69"
}
console.log(newObj)
const newObj1={
    ...["item1","item2"]
}//by spread operator in obj position /indexing of elements in array and charscter can be found
console.log(newObj1)

//object destructing
const band={
    name1:"led zepplin",
    famoussong:"stairway"
}
// by object assigning the variable to it
const band2=band.name
const song=band.famoussong
console.log(band2,song)
//if many properties then above approach is not appropriate so we use destructing based on we do destructure of no of property we do it'll destructure,:var1 create variable of bandname so we can use it and destructure variable name are same as key name of obj ,..rest store all rest properties
const {name1:var1,famoussong,...rest}=band
// console.log(name1)
console.log(famoussong)
console.log(rest)

//objects inside array ,very usefull in real world 
const users=[
    {
        userid:1,
        Name:"rakis",
        gender:"male"
    },{
        userid:1,
        Name:"raki",
        gender:"male"
    },{
        userid:1,
        Name:"raki",
        gender:"Female"
    }//can do like this
]
console.log(users)
// we can iterate same as using loop like while,for,for of for in and maximum use for-of and access by "var_name.objectkey"
for(let user of users){
    console.log(user.userid)
    console.log(user.Name)
    console.log(user.gender)
}

//nested destructuring to destructure  to destructure obj destructure that {objkeyname} and to print particular then {objkeyname:}
// const [user1,user2,user3]=users
const [user1,user2,user3]=users
console.log(user1)
console.log(user2)
console.log(user3)
const [{Name:username,userid},,{gender}]=users
console.log(username)
console.log(userid)
console.log(gender)