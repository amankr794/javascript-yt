const accountId = 144553
let accountEmail = "aman@google.com"
var accountPassword = "12345"
accountCity = "Jiapur"  //not a good method to declare variable to reserve memory in js
let accountState; //uninitialized variable

/********** Updating User Information ********/

// accountId = 2  // not allowed

console.log(accountId)

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

/*
    Prefer not to use var to declare variable
    b/c of issue in block scope and functional scope

    Only use let and const to declare variable in js

    in js no any issue of ;

    in js value of initialized variable is undefined
*/


//Printing information in Tabular Structure 
// Syntax: --> console.table([variablename1, variablename2, ...])

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])