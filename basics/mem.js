// ***************MEMORY***************

//Stack =  Memory is stored in such a way that a copy of the declared function is called (Call by value) - Primitive

// Heap = Memory is stored in such a way that the original value of the function is updated (Call by reference) - No primitive

let me = "goodboy"

let me2 = me

console.log(me2);

me2 = "badboy"

console.log(me);

// we can see that the value has changed because when me2 = me, a copy of me was forwarded, not the original value

let my1 = {name:"Khiladi"
}

let my2 = my1


my2.name= "Anari"
console.log(my1);
console.log(my2)

// it can be seen that the newer value has been accepted for both functions as it was taken originally. Jo bhi changes hote hai original value ke andar hote hai. Call by reference. Non primitive