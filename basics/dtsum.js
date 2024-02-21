// Primitive datatypes 

// 7 types - Strings, Boolean, Null, undefined ,BigInt, Number, Symbol - Call by value


const num = 100
const num2 = "100"
const loggedIn = false
const tempOut = null
let userEmail;

const bigNumber = 9438625702970275295620n;



const id = Symbol('123')
const id2 = Symbol ('123')

console.log(id==id2);


// non primitive - Arrays, Object, Functions -  Call by reference


const heroes = ["ms", "vk"] //Arrays

let letObj= {
   name:"Manjeet"     // Object declaration always in {}. It can also be declared as letObj={}

}

// To declare the function, the syntax is function (){}. For example

const fntobedeclared = function(){

    console.log(fntobedeclared);
}




// Argument - Value declared by function is callled

// Parameter - Variable defined when function is declared

// Call by value - Call by Value passes a copy of the variable. In Call by Value, the actual arguments and passed parameters of a function refer to different memory locations. 

// Call by reference - Call by Reference passes the variable itself . The actual arguments and passed parameters of a function refer to the same memory location.

