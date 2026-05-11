var a=10; //Global scope
console.log(a); //10

function printHello() {
    console.log("Hello");

    var a =20;
    console.log(a);

    if(true)
    {
        var a = 30;
        console.log(a); //30
    }
    console.log("F-> ",a); //30   
}
console.log("G-> ",a); //10
printHello();