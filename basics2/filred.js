// filter ,reduce, maps and for each

// const num = [1,2,3,4,5,6,7,8,9]

// const pronum = num.filter( (elts) =>elts>3)

// console.log( pronum)

// const num = [1,2,3,4,5,6,7,8,9]

// const pronum= num.filter ( (elts) => {elts>5}    ) // it would give [], because in filter, while using scope, we should use return

// const pronum= num.filter ( (elts) => { return elts>5}) // preferred way

// console.log(pronum);



// const pronum =[]


//  num.forEach ( (elts) => {

// if (elts<5) {
     
//     pronum.push(elts)}  // for each method is long and complex
// }
    
// )

// console.log(pronum);


// const pronum = num.map ( (elts) =>elts*10  )
//                   .map ( (elts) => elts-1 )
//                   .filter (  (elts)  => elts <= 25 )
//                   console.log(pronum);
     

//************Reduce********/

const library = [ {bookName : 'baylon', price :199},

    {bookName : 'richman', price :299},

    {bookName : 'deepwork', price :399},

    {bookName : 'bigshort', price :99},

]

const bill = library.reduce (  (acc,bookName)  => acc + bookName.price, 0  )// after reduce, acc and bookname are introduced, then bookname price is introduced


console.log(bill); // never intoduce the sub parts directly