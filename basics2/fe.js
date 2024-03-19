// foreach

//basic def of a function = function name (){}

// const arr1 = ['2010', '2011', '2018', '2021', '2023']

// arr1.forEach(function(elements){ // but in this case, we dont name function because it is a callback function by default

// console.log(elements); // naam rakhne ki zaroorat nahi hai. And () access all the elements without mentioning

// })

// const arr1 = ['2010', '2011', '2018', '2021', '2023']

// arr1.forEach((elements)=> {  // same process but using arrow function

//     console.log(elements);
// })

// const arr1 = ['2010', '2011', '2018', '2021', '2023']

// () this parameter can access all the Elements. It can access index and the array list also

// const arr1 = ['2010', '2011', '2018', '2021', '2023']

// arr1.forEach( (elements, index, arr) => {

//     console.log(elements, index, arr);
// }  )

const obj = [ { year : 2010, winner :'csk'},  // objects in array

{year: 2012, winner : 'kkr'},

{year: 2015, winner :'mi'}
]

obj.forEach( (elements) =>{

    console.log(elements.winner);
}    )


