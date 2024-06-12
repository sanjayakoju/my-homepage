$(document).ready(function() {
    var gameStarted = false;
    var gameLost = false;
    var score = 0;

    // Start the game
    $("#start").click(function() {
        gameStarted = true;
        gameLost = false;
        $("#status").text("Good luck!");
        $(".boundary").removeClass("youlose");
        updateScore();
    });

    // Check for boundary hit
    $(".boundary").on("mouseenter", function() {
        if (gameStarted) {
            gameLost = true;
            $(".boundary").addClass("youlose");
            $("#status").text("You lost! Click the \"S\" to begin.");
            if (score > 0) {
                score--;
                updateScore();
            }
        }
    });

    // Check if user reached the end
    $("#end").on("mouseenter", function() {
        if (gameStarted && !gameLost) {
            $("#status").text("You win! Click the \"S\" to play again.");
            gameStarted = false;
            score++;
            updateScore();
        }
    });

    // Check for boundary hit when mouse leaves the maze container
    $("#maze").on("mouseleave", function() {
        if (gameStarted) {
            gameLost = true;
            $(".boundary").addClass("youlose");
            $("#status").text("You lost! Click the \"S\" to begin.");
            if (score > 0) {
                score--;
                updateScore();
            }
        }
    });

    // Update the score display
    function updateScore() {
        $(".boundary.example").text("Score: " + score);
    }

    // Initialize the score display
    updateScore();
});
