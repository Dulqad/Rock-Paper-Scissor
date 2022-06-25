const choices = ['rock', 'paper', 'scissor']
const winners = []

let computerSelection
let playerSelection



function gameStart(){
    for(let i = 1; i <=5; i++){
        roundPlay()
    }
    logWinner()
    
}


function roundPlay(){
    computerChoice()
    playerChoice()
    let winner = checkWinner(playerSelection, computerSelection)
    console.log(winner)
    winners.push(winner)

}
function playerChoice(){
    playerSelection = prompt("type Rock, Paper, Scissor")
    while(playerSelection == null || playerSelection === ""){
        playerSelection = prompt("type Rock, Paper, Scissor")
    }
    if(choices.includes(playerSelection)){
        console.log(playerSelection)
    }
    
}
function computerChoice(){
     computerSelection = choices[Math.floor(Math.random()*choices.length)]
     console.log(computerSelection)
}



function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "it's a tie"
    }
    else if(choiceP === "paper" && choiceC ==="rock"){
        return "player won the game"
    }
    else if(choiceP === "paper"&& choiceC ==="scissor"  ){
        return "computer won the game"
    }
    else if(choiceP === "scissor"&& choiceC ==="rock"  ){
        return "computer won the game"
    }
    else if(choiceP === "scissor"&& choiceC ==="paper"  ){
        return "player won the game"
    }
    else if(choiceP === "rock"&& choiceC ==="paper"  ){
        return "player won the game"
    }
    else if(choiceP === "rock"&& choiceC ==="scissor"  ){
        return "player won the game"
    }

}
 function logWinner(){
    let playerWon = winners.filter((item)=> item === "player won the game").length
    console.log("player won:", playerWon, "times")
    let computerWon = winners.filter((item)=> item == "computer won the game").length
    console.log("computer won:", computerWon, "times")
    let tie = winners.filter((item)=> item == "it's a tie").length
    console.log("Number of times tied:", tie, "times")
 }
gameStart()


