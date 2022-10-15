//which has lot of code 
//need to import those files here
// Uncaught SyntaxError: Cannot use import statement outside a module till in linking script app.js use type="module" and don't need defer here it will automatically adds the defer to shortend the large name we can use as (shown in line 5) and can export and import any kind of thing js 
import {fname} from './utils/fname.js'
import {age as a} from './utils/age.js'
import {Person} from './utils/person.js'
console.log(fname,a)
const person=new Person("Raki",22)
console.log(person.info())
