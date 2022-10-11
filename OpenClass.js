// Conditionals
// 1. Nested If Statement: 
// Create a nested if statement (the second if statement will only run if the first one evaluates to true) that does the following:

// The first if statement will check to see if num1 is greater than or equal to num2 . 
// If the first if statement evaluates to true, then check to see if num3 is greater than or equal to num4.
// Once you've created the nested if statement, add the following:

// If both conditions are true print: "Both statements are true." 
// If the first condition is true but the second isn't, print: "The first statement is true, but the second is not." 
// In all cases, after the outer if statement, print "Program ended."
var num1 = 3;
var num2 = 2;
var num3 = 5;
var num4 = 4;



//write your code here
if (num1 >= num2){
    if(num3 >= num4){
        console.log("Both statements are true");
    } else {
    console.log("The first statement is true, but the second is not");
    }
}
   console.log("Program ended");

// 2. Old Enough To Drive? Write an if statement that checks if the given age is greater than or equal to 16. 
// If it is, set canDrive to true and print it's value to the console. 
// Use the already declared variables of age and canDrive.

var age = 12;
var canDrive = false;

//Write your code here

if (age >= 16){
    canDrive = true;
    console.log(canDrive);
}


// 3. What Is My Letter Grade? 
// Write a series of if/else if statements using the already declared variables numberGrade and letterGrade 
// that check the numberGrade and assign letterGrade to a string of the corresponding letter grade. 
// Print the letter grade to the console.
// A: 90+
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// Make sure to use a capital letter for the grade.

var numberGrade = 90;
var letterGrade;

//write your code here

if (numberGrade >= 90){
    console.log(letterGrade = "A");
} else if (numberGrade >= 80){
    console.log(letterGrade = "B");
} else if(numberGrade >= 70){
    console.log(letterGrade = "C");
} else if (numberGrade >= 60){
    console.log(letterGrade = "D");
} else {
    console.log(letterGrade = "F");
}

// Another way to write this - less typing
// if(numberGrade >= 90){
//     letterGrade = 'A';
// } else if(numberGrade >= 80){
//     letterGrade = 'B';
// } else if(numberGrade >= 70){
//     letterGrade = 'C';
// } else if(numberGrade >= 60){
//     letterGrade = 'D';
// } else {
//     letterGrade = 'F';
// }

// console.log(letterGrade);

// 4. Print The Smaller Number: 
// Write an if/else if statement that prints the smaller of the two given inputs, num1 and num2. 
// If they are the same, print "same"

var num1 = 3;
var num2 = 2;

//write your code here

if(num1<num2){
    console.log(num1);
}else if(num2<num1){
    console.log(num2);
}else{
    console.log("same");
}

// another way to write it
if(num1 == num2) {
    console.log("same");
} else if (num1 < num2) {
    console.log(num1);
} else {
    console.log(num2);
}

// 5. Number Comparison: 
// Create an if/else if statement that checks myNumber against num1 and based on which condition evaluates to true,
// print the following messages:

// num1 + " is smaller than my number, " 
// + myNumber num1 + " is larger than my number, " 
// + myNumber num1 + " is equal to my number, " + myNumber

var myNumber = 1;
var num1 = 2;

//write your code here.

if(num1 == myNumber){
    console.log(num1 + " is equal to my number, " + myNumber);
} else if(num1<myNumber){
    console.log(num1 + " is smaller than my number, " + myNumber);
} else {
    console.log(num1 + " is larger than my number, " + myNumber);
}

// another wayt to write this
// if ( num1 < myNumber ) {
//     console.log(num1 + " is smaller than my number, " + myNumber);
// } else if ( num1 > myNumber){
//     console.log(num1 + " is larger than my number, " + myNumber);
// } else {
//     console.log(num1 + " is equal to my number, " + myNumber);
// }

// 6. Equality Comparison: Write an if statement that compares num1 to num2. 
// If they are equal, print "num1 is equal to num2."

var num1 = 23;
var num2 = 32;

if(num1 == num2){
    console.log("num1 is equal to num2.");
}

// 7. Day Of The Week: 
// Write a switch statement that checks the already declared variable numberOfDay
//  and prints the corresponding name of the day of the week.
// For example, if numberOfDay is 1, "Sunday" will be printed to the console. 
// If the numberOfDay is not between 1 and 7, print "The number of day is invalid."

var numberOfDay = 1;

//write your code here

switch (numberOfDay){
    case 1:
        console.log("Sunday");
    break;
    case 2:
        console.log("Monday");
    break;
    case 3:
        console.log("Tuesday");
    break;
    case 4:
        console.log("Wednesday");
    break;
    case 5:
        console.log("Thursday");
    break;
    case 6:
        console.log("Friday");
    break;
    case 7:
        console.log("Saturday");
    break;
    default:
        console.log("The number of day is invalid.");
}

// 8. Print the Larger Number: Write an if else/if statement 
// that compares num1 to num2 and prints the larger of the two. 
// If they are equal, print "num1 is equal to num2"

var num1 = 2;
var num2 = 3;

//write your code here

if(num1==num2){
    console.log("num1 is equal to num2");
}else if (num1>num2){
    console.log(num1);
}else {
    console.log(num2);
}

// 9. Can I Buy A Soda? 
// Write an if statement that checks to see if there is enough money to cover the cost of a soda. 
// Use the already declared variables money and costOfSoda. Use console.log() to print one of the following results:
// If there is enough money to cover the cost of a soda, print "I can buy a soda!" 
// If not, print "I need to earn some more money!"

var money = 1;
var costOfSoda = 1;

//write your code here

if(money >= costOfSoda){
    console.log("I can buy a soda!");
} else {
    console.log("I need to earn some more money!");
}



// LOOPS
// 1. For Loop 0 to x: Write a for loop that prints the numbers 0 to x. 
// The x is an already declared variable. 
// x has been initialized for you and will be based on a user's input.
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var x = parseInt(input[0]);


//write your code here

for (let i = 0; i <= x; i ++){
    console.log(i)
}   

// 3. Fill Up A Bowl With Rice: 
// Using the supplied variables requiredCupsOfRice and currentCupsOfRice, 
// create a loop of your choice that will add cups of rice to a bowl.

// Each time a cup of rice is added, print the following: 
// "The bowl contains " + currentCupsOfRice + " cups of rice." 
// currentCupsOfRice in this example is the current number of cups of rice in the bowl, 
// which will get incremented to indicate that you have added a cup of rice to the bowl. 
// Once the number of cups called for has been reached, print "We have enough rice!"

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

var requiredCupsOfRice = parseInt(input[0]);
var currentCupsOfRice = 0;

//write your code here

do {
    currentCupsOfRice++;
    console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");
} while (currentCupsOfRice < requiredCupsOfRice);
    console.log("We have enough rice!");

//This is an example using a while loop

while(currentCupsOfRice != requiredCupsOfRice){
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');

// 4. Multiplication Table: 
// Create a for loop that prints out a multiplication table for num from 1 through 10 as follows 
// (the value of num will be input by the user):

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num = parseInt(input[0]);


//Write your code here
for (let i = 1; i<=10; i++){
    console.log((num), ("x"), (i), ("="), (num * i));
}

// 5. For Loop: Write a for loop that prints every third number from 0 up to, and including, 99.

//write your code here

for (let i=0; i <= 99; i++){
    if (i % 3 === 0){
        console.log(i)
    }
}

// 6. Do/While Loop: 
// Create a do/while loop that will print the already declared variable userNumber and then add 6 each time through the loop.
// Stop the loop once the number is greater than or equal to 100.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var userNumber = parseInt(input[0]);

//write your code here

do {
    console.log(userNumber);
    userNumber += 6;
} while (userNumber <= 100);

// another example:
do {
    console.log(userNumber);
    userNumber = userNumber + 6;
} while(userNumber <= 100);

// 7.For Loop 1 to 100: 
// Write a for loop that loops from 1-100. 
// If the iteration count is even, prints the iteration count and " foo"

// For example, if the iteration count is 2, then the console would read "2 foo". 
// The final output should be "100 foo". Notice there is a space between the number and "foo".

//write your code here

for (let i = 1; i <= 100; i++){
    if (i % 2 === 0)
    console.log(i + " foo");
} 