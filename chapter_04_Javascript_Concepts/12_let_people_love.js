let a=10; //it ia modern way to declare a variable

let retryCount = 0;
retryCount = retryCount + 1; // we can reassign value to a variable declared with let
console.log("Retry attempt", retryCout);

//let retryCount = 5; // we cannot redeclare a variable declared with let

let testStatus = "pending";

if(testStatus === "pending"){
    let executionTime = 1200; // we can declare a variable with the same name in a different block scope
    console.log("Test status inside if block", executionTime);
}
console.log(executionTime);// we cannot access a variable declared with let outside its block scope
// ReferenceError: executionTime is not defined

//{ - block
//if(){}
//function name() {}

// let =loyal;
//var = variable /traiter