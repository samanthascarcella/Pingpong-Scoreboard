// -------------------VARIABLES -------------------
const resetBtn = document.getElementById("btn3");
let maxScore = 3;
const maxScoreSelector = document.getElementById("maxScore");

const p1 = {
    score: 0,
    button: document.getElementById("btn1"),
    display: document.getElementById("p1")
}
const p2 = {
    score: 0,
    button: document.getElementById("btn2"),
    display: document.getElementById("p2")
}
// ------------------------------------------------

//PURPOSE: Create listener for player 1 button
p1.button.addEventListener("click", function () {
    addPoint(p1, p2);
});

//PURPOSE: Create listener for player 2 button
p2.button.addEventListener("click", function () {
    addPoint(p2, p1);
});

//PURPOSE: Create listener for reset button
resetBtn.addEventListener("click", function () {
    reset();
});

//PURPOSE: Create listener to round selector. 
maxScoreSelector.addEventListener("change", function () {
    maxScore = parseInt(this.value);
    reset();
});


//PURPOSE: Add point to the correct player. Check to see if maxScore has been reached.
function addPoint(player, opponent) {
    player.score++;
    player.display.textContent = player.score;

    if (player.score === maxScore) {
        matchOver(player, opponent);
    }
}

//PURPOSE: Reset all settings.
function reset() {
    for (let p of [p1, p2]) {
        p.display.textContent = 0;
        p.score = 0;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
}

//PURPOSE: Disable players' buttons and show who the winner is.
function matchOver(winner, loser) {

    winner.display.classList.add('has-text-success');
    loser.display.classList.add('has-text-danger');

    for (let p of [p1, p2]) {
        p.button.disabled = true;
    }
}