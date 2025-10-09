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



let num9 = 2 // 3
let num10 = ++num9 + ++num9 // ++num9 + ++num9 = ++2 = 3 ,++num9 = ++3 = 4

console.log("num9 :",num9); // num9 
console.log("num10 :",num10);


console.clear();


// assignment operator 

let num11 = 10

let additionVal = 20

num11     = num11 + additionVal

console.log(additionVal);

console.log(num11);


let num12 = 2

num12     %= additionVal // num12 = num12 + additionVal

console.log(num12);

let num13 = 5

num13     += num13

console.log(num13)



// comparision operator Or relational operator


//  meaning       operator               example          result

// lessthen op        <                     5<2             false

// greater Then       >                     5>3             true

// lessThenEq         <=                    5<=5            true

// greaterThenEq      >=                    5>=5            true

// loosyTypeEq        ==                    5=="5"          true

// StrictlyTypeEq     ===                   5==="5"         false

// loosyNotEq         !=                    5!="5"          false

// strictlyNotEq      !==                   5!=="5"         true




console.log("5"!==5);    // true 
console.log("3"==="3");  // true
console.log(5>5);        // false
console.log(0===0);      // true
console.log("0"==="0");  // true
console.log(1!=2);       // true
console.log(6>=7);       // false 
console.log(5>=5);       // true
console.log(.4!==4);     // true   .4===4 = !false = true
console.log(true !== "true"); // true
console.log(6===.5);     // false
console.log(2>=2);       // true
console.log(123>=321);   // false
console.log(true == 1);  // true = 1 == 1



// Logical operator

// And   - &&

//    true + true + true = true

//    false + true + true = false 


// Or    - ||


//   false + false + false = false

//   true  + false + false = true


// Not   -  !

    // !(true) = false


    console.log(!(5===5));


    console.log((5>=5) && (5!==5));

    // true  &&  false = false
    
    


console.log(true && false || true);       // true  
console.log(false || true && false);    
console.log(!(true && false) || false); 
console.log(!(false || false) && true); 
console.log(true && !false || false);   
console.log(!true || false && true);    
console.log((true || false) && !false);
console.log((false && true) || !false);
console.log(!((true || false) && false));
console.log((!true || true) && false);
console.log(true && (false || !false));
console.log(!(true && true) || (false && true));
console.log((true || false) && !(false || true));
console.log(!(false && false) || (true && !false));
console.log((!false && true) || (false && !true));
console.log(!(true || false) && (true || !false));




console.log(5 > 3 && 2 < 4);              // true              
console.log(10 === 10 || 5 > 10);         // true 
console.log(!(7 < 5) && 3 !== 3);         // false   
console.log(8 >= 8 || 2 < 1);             // true
console.log(4 + 1 === 5 && 6 > 3);        // true
console.log(!(10 < 5) || 7 === 8);        // true
console.log(3 * 2 > 5 && !(4 === 4));     // false
console.log(9 < 10 || 2 + 2 === 5);       // true
console.log(!(6 >= 6) || 1 < 2);          // true
console.log(5 !== 5 && 7 >= 7);           // false
console.log((8 - 3) > 4 || !(2 + 2 === 4));// true
console.log(!(10 > 5) && 6 < 7);           // false
console.log(3 + 3 === 6 && 4 * 2 > 7);     // true
console.log(7 < 8 || !(5 === 5));          // true 
console.log(!(9 !== 9) && 3 + 1 <= 4);     // true    
console.log(2 * 3 >= 5 || !(4 > 4));       // true  

console.clear();


// Concatination (+)

let name1 = "ben"

let name2 = "10"


let finalName = name1 +" "+ name2

console.log(finalName);


// Template String


let TemplateVal = `${name1} ${name2}`

console.log(TemplateVal);



console.clear();

// type conversion

// implicit type conversion


let one1 = "12"

let num  = 12

console.log(typeof(one1+num));


// string 

// string anything string

console.log(typeof("12"+"12"));
console.log(typeof("12"+12));
console.log(typeof("12"+true));
console.log(typeof("12"+undefined));
console.log(typeof("12"+null));
console.log(typeof("12"+[1,2]));
console.log(typeof("12"+{k:1}));



// number


console.log(typeof(1 + "2"));
console.log((1 + 1));
console.log((1 + true));
console.log((1 + undefined));
console.log((1 + null));
console.log(typeof(1 + [1,2]));
console.log(typeof(1 + {k:2}));


// boolean

console.log(typeof(true + "45"));
console.log((true + 5));
console.log((true + true));
console.log((true + undefined));
console.log((true + null));
console.log((true + [5,6]));
console.log(typeof(true + {a:6}));


// Explicit Type Conversion


console.log(10 + Number("10"));

console.log(Number());
console.log(Number("abc"));
console.log(Number(5));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number([176,890]));
console.log(Number({l:67}));



console.log(Boolean());
console.log(Boolean("dd"));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([8,5]));
console.log(Boolean({l:89}));


console.log(String("t"));


let val1 = 5
let val2 = val1++
let val3 = ++val2

console.log(val1);
console.log(val2);
console.log(val3);










