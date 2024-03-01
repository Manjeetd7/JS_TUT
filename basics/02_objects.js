// // // // // // const fbuser = new Object()

// // // // // // fbuser.userId = "123abc",
// // // // // // fbuser.name= "Gamer",
// // // // // // fbuser.area = "Indonesia",

// // // // // // // // userId = "123abc"
// // // // // // // // name: "Gamer"                    // This is ine way of printing the data
// // // // // // // // area: "Indonesia"

// // // // // // console.log(fbuser); // Output = {}





// const fbuser = {}

// fbuser.userId = "123abc",
// fbuser.name= "Gamer",                  // Another way, same result
// fbuser.area = "Indonesia"

// console.log(fbuser);





const fbuser = {

    email: "manj@google.com",
    fullName: {
                                                  
        firstname: "Billa",             // to fetch and print the object inside an object
        lastname: "Badshah"
    },

   age: 40

}

// const {age} = fbuser    1 level object destructuring
// console.log(age);

// const {age:umar} = fbuser
// console.log(umar);

// // // // console.log(fbuser.fullName.lastname);




// // // const obj1 = {1:"aaj", 2: "jaane"}    
// // // const obj2 = {3:"ki", 4: "zid"}                   
// // // const obj3 = {5:"na", 6: "karo"}   // with this method, we won't get all elements together

// // // const obj4 = {obj1, obj2, obj3}

// // // console.log(obj4);     // output- obj1 = {1:"aaj", 2: "jaane"}    
// // //                                 //   obj2 = {3:"ki", 4: "zid"}                   
// // //                                 //   obj3 = {5:"na", 6: "karo"}



// // const obj1 = {1:"aaj", 2: "jaane"}    
// // const obj2 = {3:"ki", 4: "zid"}                   
// // const obj3 = {5:"na", 6: "karo"}            // perfect method

// // const obj4 = Object.assign({}, obj1,obj2, obj3)    //{} is used as target and remaining are source. 
//                                                      //If we don't use {}, obj 1 willbe target,but result would be same
// // console.log(obj4);



// const obj1 = {1:"aaj", 2: "jaane"}    
// const obj2 = {3:"ki", 4: "zid"}                   
// const obj3 = {5:"na", 6: "karo"}             // spread: the easiest method to concatinate

// const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const manjeet = [

    {
       name: "rahul",
       email:"r@gmail.com"

    },
    {
        name: "ramesh",
        email:"r2@gmail.com"
 
     },
     {
        name: "ritesh",
        email:"r3@gmail.com"
 
     },
     {
        name: "ronak",
        email:"r4@gmail.com"
 
     }

]

// console.log(manjeet[2])



// console.log(manjeet[1].email);
// console.log(fbuser);

// console.log(Object.keys(fbuser));   // keys- userID, name,age
// console.log(Object.values(fbuser));  //values - 123abc,manjeet,24
// console.log(Object.entries(fbuser)); // keys and value together

// console.log(fbuser.hasOwnProperty('area'));  // hasOwnProperty -  used to fetch whether it contains area or not. Like isArray in arrays


// ****************OBJECT DECONSTRUCTOR*************

const course ={

 name: "dsa",
 teacher: "babbar",
 price: 799

}

// console.log(course.teacher);   ////output - babbar  basic way 

// const{teacher} = course    //output - babbar  destructuring the object level 1
// console.log(teacher);

// const{teacher: courseTeacher} = course
// console.log(courseTeacher);                  ////output - babbar naming taecher >courseTeacher - destructing level2







