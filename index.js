let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#070F2B";
}

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userchoice) => {
    //computer choice
    const compChoice = genCompChoice();
    
    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "stone") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;

        } else if (userchoice === "paper"){
            //stone, scissors
            userWin = compChoice === "scissors" ? false : true;

        } else {
            //paper, stone
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked", userchoice)
        playGame(userchoice);
    })
})