/*Conditionals*/

/*variables*/
var isArthur = false;
var weapon;

/*if them else default*/
if (isArthur) {
	weapon = "Excalibur";
} else {
	weapon = "Longsword";
}

//console.log("Current Weapon: " + weapon);

/*With ternary: Best Practice*/
weapon = isArthur ? "Excalibur" : "Longsword";
//console.log("Current Weapon: " + weapon);

/*Using with concatenation*/
var isKing = false;
isArthur = true;

//console.log("Current Weapon: " + (isArthur && isKing ? "Excalibur" : "Longsword"));

/*Ternary nested*/
var isArcher = true;
var helmet;

isArthur && isKing	? (weapon = "Excalibur", helmet = "Goosewhite")
					:
					isArcher ? (weapon = "Longbow", helmet = "Mail Helm") : (weapon = "Longsword", helmet = "Iron Helm");

console.log("Current Weapon: " + weapon + "\nCurrent Helmet: " + helmet);