const arr = [0,1,2,3,4]
// // console.log(arr[0]);

// // An array can consist of different elements like numbers, string, boolean etc. It is always in []. Indexding starts from 0

// arr.push(10)           // the element that you add get added in the array
// // console.log(arr);

// arr.pop()              // the last element gets deleted
// // console.log(arr);

// arr.unshift(10)        // Unshift makes the element shifted to the 0th index of array
// // console.log(arr);

// arr.shift()            //removes the unshifted element in array
// // console.log(arr);

// console.log(arr.includes(5)); // tells whether this element is present in array or not, in booolean terms

// console.log(arr.indexOf(5))  // if mentioned element is present, it gives te indexing otherwise, -1

// const arr2= arr.join()       //changes the type of the array into string and binds the elements
// console.log(arr2)
// console.log(typeof arr2)

// slice makes a new sub array by selecting the indexes. (1,3)1 is included and 3 is excluded.It makes changes in a copy

// splice is used to delete elements from an arrray and make a new array.(1,3) means 1st, 2nd & 3rd will be deleted. It makes changes in original copy


//  const arr2 = arr.slice(1,3)
// console.log(arr); // Outout = [1,2]

// const arr3 = arr.splice(1,3)
// console.log(arr3)    // Output = [1,2,3]

const arr2 = [9,8,7,6]

// arr.push(arr2)     // push = 2nd array gets pushed in the existing array
// console.log(arr);

// const arr3 = arr.concat(arr2)    // concat gives a new array in which all elements of both arrrays are merged
// console.log(arr3);

// const arr3 = [...arr, ...arr2]    // Spread function simplifies and merge two arrays, like concat
// console.log(arr3)

// const arr3 = [1,2,4, [4,4,7,[8,4,1,5]], 6,2]

// const arr4 = arr3.flat(Infinity) // Simplifies the complex arrays
// console.log(arr4);

// console.log(Array.isArray("MANJEET")); // isArray - whether this array exists or not
// console.log(Array.from("MANJEET"));      //from -  makes an array out of it
console.log(Array.from({name:"MANJEET"}));   //  requires a type of the element

let s1= 3
let s2= 5
let s3= 7

// console.log(Array.of(s1,s2, s3));      Of - many in one array