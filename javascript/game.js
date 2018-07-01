var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var user = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    function restart() {
        wins = 0;
        losses = 0;
        guessesLeft = 10;
        user = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    alert("You'll have 10 guesses to find out if you're one of us...oh and you must win 10 times to proceed...goodluck");
    document.onkeyup = function(event) {
        
        
        var userGuess = event.key;

        if (userGuess == computerGuess) {
            wins++; computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; user = [];
        } else if (userGuess !== computerGuess) {
            losses++; guessesLeft--; user.push(userGuess);
        } 
        if (guessesLeft == 0) {
            restart(); alert("Go home - this game isn't for you");
        }
        if (wins == 10) {
            alert("it appears you are one of us... please proceed to the last test"); window.location = "https://www.psychicpower.com/quizzes/TakeQuiz.aspx?id=4"
        }
        var html =
            "<p>wins: " + wins + "</p>" +
            "<p>Computer Guess(Left here so you can test): " + computerGuess + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>You chose: " + user + "</p>" ;

            // Set the inner HTML contents of the #game div to our html string
            document.querySelector("#game").innerHTML = html;

}
