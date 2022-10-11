// 2. Let's play a game: This is an advanced problem!
// Rules of this Game:

// The game will consist of 100 turns. 
// If the number of turns is even, you gain 5 points. 
// If the number of turns is odd, you gain 3 points. 
// If ever your score is equal to 125, you are reset back to 25 points. 
// This will only be allowed to happen once. 
// The game ends if you are able to make it through 100 turns or you reach more than 290 points, whichever comes first.
// Using a for loop, and the two already declared variables points and pointsReset, create the game.
var points = 0;
var pointsReset = false; 
    
    //write your code here
    for (let Turns = 0; Turns < 100 && points < 290; Turns++){
        if (points == 125 && pointsReset === false){
            points = 25;
            pointsReset = true;
        } else if(Turns % 2 === 0){
            points = points + 5;
        } else {
            points = points + 3;
        } 
        console.log("Turns: " + Turns + " Score: " + points)
    }


