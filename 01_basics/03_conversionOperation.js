/* Basic Conversion into JS */

// let gameScore = 33
// console.log(typeof gameScore);
// console.log(typeof (gameScore));


// let gameScore = "33"
// console.log(typeof gameScore);
// console.log(typeof (gameScore));  //typeof() as a method

/* Typecasting of String data into Number */
// let valueInNumber = Number(gameScore);   //gameScore will be typecast into Number datatype
// console.log(typeof valueInNumber);       //Number should be written in capital letter
// console.log(valueInNumber);

// let valueInNumber = number(gameScore)   //gameScore will be typecast into Number datatype
// console.log(typeof valueInNumber)      //ReferenceError: number is not defined


// let gameScore = "33abc" 
// let valueInNumber = Number(gameScore);   
// console.log(typeof valueInNumber);       
// console.log(valueInNumber); 
// console.log(typeof NaN);

/*Since "33abc" is not a pure number when we typecast it into Number, it will be typecasted but we get value as NaN . Hence, In Js there is no strict check*/


/*Typecasting of null value into Number*/
// let gameScore = null 
// let valueInNumber = Number(gameScore);   
// console.log(typeof valueInNumber);       
// console.log(valueInNumber);  

/* When we typecast null into Number, we get valu as 0*/


/* Typecasting of undefined value */
// let gameScore = undefined 
// let valueInNumber = Number(gameScore);   
// console.log(typeof valueInNumber);       
// console.log(valueInNumber);  

/*When we typecast undefined into Number, we get valu as NaN*/


/*Typecasting boolen value */
// let gameScore = true 
// let valueInNumber = Number(gameScore);   
// console.log(typeof valueInNumber);       
// console.log(valueInNumber);  


/*Typecasting String(in which all are alphabetical caharacters) into Number*/
// let gameScore = "aman" 
// let valueInNumber = Number(gameScore);   
// console.log(typeof valueInNumber);       
// console.log(valueInNumber);  

/*When we typecast string(in which all characters are alphabetical) into Number, we get value as NaN*/


/* 
Typesacting into Number

"33" => 33
"33abc" => NaN
true => 1
false => 0
"aman" => NaN
*/


/*Typecasting into boolean */
// let isLoggedIn = 1

// let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn)

/*Typecasting empty string */
// let isLoggedIn = ""
// let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn)

/*Typecasting string into boolean */
// let isLoggedIn = "aman"
// let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn)

/*
    Typesacting into Boolean

    1 => true
    0 => false
    "" => false
    "aman" => true
*/


/*Typecasting into String */
let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)
/* Browser mostly return value into String form and we typecast it into Number, Boolean, Object acc. to our use */





// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");    //these are the tricky ques avoid not use in production industry 
                                //Focus on Code Readability not on tricky questions

// console.log(3 + 4 * 5 % 3);
// console.log( (3 + 4) * 5 % 3);     //it is better way to write an expression always use ()

// console.log(+true);  //these are all tricky ques in js
// console.log(true+);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2   //don;t declare variable like this

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// do more practice on prefix and postfix from mdmdocs : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
