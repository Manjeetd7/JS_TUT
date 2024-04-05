// // const prom1 = new Promise(function(resolve,reject) {

// //     setTimeout(function (){

// //         console.log("PROM1");

// //     resolve()
// //     },3000)
// // }
// // )

// // prom1.then(function(){console.log("Activated 1");})


// // new Promise(function(resolve,reject) {

// //     setTimeout(function (){

// //         console.log("PROM1");

// //     resolve()
// //     },1000)
// // }
// // ).then(function(){console.log("Activated 1");})

// // new Promise(function(resolve,reject) {

// //     setTimeout(function (){
   
// //          resolve({userName:"Manjeet",courseName:"JS"})
// //     },1000)
// // }
// // ).then(function(kuchBhi){console.log(kuchBhi);})

// // new Promise(function(resolve,reject) {

// //     setTimeout(function (){
   
// //          resolve({userName:"Manjeet",courseName:"JS"})
// //     },1000)
// // }
// // ).then(function(kuchBhi){console.log(kuchBhi);})

// const prom4 = new Promise(function (resolve,reject) { 
//  setTimeout(function(){
// let error = false;
// if(!error){                                                   //then used twice and catch for reject as then is for resolve

//     resolve({username:"MSD", jersey:"seven"})
// }

// else{reject("It is error")}

// },2000)

// })

//  prom4.then((user) =>{console.log(user);

// return user.username


// }).then((userName)=>

// console.log(userName))

// .catch(function(error){

//     console.log(error);

// }).finally(() => console.log("It is resolved or rejected"))


const prom5 = new Promise(function(resolve,reject){

setTimeout(function (){

let error = true
if(!error){


    resolve({username:"js", code:"1"})
}
else {reject("Failure")}

})

})

