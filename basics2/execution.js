// Javascript code execution and Call Stack

let val1 = 10
let val2 = 5

function add(val1 , val2) {

 total = val1 + val2

 return total

}

let result1 = add ( 10, 5)
let result2 = add ( val1 , val2)

// Javascript code execution consists of  process called Global Execution. It inolves THIS function.

//Global execution further happens in 2 parts - Memory creation phase & Execution phase

// MEMORY CREATION PHASE of the program above will be done step by step

//val1 = undefined
// val2 = undefined
// add = defined // whole add function is defined in {}
//result1 = undefined
//result2 = undefined

//EXECUTION PHASE

// val1 = 10
// val2 = 5
// add = it will be further divided into NEW memory creation and execution phase of the whole definition  ADN
// Another MC & EP of add would be made = new varaible environment & execution thread
// after RETURN, the MC & EP are given to global execution context
//NEW MC & EP would get deleted

// result1 = 15 

//addition WILL BE done IN SECOND MC & EP
// result2 = Same cycle would be repeated











