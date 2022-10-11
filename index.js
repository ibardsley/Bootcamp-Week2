// ==
// >
// <
// >=
// <=

// && And statement
// || Or statement 

// var firstName = "Tim";

// if(firstName == "Sam") {
//     console.log('Hello, Sam!');
// } else {
//     console.log('Hey, ' + firstName);
// }

// var costOfMilk = 3;

// 

// var grade = 'D';

// switch (grade) {
//     case 'A':
//         console.log('90-100');
//         break
//     case 'B':
//         console.log('80-89');
//         break
//     case 'C':
//         console.log('70-79');
//         break
//     default:
//         console.log('0-69');
// }

// var a = 5;
// var b = 7;

// if (a == 5) {
//     if (b == 6) {
//         console.log('a is 5 and b is 6.');
//     } else {
//         console.log ('a is 5 but b is not 6');
//     }
// }
// // This below is the same ^ but called flat as it is more streamlined with the && statement
// if (a == 5 && b == 6) {
//     console.log('a is 5 and b is 6.');
// } else {
//     console.log('a is 5 but b is not 6.');
// }
// LOOP "for" good for when you know how many times you need to loop
// prints all numbers til the boolean is no longer true below
// for (let i = 0; i < 10; i ++) {
//     console.log(i);
// }
// // even numbers printed below
// for (let i = 0; i <= 20; i ++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let names = ['Sam', 'Tom', 'Hillary'];

// for (let i = 0; i < names.length; i++) {
//         console.log(names[i]);
//     }

// // While LOOP - need to do something over and over until a condition is met
// // but you don't know how many iterations are needed such as reading
// // lines from a file.

// let a = 110;
// // infinite loop because no end is defined. added a++ to increase a and stop endless loop
// while (a < 10) {
//     console.log(a);
//     a++;
// }

// // Do LOOP like a while loop but will always iterate at least once and check condition at the end

// do {
//     console.log(a);

// } while (a < 10)

// // modified for loops
// // array is a list of values
// // for in and of perform iteration for each element or item of array

// // i starts at 0 and increments for us / does not explain why it becomes 0,1,2 rather than the names
// for (i in names) {
//     console.log(i);
// }

// // for of will loop through object itself
// for (name of names) {
//     console.log(name);
// }

// var cupsOfFlour = 0;

// while (cupsOfFlour < 5) {

//   console.log('Scooping a cup of flour into the bowl');

//   cupsOfFlour += 1;

//   console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 

// }

// user iput

var name = window.prompt('What is your name?');
window.alert('Welcome, ' + name);




var loggedIn = false;
// ! = opposite
while(!loggedIn) {
    let username = prompt('Username:');
    let password = prompt('Password:');
    
    if (username == 'samy123' && password == '12345') {
        alert('Welcome back, ' + username);
    loggedIn = true;
    } else {
        alert('Incorrect username or password.');
    }
}