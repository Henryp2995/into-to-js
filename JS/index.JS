// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isntOver25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isntOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
//Beginning of the lab//
const n1divByFive = (n1 % 5) == 0
console.log(n1divByFive)
const n2divByFive = (n2 % 5) == 0
console.log(n2divByFive)
const n3divByFive = (n3 % 5) == 0
console.log(n3divByFive)
const n4divByFive = (n4 % 5) == 0
console.log(n4divByFive)
//I used console log to make sure every statment was true. This ensures that every var is divisible by 5// 
//Now I will combine the variables above into one//
const divByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0
console.log(divByFive)
//Statment above is true so all are divisible by 5//
const Greater = (n1 > n4) 
console.log(Greater)
//Arithmetic chain//
const n5 = (n1 - n2)
console.log(n5)
const n6 = (n5/n3)
console.log(n6)
const n7 = (n6%n4)
console.log(n7)
//Followed all steps now going to combine into a cleaner function//
//Couldnt figure it out//
const distance = 1500
const budget = 175
const fuel = 3

let fifty5 = 30
let sixty = 28
let seventy = 23
//Gallons needed//
let Gallonsfor55 = (distance/fifty5)
console.log(Gallonsfor55)
let gallonsForSixty = (distance/sixty)
console.log(gallonsForSixty)
let gallonsForSeventy = (distance/seventy)
console.log(gallonsForSeventy)
//Will my budget cover it//
let budgetFor55 = Gallonsfor55 * fuel <= budget
console.log(budgetFor55)
let budgetFor60 = gallonsForSixty * fuel <= budget
console.log(budgetFor60)
let budgetfor70 = gallonsForSeventy * fuel <= budget
console.log(budgetfor70)
// the budget is enough for all except if youre going 70//
let hoursFor55 = (distance/55)
console.log(hoursFor55)
let hoursFor60 = distance/60
console.log(hoursFor60)
let hoursFor70 = distance/70
console.log(hoursFor70)
//Above are the hours it would take to travel the distance//
console.log("It makes the most sense to go 70 since it only takes " + hoursFor70 + " hours to arrive")