let score = "hitesh"


// console.log(typeof score) 

let valueInNumber = Number(score) 

// console.log(typeof valueInNumber) 
// console.log(valueInNumber) 


/*  BEFORE         AFTER
    "33"        => 33
    "33abc"     => NaN
    null        => 0
    undefined   => NaN
    true/false  => 1/0

*/


let isLoggedIn = ""
let val = Boolean(isLoggedIn)
// console.log(typeof val)
// console.log(val)

//1 or any real value => true
// 0 => false
//empty string => false
//string with a value => true

let someNumber = 5.6
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)
