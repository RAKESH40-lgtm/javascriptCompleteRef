const fruits=["apple","mango","grapes"]
//why we need to use loop  inside array
// console.log(fruits[fruits.length-1])
//classical for loop: use more
// let fruit=[]
// for(let i=0;i<=fruits.length-1;i++){
//     fruit.push(fruits[i].toUpperCase())
// }
// console.log(fruit)
// let i=0;
// while(i<=fruit.length-1){
//     console.log(fruit[i])
//     i++
// }

//for of and for in
//easy way to iterate array through for-of for-in without using indexing use many time
for(let fruit of fruits){
    console.log(fruit.toUpperCase())
}
//automatically run based on number of length of an array and do same as classical for loop

//for-in it move through index and prefer first index and to access use fruit[index] least used
for(let index in fruits){
     console.log(fruits[index])
}