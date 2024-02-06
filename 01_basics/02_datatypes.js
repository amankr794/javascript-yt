"use strict"; //To tell execution engine to treat all JS code in this file as
              //newer version/standards. Once this flag set it remains set for
              //the entire code in the file , All the code in the file will be
              //treated as new standards by the Execution Engine. 
              //There is no any way to tell execution engine "use no strict". 
              //It is not mandatory to write this line b/c nowdays the 
              //Execution engine will automatically treat JS code in strict mode.


/*alert statement*/
// alert("Hello")  //ReferenceError: alert is not defined. It will run fine in browser
                   //console. But in nodeJS environment it shows error.
                   //Error b/c: We are using nodeJS not browser
                   //There is different syntax to use alert() in nodeJS.


/*When to use spacing, semicolon*/
// console.log(3+3)  console.log("Aman")   //shows error

console.log(3
    +3);  //JS automatically removes the blank spaces and newline in a method.
          //Code readability should be high.
          //Bad practice to write statements like this

console.log(3+3);  console.log("Aman")  //Code readability should be high.
                                        //Bad practice to write statements like this

//Good Practices                                        
console.log(3+3);  
console.log("Aman");

/*JS documentation */
//i> Mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript
     // It's not the Original documentation, it is a documentation by Mozilla organistaion.
//ii> Original documentation: https://tc39.es/ecma262/#sec-ecmascript-language-types.


/* Datatypes in JS */
//Primitive Datatypes
let name = "Aman" //string
let age = 18 //number
let isLoggedIn = false //boolean
let state; // it is undefined, only variable is declared, but not assigned any value to it 
// let state = null  //assigned a null value to a variable

//number => 2^53 (2 to power 53)---> range
//bigint => is used for storing bigger number
//string => " " or ''
//boolean => true/false
//null => standalone value. null is representation of an empty value.
//undefined => not assined any value.
//symbol => mostly used in react to find the uniqueness in the components.

//Nonprimitive Datatypes
//object

/* typeof --> to find the type of any value, variable */
// console.log(typeof "Aman"); //type --> string
// console.log(typeof age);    //type --> number
// console.log(typeof null);  // type--> object
// console.log(typeof undefined); //type --> undefined

//or we can use typeof() as a method
console.log(typeof("Aman"));
