//create a class animal property (adding inside constructor function)name,age method eat
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is ${this.age} and eating `;
  }
}
// const corni = new Animal("lion", 5);
// console.log(corni);
// console.log(corni.name);
// console.log(corni.eat());
// console.log(corni.age);
//create dog class
//when we find some similarities property and method we can inherit it to make use of it we use extends to make use of base class to sub class by which it can have the property of baseclass Animal
// class Dog extends Animal{
// }
//object and instance are same
// const tom = new Dog("Aksi", 5);
// console.log(tom);
// console.log(tom.name);
// console.log(tom.eat());
// console.log(tom.age);
// const tom = new Dog("Aksi", 5);
// console.log(tom);
// console.log(tom.name);
// console.log(tom.eat());
// console.log(tom.age);
//superKey:it's used when we need to add another property to this dog when we extends from Animal then we need to use super to in clude the Animal constructor
class Dog extends Animal{
     constructor(name,age,speed){
      super(name,age)//include the name and age from constructor Animal of extend
      this.speed=speed//will add the speed to the explicitly
     }
     run(){
      return `${this.name} is running at ${this.speed}kmph`
     }
     eat(){
      return `Modified eat:${this.name} is eating`
     }
}
const tommy=new Dog("tommy",3,45)
console.log(tommy)
console.log(tommy.run())
console.log(tommy.eat())
//same method in subclass checks the avaialable in baseclass then it call there if there is not present then it'll go ahead to super class which
//getter and setter
// class person{
//   constructor(fname,lname,age){
//     this.fname=fname
//     this.lname=lname
//     this.age=age
//   }
//   get fullname(){
//     return `${this.fname} ${this.lname}`
//   }//get we can use the fullname as a property
//   // setName(fname,lname){
//   //   this.fname=fname
//   //   this.lname=lname
//   // }
//   set fullname(fullname){
//     const [fname,lname]=fullname.split(" ")//it split from space
//     this.fname=fname
//     this.lname=lname
//   }//if we use set()then it'll do the same as 74-76 and split and assign to the variable and in line64 we destructing it
// } 

// const person1=new person("Rakesh","v",3,)
// console.log(person1)
// console.log(person1.fullname())//we call only methods not property
// console.log(person1.fullname)//by using get we can use method as property
// person1.setName("pradhyumn","R")//one way
// person1.fname="pradhyumn"
// person1.lname="R"//same as 68
// person1.fullname="pradhyumn R"//i need to get fname and lname by this fullname 
// console.log(person1.fname)
// console.log(person1.lname)

//
const animal1=new Animal("sheru",1)
console.log(animal1)// and here the inheritance will not affect to main class
//static method and properties
class person{
  constructor(fname,lname,age){
    this.fname=fname
    this.lname=lname
    this.age=age
  }
  static classInfo(){
    return "this is class"
  }
  static desc="static property"
  get fullname(){
    return `${this.fname} ${this.lname}`
  }
  set fullname(fullname){
    const [fname,lname]=fullname.split(" ")
    this.fname=fname
    this.lname=lname
  }
} 
//all method inside class are related to object  in which method can be called by the object itself i.e object.method() and which is to called by object itself
const person2=new person("raki","v")
// console.log(person2.fullname)//this can access by object
// console.log(person2.classInfo())//this is defined using static so by object method cannot be give it'll return has not a function
console.log(person.classInfo()) //but static can be print by person class and for static class to print we don't require to create an object for it
// static has method and property 
/*
  when to use static:
  when we need to initial class and start we use init to in itial it
 */
console.log(person.desc)//same as the static method this is property if we access through object it will return as undefined