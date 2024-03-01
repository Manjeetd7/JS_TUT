//  constructor and literals -  2 ways to declare objects

// constructor involves singleton - constructor method to create object - object.create

//OBJECT LITERALS

  // literal way to create an object
// keys and values both can be defined in objects

const mySymbol = Symbol(7)

const user = {
name: "Manjeet",
"fullName": "Manjeet Dahiya",
[mySymbol]:"manj", // correction made : []
age: 24,
location: "Gurgaon",
email: "man@google.com",
isLoggedin :true,
lastLoginDays: ["Saturday", "Sunday"]
}

// console.log(user.email);  // not the best way to access
// console.log(user["email"]);  // correct way to access because variables have different types, so . & "" can't be put togetherlog
// console.log(user.fullName);  /// but what if we had "full name"
// console.log(user["fullName"]);  // that is why we can use [] in an efficient way

// console.log(user["mySymbol"]);
// console.log(typeof ["mySymbol"]);  //Output will be object or string but it is a Symbol.So, we will use {}

user.email = "man2@google.com"
// Object.freeze(user)               //freeze = does not let make any new changes
    user.email= "man3@google.com"
// console.log(user.email);

user.greeting = function(){
     
     console.log("Surprise Surpise MF")
}

console.log(user.greeting); //output = function [anonymous]. It means execution is done but reference is not given
// console.log(user.greeting()) // output= Surprise Surprise MF

user.greeting2 = function(){
     
    console.log('The King is Back, ${this.name}');
}

// console.log(user.greeting2());  // Output - The King is back, Manjeet



