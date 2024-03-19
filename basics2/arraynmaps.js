const numbers = [1,2,3,4,5]

for (const num of numbers) {      // FOROF loops

    // console.log(`Value is ${num}`);
    
}

// const sports = ["soccer", "cricket", "kabaddi"]

// for (const all of sports) {

//     console.log(`Games are ${all}`);   // All games would be printed one by one
    
// }

const sports = "BEST"

for (const all of sports) {

    // console.log(`Games are ${all}`);   // each char of BEST would be printed
    
}

// **********MAPS*************

const map =  new Map ()

map.set ('NO', "Not Out")
map.set ('LBW', "Leg before wicket")
map.set ('RO', "Run out")
map.set ('NO', "Not Out")  // it wont be printed again

// console.log(map);   //always prints in the exact order

//looping the map and destructuring the array

for (const key of map) {          // iterator =  jo value chahiye, declared object mein se. It doesnt exist, bas declared hai

// console.log(key);                 // it makes it an array

}
    
for (const [key, value] of map) {   // destructuring the array into key and value

    // console.log(key, ':-', value);
}

// const obj = {'game': 'sport', 'food' : 'done'}

// for (const key of obj) {
    // console.log(key);        // we can see that FOROF loop is not working for objects, it requires FORIN loop


const obj1 = {
    
    'game': 'sport',


'food' : 'done'}

for (const key in obj1) {     // hence we use FORIN loops for objects
    console.log(obj1[key]);
    }


    const arr1 = ['2010', '2011', '2018', '2021', '2023']

    for (const key in arr1) {
        // console.log(arr1[key]);    // only way to use FORIN for arrays and not get 0,1,2,3,4 in result (console.log(arr1[key])
            
        }
    
