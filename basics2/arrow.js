const user = {

name : "Manjeet",
price : 569,

welcomeMessage : function(){

console.log(`${this.name}, Welcome Here`); // this is used for referring to the current context. Data provided
// console.log(this);
}

}

// console.log(user);

// user.welcomeMessage()
// user.name = "Tom"
// user.welcomeMessage()


// console.log(this);    // gives output {} i.e empty object but when we run this in google inspect, it gives window,as it's global object

//***************ARROWFUNCTION **********/

// function chai(){

// name: "Shrarma";

// // console.log(this.name); //undefined
// // console.log(this);   ///all properties
// }

// chai()

const chai = function (){

    name: "Shrarma";
    
    // console.log(this.name); //undefined
    // console.log(this);   ///all properties
    }
    
    // chai()

    const chai2 =  () => {         // turning simple function to arrow function. Remove function and put => between () and {}
                                             
let name = "Parihar"
// console.log(this.name);  //undefined
console.log(this);   //{}
    }

    // chai2()

    //*******Some ways to apply arrow function *********/

//     const addition = (num1,num2) => {       

//            return num1 + num2     //Way number 1. Explicit return.We have to addd something


//     }

//  console.log(addition(1,2));   //3
        

// Other ways are examples of Implicit ways. It is included

// const addition = (num1,num2) =>            //{} use kiya to, return likhna padega

//      num1 + num2               //Way number 2

// console.log(addition(1,2));


// const addition = (num1,num2) => num1 + num2          //Way number 3

// console.log(addition(1,2));

// const addition = (num1,num2) => (num1 + num2)        //Way number 4

// console.log(addition(1,2));

// const addition = (num1,num2) => {name: "Rahul"}        //Returning Object like this will create problem

const addition = (num1,num2) => ({name: "Rahul"}  )         // So, we will put it in parenthesis, It will give it implicit structure

console.log(addition(1,2));