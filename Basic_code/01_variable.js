const accountId=144445;
let mail="sakil@gmail.com"
var accountPassword="1458"
city="Dhaka"
let subCity;
/*
prefer not to use var 
because of issue in block  and fucntion scope
*/
 
// accountId=4558 We can not change in const variable
mail="sakil124@gmial.com"
accountPassword="434243"
city="Chattogram"
// to print mulitple variable at a time we can sue console.table
console.table([mail,accountPassword,city,subCity]);
