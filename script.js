


// // // // // // var popup = document.querySelector(".popup");
// // // // // // setTimeout(()=>{
// // // // // //    (function () {

// // // // // //      console.log(popup);
// // // // // //      popup.setAttribute("class", "active");
// // // // // //    })();
// // // // // // },0)


// // // // // // function changeStyle(){
// // // // // //     popup.setAttribute("id","close")
// // // // // // }






// // // // // // // // variables


// // // // // // // // var - global scope

// // // // // // // // let - block scope

// // // // // // // // const - block scope


// // // // // // // // var


// // // // // // // var a = 10   // declration // intiazialiation

// // // // // // // a = 12       // reuse      // reinti

// // // // // // // var a = 30   // redeclration


// // // // // // // console.log(a)


// // // // // // // // let

// // // // // // // let b = 5  // declration   // inti

// // // // // // // b = 10     // reuse        // reint

// // // // // // // // let b   // not accept let redeclration

// // // // // // // console.log(b);


// // // // // // // // const

// // // // // // // const c = 5  // declration // inti

// // // // // // // // c = 10    // reuse   // reinti not accept

// // // // // // // // const c = 10  // redeclration not accept

// // // // // // // console.log(c);



// // // // // // // let apple = "apple"

// // // // // // // apple = "ooty apple"

// // // // // // // apple = "goa apple"

// // // // // // // console.log(apple);



// // // // // // // var count = 10

// // // // // // // count = 10+1

// // // // // // // count = count + count

// // // // // // // let b1 = count


// // // // // // // console.log(b1);


// // // // // // // // printing statement

// // // // // // // // 1. console.log()

// // // // // // // console.log(100);

// // // // // // // let b2 = 12

// // // // // // // console.log(b2);


// // // // // // // // 2. alert()

// // // // // // // // alert("hello every one these are my first class in js")

// // // // // // // // 3. confirm()

// // // // // // // // confirm("are you want juice ?")

// // // // // // // // 4. prompt()

// // // // // // // // let name1 = prompt("what is your name :")

// // // // // // // // console.log(name1);


// // // // // // // // 5. document.writeLn()

// // // // // // // // document.writeln("hello")


// // // // // // // // "hi there" - alert


// // // // // // // // let a1 = confirm("hello ?")

// // // // // // // // console.log(a1);




// // // // // // // // console method

// // // // // // // // log

// // // // // // // console.log(1000);


// // // // // // // // error

// // // // // // // console.error(1000)

// // // // // // // // warn

// // // // // // // console.warn(1000);


// // // // // // // // clear

// // // // // // // console.clear()


// // // // // // // let a3 = "kevin"

// // // // // // // let a4 = 123

// // // // // // // let a5 = "123"


// // // // // // // // Data types

// // // // // // // // 1. primitive datatypes

// // // // // // // // 1. string 

// // // // // // // console.log("string : ","hello",123,"123");

// // // // // // // // 2. number

// // // // // // // console.log("number : ",123);


// // // // // // // // 3. boolean

// // // // // // // console.log("boolean : ", true , false);


// // // // // // // // 4. undefined

// // // // // // // let a6

// // // // // // // console.log(a6);

// // // // // // // // 5. null

// // // // // // // let a7 = prompt()

// // // // // // // console.log(a7);



// // // // // // // // 2. non primitive datatypes


// // // // // // // array 

// // // // // // // []



// // // // // // let fruit = ["graphs","apple","banana","orange","cherry","pineapple","guava"]

// // // // // // console.log(fruit);
// // // // // // console.log(fruit[0]);
// // // // // // console.log(fruit[2]);
// // // // // // console.log(fruit[0]);
// // // // // // console.log(fruit[fruit.length-1]);

// // // // // // // object

// // // // // // // {}

// // // // // // const car = {
// // // // // //     luxeryCar : ["audi","jaquar"],
// // // // // //     midCars   : ["ford","tata"],
// // // // // //     greenCar  : "Ev's"
// // // // // // }

// // // // // // console.log(car);
// // // // // // console.log(car.greenCar);
// // // // // // console.log(car.luxeryCar[1]);
// // // // // // console.log(car.midCars[1]);

// // // // // // console.clear();


// // // // // // // operators

// // // // // // // 1.Arithmatic operator

// // // // // // // meaning      // opeartors

// // // // // // // 1. addition       +
// // // // // // // 2. subraction     -
// // // // // // // 3. multiplication *
// // // // // // // 4. division       /
// // // // // // // 5. modulus        %
// // // // // // // 6. exponencial    **
// // // // // // // increment operator ++  [1.post increment, 2. pre increment]
// // // // // // // decrement operator --  [1.post decrement, 2. pre decrement]


// // // // // // console.log(10+20);
// // // // // // console.log(10-20);
// // // // // // console.log(10*20);
// // // // // // console.log(10/20);
// // // // // // console.log(10%20);
// // // // // // console.log(10**3); // 10^3 = 10*10*10 = 1000

// // // // // // // increment operator

// // // // // // //(++) = add 1 value
// // // // // // //(--) = subract 1 value


// // // // // // let one = 10
 
// // // // // // one     = ++one

// // // // // // console.log(one);


// // // // // // let num1 = 2       // 
// // // // // // let num2 = num1++  //num1 = 2

// // // // // // console.log("num1 : ",num1);
// // // // // // console.log("num2 : ",num2);




// // // // // // let num3 = 3
// // // // // // let num4 = ++num3
// // // // // // let num5 = num4++ 


// // // // // // console.log("num3 :",num3);
// // // // // // console.log("num4 :",num4); 
// // // // // // console.log("num5 :",num5); 


// // // // // // let num6 = 1
// // // // // // let num7 = num6-- 
// // // // // // let num8 = num7++ 


// // // // // // console.log("num6 :",num6); 
// // // // // // console.log("num7 :",num7); 
// // // // // // console.log("num8 :",num8); 



// // // // // // let num9 = 2 // 3
// // // // // // let num10 = ++num9 + ++num9 // ++num9 + ++num9 = ++2 = 3 ,++num9 = ++3 = 4

// // // // // // console.log("num9 :",num9); // num9 
// // // // // // console.log("num10 :",num10);


// // // // // // console.clear();


// // // // // // // assignment operator 

// // // // // // let num11 = 10

// // // // // // let additionVal = 20

// // // // // // num11     = num11 + additionVal

// // // // // // console.log(additionVal);

// // // // // // console.log(num11);


// // // // // // let num12 = 2

// // // // // // num12     %= additionVal // num12 = num12 + additionVal

// // // // // // console.log(num12);

// // // // // // let num13 = 5

// // // // // // num13     += num13

// // // // // // console.log(num13)



// // // // // // // comparision operator Or relational operator


// // // // // // //  meaning       operator               example          result

// // // // // // // lessthen op        <                     5<2             false

// // // // // // // greater Then       >                     5>3             true

// // // // // // // lessThenEq         <=                    5<=5            true

// // // // // // // greaterThenEq      >=                    5>=5            true

// // // // // // // loosyTypeEq        ==                    5=="5"          true

// // // // // // // StrictlyTypeEq     ===                   5==="5"         false

// // // // // // // loosyNotEq         !=                    5!="5"          false

// // // // // // // strictlyNotEq      !==                   5!=="5"         true




// // // // // // console.log("5"!==5);    // true 
// // // // // // console.log("3"==="3");  // true
// // // // // // console.log(5>5);        // false
// // // // // // console.log(0===0);      // true
// // // // // // console.log("0"==="0");  // true
// // // // // // console.log(1!=2);       // true
// // // // // // console.log(6>=7);       // false 
// // // // // // console.log(5>=5);       // true
// // // // // // console.log(.4!==4);     // true   .4===4 = !false = true
// // // // // // console.log(true !== "true"); // true
// // // // // // console.log(6===.5);     // false
// // // // // // console.log(2>=2);       // true
// // // // // // console.log(123>=321);   // false
// // // // // // console.log(true == 1);  // true = 1 == 1



// // // // // // // Logical operator

// // // // // // // And   - &&

// // // // // // //    true + true + true = true

// // // // // // //    false + true + true = false 


// // // // // // // Or    - ||


// // // // // // //   false + false + false = false

// // // // // // //   true  + false + false = true


// // // // // // // Not   -  !

// // // // // //     // !(true) = false


// // // // // //     console.log(!(5===5));


// // // // // //     console.log((5>=5) && (5!==5));

// // // // // //     // true  &&  false = false
    
    


// // // // // // console.log(true && false || true);       // true  
// // // // // // console.log(false || true && false);    
// // // // // // console.log(!(true && false) || false); 
// // // // // // console.log(!(false || false) && true); 
// // // // // // console.log(true && !false || false);   
// // // // // // console.log(!true || false && true);    
// // // // // // console.log((true || false) && !false);
// // // // // // console.log((false && true) || !false);
// // // // // // console.log(!((true || false) && false));
// // // // // // console.log((!true || true) && false);
// // // // // // console.log(true && (false || !false));
// // // // // // console.log(!(true && true) || (false && true));
// // // // // // console.log((true || false) && !(false || true));
// // // // // // console.log(!(false && false) || (true && !false));
// // // // // // console.log((!false && true) || (false && !true));
// // // // // // console.log(!(true || false) && (true || !false));




// // // // // // console.log(5 > 3 && 2 < 4);              // true              
// // // // // // console.log(10 === 10 || 5 > 10);         // true 
// // // // // // console.log(!(7 < 5) && 3 !== 3);         // false   
// // // // // // console.log(8 >= 8 || 2 < 1);             // true
// // // // // // console.log(4 + 1 === 5 && 6 > 3);        // true
// // // // // // console.log(!(10 < 5) || 7 === 8);        // true
// // // // // // console.log(3 * 2 > 5 && !(4 === 4));     // false
// // // // // // console.log(9 < 10 || 2 + 2 === 5);       // true
// // // // // // console.log(!(6 >= 6) || 1 < 2);          // true
// // // // // // console.log(5 !== 5 && 7 >= 7);           // false
// // // // // // console.log((8 - 3) > 4 || !(2 + 2 === 4));// true
// // // // // // console.log(!(10 > 5) && 6 < 7);           // false
// // // // // // console.log(3 + 3 === 6 && 4 * 2 > 7);     // true
// // // // // // console.log(7 < 8 || !(5 === 5));          // true 
// // // // // // console.log(!(9 !== 9) && 3 + 1 <= 4);     // true    
// // // // // // console.log(2 * 3 >= 5 || !(4 > 4));       // true  

// // // // // // console.clear();


// // // // // // // Concatination (+)

// // // // // // let name1 = "ben"

// // // // // // let name2 = "10"


// // // // // // let finalName = name1 +" "+ name2

// // // // // // console.log(finalName);


// // // // // // // Template String


// // // // // // let TemplateVal = `${name1} ${name2}`

// // // // // // console.log(TemplateVal);



// // // // // // console.clear();

// // // // // // // type conversion

// // // // // // // implicit type conversion


// // // // // // let one1 = "12"

// // // // // // let num  = 12

// // // // // // console.log(typeof(one1+num));


// // // // // // // string 

// // // // // // // string anything string

// // // // // // console.log(typeof("12"+"12"));
// // // // // // console.log(typeof("12"+12));
// // // // // // console.log(typeof("12"+true));
// // // // // // console.log(typeof("12"+undefined));
// // // // // // console.log(typeof("12"+null));
// // // // // // console.log(typeof("12"+[1,2]));
// // // // // // console.log(typeof("12"+{k:1}));



// // // // // // // number


// // // // // // console.log(typeof(1 + "2"));
// // // // // // console.log((1 + 1));
// // // // // // console.log((1 + true));
// // // // // // console.log((1 + undefined));
// // // // // // console.log((1 + null));
// // // // // // console.log(typeof(1 + [1,2]));
// // // // // // console.log(typeof(1 + {k:2}));


// // // // // // // boolean

// // // // // // console.log((true + "45"));
// // // // // // console.log((true + 5));
// // // // // // console.log((true + true));
// // // // // // console.log((true + undefined));
// // // // // // console.log((true + null));
// // // // // // console.log((true + [5,6]));
// // // // // // console.log(typeof(true + {a:6}));


// // // // // // // Explicit Type Conversion


// // // // // // console.log(10 + Number("10"));

// // // // // // console.log(Number());
// // // // // // console.log(Number("abc"));
// // // // // // console.log(Number(5));
// // // // // // console.log(Number(false));
// // // // // // console.log(Number(undefined));
// // // // // // console.log(Number(null));
// // // // // // console.log(Number([176,890]));
// // // // // // console.log(Number({l:67}));



// // // // // // console.log(Boolean());
// // // // // // console.log(Boolean("dd"));
// // // // // // console.log(Boolean(false));
// // // // // // console.log(Boolean(undefined));
// // // // // // console.log(Boolean(null));
// // // // // // console.log(Boolean([8,5]));
// // // // // // console.log(Boolean({l:89}));


// // // // // // console.log(String("t"));


// // // // // // let val1 = 5
// // // // // // let val2 = val1++
// // // // // // let val3 = ++val2

// // // // // // console.log(val1);
// // // // // // console.log(val2);
// // // // // // console.log(val3);


// // // // // // console.clear();

// // // // // // // conditional statement

// // // // // // // if 

// // // // // // // if(){
// // // // // // //  statement
// // // // // // //}


// // // // // // // condition  true = allow


// // // // // // if(5==="5"){
// // // // // //     alert("this condition is true")
    
// // // // // // }


// // // // // // // if else

// // // // // // if(-1){
// // // // // //   console.log("manage true");
  
// // // // // // }else{
// // // // // //   console.log("manage false");
  
// // // // // // }


// // // // // // // if else if 

// // // // // // let hour = 6

// // // // // // if(hour >= 1 && hour <=6){
// // // // // //   console.log("this is early morning");
// // // // // // }else if(hour >= 7 && hour <= 12){
// // // // // //   console.log("this good morning");

// // // // // // }else if(hour >= 13 && hour <= 16){
// // // // // //   console.log("this is afternoon");
  
// // // // // // }else if(hour>=17 && hour<=19){
// // // // // //    console.log("this is evening");
   
// // // // // // }else{
// // // // // //   console.log("this good night");
  
// // // // // // }



// // // // // // // switch


// // // // // // // switch(){
// // // // // // //   case value : statement ; break;
// // // // // // //   case value : statement ; break;
// // // // // // //   case value : statement ; break;
// // // // // // //   case value : statement ; break;
// // // // // // //   case value : statement ; break;
// // // // // // // }


// // // // // // let trafficLight = "yellow"

// // // // // // switch(trafficLight){
// // // // // //   case "red" : console.log("stop the vechile");break
// // // // // //   case "yellow" : console.log("start the vechile"); break;
// // // // // //   case "green" : console.log("go the vechile");break
// // // // // // }



// // // // // // // nested if


// // // // // // // let age = prompt("enter your age : ")
// // // // // // // let height = prompt("enter your height : ")
// // // // // // // let weight = prompt("enter your weight :")


// // // // // // // if(age>=18){
// // // // // // //   if(height>=162){
// // // // // // //     if(weight>=62){
// // // // // // //        alert("congradulation you eligible");
       
// // // // // // //     }else{
// // // // // // //       alert(`your ${weight}kg weight is not eligible minimum age is 62kg`);
// // // // // // //     }
// // // // // // //   }else{
// // // // // // //     alert("your"+height+"cm height is not eligible minimum height is 162");
    
// // // // // // //   }
// // // // // // // }else{
// // // // // // //   alert(`your ${age} year age is not eligible minimum age is 18year`);
  
// // // // // // // }


// // // // // // // Ternary operator 

// // // // // // // condition ? statement : statement;

// // // // // // // let PWDInput = 0

// // // // // // // PWDInput ? console.log("welcome enter the website") : console.log("your password is wrong");


// // // // // // console.clear();

// // // // // // // for loop

// // // // // // // for(intialization;condition;iteration){
// // // // // // //   statement
// // // // // // // }

// // // // // // console.log();

// // // // // // for(let i = 1; i<=20; i++){ 
// // // // // //  console.log(i + "*5="+i*5);
 
// // // // // // }

// // // // // // // i=1 ; 1<=5 true; 1++     console : 1 
// // // // // // // i=2 ; 2<=5 true; 2++     console : 2
// // // // // // // i=3 ; 3<=5 true; 3++     console : 3
// // // // // // // i=4 ; 4<=5 true; 4++     console : 4
// // // // // // // i=5 ; 5<=5 true; 5++     console : 5
// // // // // // // i=6 ; 6<=5 false;

// // // // // // // while

// // // // // // // intialiazation

// // // // // // // while(condition ){
// // // // // // //   statement 
// // // // // // //   iteration
// // // // // // // }


// // // // // // let val = 10

// // // // // // while(val>=30){

// // // // // //   console.log(val);

// // // // // //   val--
  
// // // // // // }


// // // // // // //  do while 

// // // // // // // intialiazation

// // // // // // // do{
// // // // // // //    statement ; iteration;
// // // // // // // }

// // // // // // // while(condition)

// // // // // // let num14 = 10

// // // // // // do{
// // // // // //   console.log(num14); num14++
  
// // // // // // }

// // // // // // while(num14<=20)


// // // // // // // for of loop [string, Array, function]

// // // // // // let str = "javascript"
// // // // // // let arr = ["apple","orange","banana","guava"]

// // // // // // for(let ben of arr){
// // // // // //   console.log(ben);
  
// // // // // // }




// // // // // // // for in loop [object]

// // // // // // let games = {
// // // // // //   small : "snack",
// // // // // //   medium : "pubg",
// // // // // //   large : "spiderman"
// // // // // // }

// // // // // // for(let ben10 in games){
// // // // // //     console.log(games[ben10]);
    
// // // // // //


// // // // // // Functions

// // // // // // syntex

// // // // // function one(a,b,c){
  
// // // // //   console.log("name : ", a);
// // // // //   console.log("age : ", b);
// // // // //   console.log("designation : ", c);
  
  
// // // // // }

// // // // // one("kamal",22,"developer")
// // // // // one("vijay",22,"Frontend developer")



// // // // // function two(a,b){
  
// // // // //   return a*b

  
// // // // // }

// // // // // let returnVal = two(100, 200);

// // // // // console.log(returnVal);


// // // // // function three(a,b){
// // // // //   console.log(a+b);
  
// // // // // }

// // // // // three(10,returnVal)


// // // // // // function types

// // // // // // 1.Named function

// // // // // function named(){
// // // // //   console.log("Named Function");
  
// // // // // }
// // // // // named()


// // // // // // 2. Anonymous Function




// // // // // var Anonymous = function(){
// // // // //   console.log("Anonymous Function");
  
// // // // // }

// // // // // Anonymous()

// // // // // // 3. Arrow Function

// // // // // let Arrow = ()=>{
// // // // //   console.log("Arrow Function");
  
// // // // // }
// // // // // Arrow()


// // // // // // Scopes

// // // // // // var --> global & function scope
// // // // // // let --> block scope
// // // // // // const --> block scope



// // // // // var aa = 10

// // // // // console.log(aa);


// // // // // let bb = 12

// // // // // console.log(bb);

// // // // // const cc = 13
// // // // // console.log(cc);



// // // // // function five(){
// // // // //   if(-1){
// // // // //     var global = "global scobe"
// // // // //     let block = "block scobe"
// // // // //     const block1 = "block"
// // // // //     console.log(block1);
// // // // //     console.log(block);
// // // // //   }
  
// // // // //   console.log(global);
// // // // // }

// // // // // five()
// // // // // console.clear();


// // // // // // Callback function & Higher order function

// // // // // // function function1(){
// // // // // //   console.log("higher order function");
  
// // // // // // }

// // // // // // function function2() {
// // // // // //   console.log("callback function");
  
// // // // // // }

// // // // // // function1(function2())


// // // // // function add(call,a,b){// callback = sub, a=20,b=40
// // // // //   console.log(a+b); // 20+40 = 60
// // // // //   call(20,20) // sub(20,20)
// // // // // }


// // // // // function sub(num1,num2){
// // // // // console.log(num1-num2);

// // // // // }

// // // // // add(sub,20,40)


// // // // // // self invoke function


// // // // // // (function(offer){
// // // // // //   alert("now offers going on"+offer+"%")
// // // // // // })(50)


// // // // // // Generator Function


// // // // // // function*gen(){
// // // // // //    yield "thanks for clicked"
// // // // // //    yield "you will get 50 % off"
// // // // // //    yield "try Again"
// // // // // //    yield "try Again more"
// // // // // //    yield "you will get cashback 100% flat off"
// // // // // // }

// // // // // // let genFun = gen()

// // // // // // console.log(genFun.next().value);
// // // // // // console.log(genFun.next().value);
// // // // // // console.log(genFun.next().value);
// // // // // // console.log(genFun.next().value);
// // // // // // console.log(genFun.next().value);
// // // // // // console.log(genFun.next().value);



// // // // // // console.clear();


// // // // // // function form(a,b,c,d="no"){
// // // // // //   console.log("name :",a);
// // // // // //   console.log("age :",b);
// // // // // //   console.log("department :",c);
// // // // // //   console.log("disablity :",d);
  
// // // // // // }

// // // // // // form("ben",22,"Ece","yes")



// // // // // // function function1() {
// // // // // //   console.log("higher order function");
// // // // // // }

// // // // // // function function2() {
// // // // // //   console.log("callback function");
// // // // // // }

// // // // // // function1(function2());


// // // // // // function mul(a,b,c){ // a= 10,b= 20,c= div
// // // // // //   console.log(a+b); // 10+20 = 30
  
  
// // // // // //   c(10,20) // div(10,20)
// // // // // // }

// // // // // // let div = function(a,b){
// // // // // //   console.log(a/b); // a=10,b=20
  
// // // // // // }


// // // // // // mul(10,20,div)

// // // // // // Es6 edition

// // // // // // spread operator

// // // // // // array , object

// // // // // // [...] , {...}

// // // // // // we can merge the two array or object , we clone also take

// // // // // let array1 = ["apple","banana"]
// // // // // let array2 = ["cherry","guava"]


// // // // // let totalArray = [...array1,...array2]

// // // // // console.log(totalArray);
// // // // // console.log(totalArray);


// // // // // let obj1 = {
// // // // //   ename : "abc",
// // // // //   erole : "trainee",
// // // // //   eSalary : 100000
// // // // // }
// // // // // let obj2 = {
// // // // //   ename1 : "abc",
// // // // //   erole1 : "developer",
// // // // //   eSalary1 : 300000
// // // // // }

// // // // // let totalObj = {...obj1,...obj2}

// // // // // console.log(totalObj);
// // // // // console.log(totalObj);


// // // // // // rest operator

// // // // // // function

// // // // // // (...)

// // // // // // we can store multiple argument

// // // // // function name1(a,b,...c){

// // // // //   console.log(a + b  );
// // // // //   console.log(c);

// // // // //   let c5 = c[2]

// // // // //   console.log(c5);
// // // // // }

// // // // // name1(1,2,3,4,5,6,7,8,9)



// // // // // let arr = [10,20,30,40]

// // // // // let arr3 = arr[2]

// // // // // console.log(arr[2]);

// // // // // console.log(5 + arr3);

// // // // // console.clear();


// // // // // // destracture


// // // // // let [a1,a2,a3,a4] = arr

// // // // // console.log(a1+a2);
// // // // // console.log(a2);
// // // // // console.log(a3);
// // // // // console.log(a4);


// // // // // let nestedArr = [1,2,3,[4,5,6,[7]]]

// // // // // console.log(nestedArr[3][3][0]);

// // // // // let [b1,b2,b3,[b4,b5,b6,[b7]]] = nestedArr

// // // // // console.log(b5);

// // // // // console.clear();


// // // // // let arr4 = [1,2,3,4,5,6,true,"hello",["3",4,5],{j:"hello"}]

// // // // // console.log(arr4[arr4.length-1]);


// // // // // // array is homogenous (same data)
// // // // // // array is hetrogenous (different data)
// // // // // // array is flexible

// // // // // // Array manipulate method 

// // // // // // pop()  remove the value last side
// // // // // // push() add val last side
// // // // // // shift() remove val first side
// // // // // // unshift() add val first side


// // // // // let normalArr = [1,2,3,4]

// // // // // normalArr.pop()

// // // // // normalArr.push(4,5,6,7)

// // // // // normalArr.shift()

// // // // // normalArr.unshift(0,1)

// // // // // console.log(normalArr);



// // // // // // splice(sI,dC,aC)

// // // // // let arr5 = [1,2,3,4,5]

// // // // // arr5.splice(1,3,20,30,40)

// // // // // console.log(arr5);


// // // // // // Array merge method

// // // // // // concat

// // // // // let arr11 = [1,2]
// // // // // let arr12 = [3,4]

// // // // // let total = arr11.concat(arr12,5,6,7)

// // // // // console.log(total);

// // // // // // slice

// // // // // let arr13 = [10,20,30,40,50]

// // // // // let arr13Val = arr13.slice(0,3) //1 4

// // // // // console.log(arr13Val);


// // // // // // flat

// // // // // let nested = [10,20,30,[40,50,[60]]]

// // // // // let flatVal = nested.flat(Infinity)
// // // // // console.log(flatVal);


// // // // // // fill

// // // // // let newArr = [20,40,60,80]
// // // // // // twenty , 40,60,80
// // // // // newArr.fill("twenty",0,1)// value , si , ei

// // // // // console.log(newArr);


// // // // // // includes

// // // // // let include1 = [1,2,3,4,5]

// // // // // let includesVal = include1.includes(10)

// // // // // console.log(includesVal);


// // // // // // sort 

// // // // // let randomNum = ["A",2,9,"a",100,30007890,7,5]

// // // // // let sortVal = randomNum.sort()

// // // // // console.log(sortVal);


// // // // // // reverse

// // // // // let newArr1 = [1,2,3,4]

// // // // // newArr1.reverse()

// // // // // console.log(newArr1);


// // // // // // indexOf

// // // // // let newArr3 = [1,2,3,4,4,2,5,6,2]

// // // // // // let newIndex = newArr3.indexOf(2,6)
// // // // // // //value, sI
// // // // // // console.log(newIndex);

// // // // // // lastIndexOf


// // // // // let newLast = newArr3.lastIndexOf(2,7)

// // // // // console.log(newLast);


// // // // // array higher order method 

// // // // // 1. forEach()

// // // // let game = ["Pubg","Need for race","gta","ff","candy crush"]

// // // // let newForEach = game.forEach((c,i,t)=>{ 
// // // //   return(c);
 
// // // // })

// // // // console.log(newForEach);


// // // // // 2.Map()

// // // // let newMap = game.map((cu,i,t)=>{
// // // //   return(cu);
  
// // // // })

// // // // console.log(newMap);


// // // // // 3.filter()

// // // // let employee = [
// // // //   {ename : "a",salary:100000},
// // // //   {ename : "b",salary:200000},
// // // //   {ename : "c",salary:300000}
// // // // ]

// // // // let salaryDate = employee.filter((c,i,t)=>{
// // // //     return c.salary >= 200000
// // // // })

// // // // console.log(salaryDate);

// // // // // 4.find()

// // // // let findVal = employee.find((c,i,t)=>{
// // // //    return  c.salary>=200000
// // // // })

// // // // console.log(findVal);


// // // // let fruit = ["apple","orange","banana","cherry"]



// // // // // let total = 0
// // // // // num.forEach((n) => (total += n)); // sri
// // // // // console.log(total);


// // // // // let sum = 0;
// // // // // num.forEach(function (value) {
// // // // //   sum += value;
// // // // // });
// // // // // console.log(sum); // Asha


// // // // // let total = 0;
// // // // // num.forEach((value) => {
// // // //   //   total += value;
// // // //   // });
  
// // // //   // console.log(total); // sai
  
  
// // // //   // let total = 0;
// // // //   // num.forEach((n) => (total += n));
// // // //   // console.log(total);   //Krishnavenireddy
  
  
  
// // // //   // Reduce
  
// // // //   // num.reduce((acc,c,i,t)=>{
    
// // // //     // },intialVal)
    
// // // //     let num = [10,20,30,40] // 100

// // // // let calcAllVal = num.reduce((acc,c,i,t)=>{

// // // //  return acc+c 

// // // //  // 0 + 10 = 10 -- first place
// // // //  // 10 + 20 = 30 -- second place
// // // //  // 30 + 30 = 60 -- theird place
// // // //  // 60 + 40 = 100 -- fourth place

// // // //  // 100 + undefined = 100

// // // // //  return 100 
  

// // // // },0) // 10 // 30 // 60 // 100
// // // // console.log(calcAllVal);



// // // // // function higher order method

// // // // // 1.sort

// // // // let num1 = [2,5,3,9,1,55,32]

// // // // let sortVal = num1.sort((a,b)=>{
// // // //    return  b-a
// // // // })

// // // // console.log(sortVal);

// // // // // 2. some - or

// // // // let num2 = [1,2,3,4]

// // // // let someVal = num2.some((c,i,t)=>{
// // // //  return c%2==0

// // // //  // 1%2==0 false
// // // //  // 2%2==0 true
// // // //  // 3%2==0 false
// // // //  // 4%2==0 true
// // // // })

// // // // console.log(someVal);


// // // // // every - And

// // // // num2 = [1, 2, 3, 4];

// // // // let EveryVal = num2.every((c,i,t)=>{
// // // //   return c%2==1
// // // // })

// // // // console.log(EveryVal);


// // // // // Array to string

// // // // let num4 = [1,2,3,4]

// // // // console.log(num4);


// // // // let strArr = num4.join()

// // // // console.log(strArr);

// // // // let strmethod = num4.toString()

// // // // console.log(strmethod);




// // // // String Methods


// // // // charAt()

// // // let str = "javascriptA"
// // // let charAtVal = str.charAt(1)

// // // console.log(charAtVal);


// // // // charCodeAt()

// // // let charCodeAtVal = str.charCodeAt(str.length-1)

// // // console.log(charCodeAtVal);

// // // // includes

// // // str = "javascriptA";

// // // let includesVal = str.includes("z")

// // // console.log(includesVal);

// // // //IndexOf

// // // let IndexOfVal = str.indexOf("a",2)

// // // console.log(IndexOfVal);

// // // str = "javascriptA";

// // // // lastIndexOf

// // // let lastIndexOfVal = str.lastIndexOf("a")

// // // console.log(lastIndexOfVal);

// // // // slice

// // // let sliceVal = str.slice(4,10)

// // // console.log(sliceVal);

// // // // split

// // // let comic = "spider-man,iron-man"

// // // let splitval = comic.split("a")

// // // console.log(splitval);

// // // // startswith

// // // let startswithVal = comic.startsWith("s")

// // // console.log(startswithVal);

// // // // EndsWith

// // // comic = "spider-man,iron-man";

// // // let EndsWithVal = comic.endsWith("n")

// // // console.log(EndsWithVal);

// // // // Replace

// // // let ReplaceVal = comic.replace("spider","Ant")

// // // console.log(ReplaceVal);

// // // // Repeat()

// // // let RepeatVal = comic.repeat(11)

// // // console.log(RepeatVal);

// // // // trim 

// // // let random = " HELLO world "

// // // console.log(random);


// // // let trimVal = random.trim()

// // // console.log(trimVal);


// // // // touppercase()

// // // console.log(random.toUpperCase());

// // // // tolowercase()

// // // console.log(random.toLowerCase());

// // // console.clear();








// // // // DATE


// // // let dateVal = new Date()

// // // console.log(dateVal);

// // // // get

// // // // getYear()

// // // let getYear = dateVal.getFullYear()

// // // console.log(getYear);

// // // // getMonth()

// // // let getMonth = dateVal.getMonth()

// // // console.log(getMonth);

// // // // getDate()

// // // let getDate = dateVal.getDate()

// // // console.log(getDate);

// // // // getDay()

// // // let getDay = dateVal.getDay()

// // // console.log(getDay);

// // // // getHours()

// // // let getHours = dateVal.getHours()

// // // console.log(getHours);

// // // // getMinutes()

// // // let getMinutes = dateVal.getMinutes()

// // // console.log(getMinutes);

// // // // getSeconds()

// // // let getSeconds = dateVal.getSeconds()

// // // console.log(getSeconds);



// // // // localTime

// // // let localTime = dateVal.toLocaleTimeString()

// // // console.log(localTime);

// // // // localDate

// // // let localDate = dateVal.toDateString()

// // // console.log(localDate);

// // // // date & time

// // // let dT = dateVal.toLocaleString()

// // // console.log(dT);

// // // console.clear();


// // // // set

// // // let date1 = new Date()

// // // console.log(date1);

// // // // setFullyear()

// // // date1.setFullYear(2003)

// // // console.log(date1);

// // // // setDate()

// // // date1.setDate(3)

// // // console.log(date1);

// // // // setMonth()

// // // date1.setMonth(1)

// // // console.log(date1);


// // // // setHours()

// // // date1.setHours(13)

// // // console.log(date1);


// // let date1 = new Date() // store real datas

// // // let year = prompt("enter your bday year") // user year
// // // let month = prompt("enter your month") // user month
// // // let date = prompt("enter your date") // user date


// // // date1.setFullYear(year) // inputed user year
// // // date1.setMonth(month-1) // inputed user month
// // // date1.setDate(date)     // inputed user date

// // console.log(date1);


// // let dayData = date1.getDay()  // get day value 

// // console.log(dayData);

// // let DayArr = ["sunday","mon","Tue","Wed","thu","fri","sat"]

// // // console.log(DayArr[dayData]); // return correct day




// // function one(){
// //     console.log("one");
    
// // }
// // function two(){
// //     console.log("two");
    
// // }
// // function three(){
// //     console.log("three");
    
// // }

// // // one()
// // // setTimeout(two,2000)
// // // three()






// // // setInterval(()=>{
// // //     let time = new Date();

// // //     console.log(time.toLocaleTimeString());
// // // },1000)

// // // Promise

// // // https://fakestoreapi.com/products/1

// // // setTimeout(()=>{
// // //    let time = new Date();

// // //    console.log(time.toLocaleTimeString());
// // // },2000)




// // // Dom - document object model

// // // Dom tree

// // // selecting

// // // getElementByTagname

// // let tag = document.getElementsByTagName("h1")

// // console.log(tag);


// // // getElementByClassname

// // let classname1 = document.getElementsByClassName("child1")

// // console.log(classname1);

// // // getElementById

// // let id1 = document.getElementById("child2")

// // console.log(id1);

// // // queryselector method

// // let tag1 = document.querySelector("h2")

// // console.log(tag1);

// // let class1 = document.querySelector(".one")

// // console.log(class1);

// // let id2 = document.querySelector("#two")

// // console.log(id2);

// // // queryselectorAll

// // let tag2 = document.querySelectorAll("h3")

// // console.clear();


// // console.log(tag2);

// // fetch("https://fakestoreapi.com/products/")// fetch stored data
// // .then((data)=>{
// //     return data.json()
// // })
// // .then((jsData)=>{
     
// //     var cards = document.querySelectorAll(".card")
// //     jsData.forEach((c,i)=>{
// //         if(cards[i]){

// //             let card = cards[i]
// //             console.log(card); 
            
// //             let img = card.querySelector("img")
// //             let h1 = card.querySelector("h1")
// //             let p = card.querySelector("p")
// //             let btn = card.querySelector("button")


// //             img.src = c.image
// //             h1.innerText = c.title
// //             p.innerText = c.description
// //             btn.innerText = "$ "+ c.price
// //         }
        
        
        
                 
             
// //     })  
// // })
// // .catch((error)=>{
// //     console.error(error.message);
    
// // })



// // fetch("https://fakestoreapi.com/products/2")
// // .then((data)=>{
  
//   //     return  data.json()
  
//   // })
  
//   // .then((data1)=>{
    
//     //     var img1 = document.querySelector(".img1");
//     //     var h11 = document.querySelector(".h1");
//     //     var p1 = document.querySelector(".p1");
//     //     var btn = document.querySelector(".btn")
//     //     img1.src = data1.image
//     //     h11.innerText = data1.title
//     //     p1.innerText = data1.description.slice(0,100)
//     //     btn.innerText = "$ "+data1.price
//     // })
    
    
    
//     // function two(){
//       //     console.log("hi");
      
//       // }
      
//       // setTimeout(two,0)
      
//       // function one1(){
//         //     console.log("hello");
//         // }
        
        
//         // one1()
        
        
// // fetch("https://fakestoreapi.com/products/")
// // .then((data)=>{
// //     return data.json()
// // })
// // .then((jsData)=>{
// //     jsData.forEach((c1,i,t)=>{
  
// //     let card = document.querySelectorAll(".card")
     
// //     card.forEach((c,i,t)=>{

      
      
// //       let image = c.querySelector("img")
// //       image.src = c1.image
// //       let p = c.querySelector("p")
// //       p.innerHTML = c1.description.slice(0,70)
// //       let btn = c.querySelector("button")
// //       btn.innerText = c1.price
// //       let h1 = c.querySelector("h1")
// //       h1.innerText = c1.title
      
// //     })
  


// //   })
// // })

// // fetch("https://fakestoreapi.com/products/")
// //   .then((data) => data.json())
// //   .then((jsData)=>{
// //     let card1 = document.querySelector(".container")
// //     card1.innerHTML = ""
// //     jsData.forEach((c,i)=>{

// //       let card = document.createElement("div")
// //       card.setAttribute("class","card1")
      
// //       card.innerHTML = `<h1>${c.title}</h1><img src="${c.image}">`;


// //      card1.appendChild(card)
     
      
// //     })

// //   })

// // Traversing method

// // parent

// let child1 = document.querySelector(".child")

// console.log(child1);

// console.log(child1.parentElement);//parentElement

// // childElement Select method

// let parent = document.querySelector(".parent")

// console.log(parent);
// console.log(parent.childElementCount);// childElementCount
// console.log(parent.children);//children
// console.log(parent.firstElementChild);//firstElementChild
// console.log(parent.firstChild);//firstElement
// console.log(parent.lastChild);//lastChild
// console.log(parent.lastElementChild);//lastElementChild


// // sibling select method

// let child11 = document.querySelector(".child")

// console.log(child11);
// let child2 = (child11.nextElementSibling);//nextElementSibling

// console.log(child2.nextElementSibling);

// console.log(child2.previousSibling);//



// manipulate



// input  = value
// AllElement = innerText,textContent,innerHtml

// document.createElement



// function add1(){
//   let input = document.querySelector("input");

//   let orderList = document.querySelector("ol");

//   // store the value in input

//   let inputValue = input.value

//   console.log(inputValue);
  

//   let li = document.createElement("li");



// }

let button = document.querySelector("button");

button.addEventListener("click",()=>{
  let input = document.querySelector("input");
  let orderList = document.querySelector("ol");
  let inputValue = input.value;


  
  let li = document.createElement("li")

  li.textContent = inputValue
  li.style.cursor = "pointer"
  li.style.color  = "green"
  li.classList  = "one"

  li.setAttribute("class","two")

  
  


  orderList.append(li)

  li.addEventListener("click",()=>{

    li.style.color = "red"

    setTimeout(()=>{
      li.remove()
    },2000)

  })
  

})


console.log(eval(45 + 454));



fetch("https://fakestoreapi.com/products/")
.then((data)=>{


  return data.json()
  
})

.then((jsdata)=>{


   let cards = document.querySelector(".card")
   jsdata.forEach((c,i,t)=>{

    

    let card1 = document.createElement("div")

    card1.innerHTML =`<h1>${c.title}</h1>
    <img src="${c.image}" alt="${c.price}"/>
    <p>${c.description.slice(0,100)}</p>`

   
    
    cards.appendChild(card1)
    
    
    console.log(cards);
  })
   
})

.catch((error)=>{
  console.log(error.message);
  
})






