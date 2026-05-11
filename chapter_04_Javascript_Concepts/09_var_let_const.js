var v= 10;
let l =30;
const c = .14;

var browser = "chrome";
var browser = "firefox"; // redeclaration 
browser = "edge"; // reassignment

var testCase = ["login", "signup", "logout"];

for(var i =0;i<testCase.length;i++){
    console.log("Running test:",testCase[i]);
}

console.log("Loop counter left over from outside the loop:",i); // i is accessible outside the loop


console.log("Hi");
console.log("Hi");
console.log("Hi");

function say(){
    console.log("Hi from the fucntion");
}
say();
say();
