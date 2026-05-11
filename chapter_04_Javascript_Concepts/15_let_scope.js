let a=10; //Global scope
console.log(a); //10

function printHello() {
    console.log("Hello");

    let a =20;
    console.log(a);

    if(true)
    {
        let a = 30;
        console.log(a); //30
    }
    console.log("F-> ",a); //20
}
console.log("G-> ",a); //10
printHello();