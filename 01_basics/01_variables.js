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


/*
    let vs var
    ->var is globally scoped whereas let and const are locally scoped
    ->var can be updated and re-declared within its scope
    ->let can be updated but not re-declared
    ->const can neither be updated nor be re-declared
    ->var variables are intialized with undefined
      whereas let and const variables are not readily intialized
      but if let doesn't find its intialization value
      then it also gets initialized with undefined  
*/
var a = 6;
{
    var a = 5;
    console.log(a)
}
console.log(a)


let b = 5;
{
    let b = 6;
    console.log(b)
}
console.log(b)