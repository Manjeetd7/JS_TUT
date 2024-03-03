// function right ()

// {

// console.log("Manjeet"),              // definition of a function : function right(){}
// console.log("Singh"),
// console.log("Dahiya")}

// right()

// function addTwoNumber (num1 , num2) {      //introducing function and declaring it

// return num1 + num2                        // the process

// }

// const result = addTwoNumber(0,7)          // cannot do console log directly. After retur, it needs to be stored in a variable
// console.log("Result:", result);

function loginMessage (username  = "Manj") {

// if(username == undefined){             // Both are same
    if(!username ){


    console.log("Please enter a valid username");
}

    return `${username} just logged in`
}

// console.log(loginMessage("Manjeet"));    // If we donot mention Manjeet here, Manj will take over
// console.log(loginMessage());

const course ={

    name: "dsa",
    teacher: "babbar",                  ///function pass kiya hai
    price: 799
   
   }
   
   function coutKarde(anyshit){
   
      console.log(`Username is ${anyshit.teacher} and price is ${anyshit.price}`);
   
   }
   
//    coutKarde(course)


   coutKarde({
                              //same function mein object pass kar diya 
   teacher: "Rahul",
       price :     199 
   })


   




   const array1 = [100,200,300,4000]  // array pass karenge

   function returnarray1 (printkarde){             // yahan printkarde just ek value hai jo associated hai returnarray1 ke saath

return printkarde[2]                               // bina array ka pata hote hue, yahan 2nd element maang liya

   }

//    console.log(returnarray1(array1));             //jab yahan returnarray1 ko link kar diya array1 se, to 2nd element print ho gaya
   console.log(returnarray1([100,200,300,4000]));


