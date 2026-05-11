function getUserStatus(){
    //var status_code; JS engine ptimized the code and moved the declaration to the top of the function scope, but not the initialization.
    console.log(stats_code);
    var status_code = "Active";
    console.log(status_code);
    
}
getUserStatus();
//Note: var is function_scoped, so status is hoisted to the top of the getUserStatus()
//, not the global scope. Hence, the first console.log(stats_code) will print undefined, and the second console.log(status_code) will print "Active".
