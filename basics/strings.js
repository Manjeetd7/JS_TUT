const name ="Manjeet"
const country = "Bharat"

// console.log(name + country);
console.log(`Hello my name is ${name} and I am from ${country}`)

const newString= new String (`manjeet@MS.com`)

console.log(newString);



console.log(newString[2]);

console.log(newString.__proto__);

// *******USE OF OBJECTS************

console.log(newString.length);

console.log(newString.toLowerCase());

console.log(newString.charAt(1));

console.log(newString.indexOf(`S`));

console.log(newString.indexOf(`s`));


const string2 = newString.substring(0,2)
console.log(string2);


const string3 = newString.slice (1,-2)
console.log(string3);

const string4 = "      DAHIYA      "
console.log(string4);
console.log(string4.trim());

const url = "https://manjeet.com/manjeet%20dahiya"

console.log(url.replace('%20' , '$'));

console.log(url.includes('soft'));

console.log(newString.split('-'))