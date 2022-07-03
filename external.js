let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button')
const resultDisplay= document.querySelector('#result')

buttons.forEach(button =>{
    button.addEventListener('click', function(e){
        playRound(e.target.id)
    })
})

function computerPlay(){
   let  choices = ['Rock', 'Paper', 'Scissor']
    return choices[Math.floor(Math.random()* choices.length)] 
}

function playRound(playerSelection){
    let computerSelection = computerPlay()
    console.log(computerSelection)
    console.log(playerSelection)
    let result = ''

    if(playerSelection === 'Rock' && computerSelection === 'Scissor'||
        playerSelection=== 'Scissor'&& computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Rock'){
            playerScore+= 1
            result = playerSelection + ' ' +'beats' + ' '+ computerSelection+ ' '+ 'you won'
            +'<br><br> playerScore: '+' '+ playerScore + '<br><br>computerScor: '+' '+computerScore
        if(playerScore === 5){
            result = 'you won the game 👏 refresh please to play again'
            disabledButtons()
        }

    }
    else if(playerSelection === computerSelection){
        result = 'its a tie you both selected '+' '+ playerSelection
        +'<br><br> playerScore: '+' '+ playerScore + '<br><br>computerScor: '+' '+computerScore
    }
    else{
        computerScore+=1
        result = computerSelection + ' ' +'beats' + ' '+ playerSelection+ ' '+ 'the computer won'
        +'<br><br> playerScore: '+' '+ playerScore + '<br><br>computerScor: '+' '+computerScore;;
        if(computerScore === 5){
            result = 'the computer won the game refresh please to play again'
            disabledButtons()
        }
    }
    resultDisplay.innerHTML = result


}

function disabledButtons(){
    buttons.forEach(button => {
        button.disabled = true
    })
}