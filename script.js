// // variables


// // var - global scope

// // let - block scope

// // const - block scope


// // var


// var a = 10   // declration // intiazialiation

// a = 12       // reuse      // reinti

// var a = 30   // redeclration


// console.log(a)


// // let

// let b = 5  // declration   // inti

// b = 10     // reuse        // reint

// // let b   // not accept let redeclration

// console.log(b);


// // const

// const c = 5  // declration // inti

// // c = 10    // reuse   // reinti not accept

// // const c = 10  // redeclration not accept

// console.log(c);



// let apple = "apple"

// apple = "ooty apple"

// apple = "goa apple"

// console.log(apple);



// var count = 10

// count = 10+1

// count = count + count

// let b1 = count


// console.log(b1);


// // printing statement

// // 1. console.log()

// console.log(100);

// let b2 = 12

// console.log(b2);


// // 2. alert()

// // alert("hello every one these are my first class in js")

// // 3. confirm()

// // confirm("are you want juice ?")

// // 4. prompt()

// // let name1 = prompt("what is your name :")

// // console.log(name1);


// // 5. document.writeLn()

// // document.writeln("hello")


// // "hi there" - alert


// // let a1 = confirm("hello ?")

// // console.log(a1);




// // console method

// // log

// console.log(1000);


// // error

// console.error(1000)

// // warn

// console.warn(1000);


// // clear

// console.clear()


// let a3 = "kevin"

// let a4 = 123

// let a5 = "123"


// // Data types

// // 1. primitive datatypes

// // 1. string 

// console.log("string : ","hello",123,"123");

// // 2. number

// console.log("number : ",123);


// // 3. boolean

// console.log("boolean : ", true , false);


// // 4. undefined

// let a6

// console.log(a6);

// // 5. null

// let a7 = prompt()

// console.log(a7);



// // 2. non primitive datatypes


// array 

// []



let fruit = ["graphs","apple","banana","orange","cherry","pineapple","guava"]

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[0]);
console.log(fruit[fruit.length-1]);

// object

// {}

const car = {
    luxeryCar : ["audi","jaquar"],
    midCars   : ["ford","tata"],
    greenCar  : "Ev's"
}

console.log(car);
console.log(car.greenCar);
console.log(car.luxeryCar[1]);
console.log(car.midCars[1]);

console.clear();


// operators

// 1.Arithmatic operator

// meaning      // opeartors

// 1. addition       +
// 2. subraction     -
// 3. multiplication *
// 4. division       /
// 5. modulus        %
// 6. exponencial    **
// increment operator ++  [1.post increment, 2. pre increment]
// decrement operator --  [1.post decrement, 2. pre decrement]


console.log(10+20);
console.log(10-20);
console.log(10*20);
console.log(10/20);
console.log(10%20);
console.log(10**3); // 10^3 = 10*10*10 = 1000

// increment operator

//(++) = add 1 value
//(--) = subract 1 value


let one = 10
 
one     = ++one

console.log(one);


let num1 = 2       // 
let num2 = num1++  //num1 = 2

console.log("num1 : ",num1);
console.log("num2 : ",num2);




let num3 = 3
let num4 = ++num3
let num5 = num4++ 


console.log("num3 :",num3);
console.log("num4 :",num4); 
console.log("num5 :",num5); 


let num6 = 1
let num7 = num6-- 
let num8 = num7++ 


console.log("num6 :",num6); 
console.log("num7 :",num7); 
console.log("num8 :",num8); 



let num9 = 2 //3
let num10 = num9++ + num9++ // num9++ + num9 = 2++ = 3  + 2 = 5

console.log("num9 :",num9);
console.log("num10 :",num10);

