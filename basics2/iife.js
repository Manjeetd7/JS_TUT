//Immediately Invoked Functions Expressions (IIFE)

// function harami() {               // Regular way to write a function
  
//     // console.log("GAME");  // SAME RESULTS
//     console.log(`GAME`);
// }
// harami()

// IIFE is used to avoid the pollution made by Global scope variables in a function scope variable
// To declare a fucntion, we do harami() in the end. So, the basic structure is(complete function defined)() = ()()

// (function harami() {               
  
//         console.log("GAME");  // SAME RESULTS
//         console.log(`GAME`);}) ()

// (() => {

//     console.log(`GAME`);        //  Using Arrow function and IIFE together
// })()                            // sometimes we need to put a ; after this external ()

((name) => {

    console.log(`GAME, ${name}`);        
})(`KAATIL`)
    
    
