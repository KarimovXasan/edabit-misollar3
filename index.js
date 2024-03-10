//1.Is the Number Less than or Equal to Zero?
//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

//lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

// function lessThanOrEqualToZero(num) {
//  	return num >0?false:true
// }

// ```

//2.Are the Numbers Equal?
//Create a function that returns true when num1 is equal to num2; otherwise return false.

//isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false

// function isSameNum(num1, num2) {
//    return  num1 === num2	
// }

//```

//3.Boolean to String Conversion
//Create a function that takes a boolean variable flag and returns it as a string.\

//boolToString(true) ➞ "true"

//boolToString(false) ➞ "false"

//function boolToString(flag) 

// {
//     return flag ? 'true' : 'false';
// }

//```

//4.Two Makes Ten
//Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

//makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

// function makesTen(a, b) {
// 	return a >=  b
// }

//```

//5.Multiple of 100
//Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true

//function divisible(num) {
// 	return num <= 0
// }

//6.Drinks Allowed?
//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

//shouldServeDrinks(17, true) ➞ false

// shouldServeDrinks(19, false) ➞ true

// shouldServeDrinks(30, true) ➞ false

//function shouldServeDrinks(age, onBreak) {
// 	return age >= 18
// }

//```   

// 7.Let's Fuel Up!
//A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// calculateFuel(15) ➞ 150

// calculateFuel(23.5) ➞ 235

// calculateFuel(3) ➞ 100

//function calculateFuel(n) {
// 	return n == 50
// }
//```

//8.Radians to Degrees
//Create a function that takes an angle in radians and returns the corresponding angle in degrees.

//radiansToDegrees(1) ➞ 57.29577951308232

// radiansToDegrees(20) ➞ 1145.9155902616465

// radiansToDegrees(50) ➞ 2864.7889756541163

// function radiansToDegrees(rad) {
// 	return  rad <= 3
// }

//9.Stack the Boxes
//Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on

// stackBoxes(1) ➞ 1

// stackBoxes(2) ➞ 4

// stackBoxes(0) ➞ 0

//function stackBoxes(n) {
// 	return n != n
// }

//10.Find the Bug: Returning the Container
// The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

//getContainer("Bread") ➞ "bag"

// getContainer("Beer") ➞ "bottle"

// getContainer("Candy") ➞ "plastic"

// getContainer("Cheese") ➞ null

//function getContainer(product) {
//     switch (product) {
// 		case "Bread": return "bag";
// 		case "Beer":
// 		case "Milk": return "bottle";
// 		case "Cerials": return "box";
// 		case "Eggs": return "carton";
// 		case "Candy": return "plastic";
// 		default: return null;
// 	}
// }

//```