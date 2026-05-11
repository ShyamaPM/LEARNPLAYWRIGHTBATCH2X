var a = 10;

// var is functions -scoped


console.log(a); //Global scope

function printHello() {
    console.log("Hello Testing Academy!");
    var a = 20;
    console.log(a);

    if(true){
        var a = 30;
        console.log(a); //30
    }
    
}
printHello();

//var ==trump, flipper, dual faced, not trustworthy, redeclarable, reassignable, function-scoped, hoisted