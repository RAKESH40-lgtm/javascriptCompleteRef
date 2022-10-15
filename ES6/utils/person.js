class Person{
   constructor(fname,age){
    this.fname=fname
    this.age=age
   }
   info(){
    console.log(`${this.fname} is ${this.age} year old`)
   }
}
export {Person}
//export default must be done to the one contain in the file and export default must me one and if we need to export it we need to just export if we use default we can ignore {} while import and any name can be done {}->named exports  and can exports for anything by named or default and while importing default can give any name .