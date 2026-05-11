//JS Engine
// Line by line, JIT compilation

console.log(greeting);
//var greeting = "Hello World!"; //undefined
console.log(greeting); // Hello World!
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

// Behind the scene:

// var greeting;                   <-- hoisted with undefined
// console.log(greeting);          <--undefined
// greeting = "Hello World!";      <-- assignemnet stays in place
// console.log(greeting);          <-- Hello World!


//var a;
console.log(a);
var a = "Shyama";
console.log(a);

