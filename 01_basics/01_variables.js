const accountId = 163546
let accountEmail = "krishnaCodes@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState;
//the value assigned to variables of const type cannot be changed
// accountId = 2

accountEmail = "kps@kps.com"
accountPassword = "696969"
accountCity = "Kolkata"

/*
    Prefer not to use var: because of issue in block scope
    and functional scope

    its our wish to mention the variable type or not
    but preferrable is to mention the type.

    if you declare a variable without any intialization
    in output screen it will show >>undefined<<
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])