// ==================== RULES FOR IDENTIFIERS IN JAVASCRIPT ====================
// Rule 1: Can start with letter (a-z, A-Z), underscore (_), or dollar sign ($)
var firstName = "Shyama";
var _privateVar = 100;
var $dollarVar = 200;

// Rule 2: Subsequent characters can include letters, digits, underscore, dollar
var user123 = "valid";
var my_var_2 = "valid";
var data$1 = "valid";

// Rule 3: Cannot start with a digit
// var 123abc = "invalid";    // <-- SyntaxError: Invalid or unexpected token
// var 1name = "invalid";     // <-- SyntaxError

// Rule 4: Cannot contain spaces or hyphens
// var my name = "invalid";   // <-- SyntaxError
// var my-name = "invalid";   // <-- SyntaxError
var my_name = "valid"; // use underscore instead
var myName = "valid"; // camelCase is convention
var my$name = "valid";

// Rule 5: Cannot use reserved keywords
// var var = "invalid";        // <-- SyntaxError
// var if = "invalid";         // <-- SyntaxError
// var return = "invalid";     // <-- SyntaxError
// var class = "invalid";      // <-- SyntaxError
// var function = "invalid";   // <-- SyntaxError
var myVar = "valid"; // avoid keywords entirely

// Rule 6: Case-sensitive (different identifiers)
var count = 10;
var Count = 20;
var COUNT = 30;
console.log(count, Count, COUNT); // 10 20 30 (three different variables)

// Rule 7: Unicode letters are allowed
var ñoño = "Spanish";
var привет = "Russian";
var 名字 = "Chinese";
var école = "French";

// ==================== SUMMARY: VALID vs INVALID ====================
// VALID:   firstName, _private, $money, a1, _1, $_, user_name, camelCase
// INVALID: 1abc, my var, my-var, var, if, return, class, function
