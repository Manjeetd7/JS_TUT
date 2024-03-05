// Scope - Anthing that lies in {} is called its scope. It is mostly used with functions

// Block scope 

{

let a = 5
const b= 7
var c= 4
}

// console.log(b);   //// output of both is a & is undefined
// console.log(a);  // Because in block scope , variable declared inside a block, cannot be accesed outside of block  (let and const)

// console.log(c); // BUt in block scope,variable declared with var inside a block, can be accesed because it does not work in block scope



//***********FUNCTION SCOPE ******/

function scope (){

    let a = 5
const b= 7
var c= 4
                

}
// console.log(a)       // Variables declared in a function, can't be accesed outside
// console.log(b)        // Variables declared with var,let and const are quite similar in function scope
// console.log(c)


//********GLOBAL SCOPE************ */

// variables declared generally are globalscope variables that can be accessed from anywhere

let a = 5
const b= 7
var c= 4

// console.log(a)
// console.log(b)
// console.log(c)

//***********HOISTING*************/


addOne(4)
function addOne (num){       // when this addONe(4)  was after the scope, it ran successfully and now when it is
return num + 1               // mentioned before the declarationof function, it is running successfully
}


Other(5)

const Other = function (num) {

    return num + 2      // Other(5) was working fine when it was out of scope but when it is mentioned before scope
}                       // it shows error
                        

// This is called HOISTING. It includes - how is function getting declared
// where will function be declared/kept
//execution context
//how a final tree is formed where all variables and functions are structurised . It is basically STRUCTURING THE CODE ina proper manner.
