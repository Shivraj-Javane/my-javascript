const accountId = 155334
let accountEmail = "shivraj@google.com"
var accountPassword = 56789
accountCity = "Pune"
let accountState;

//  accountId = 2  //  not allowed

accountEmail = "sj@sj.com"
accountPassword = "13443"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
