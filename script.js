
    let playerScore = 0;
    let computerScore = 0;
    const options = document.querySelectorAll('.buttons button');

   const updateScore =()=>{
    const playersScore = document.querySelector('.player-score p')
    const computersScore = document.querySelector('.computer-score p')
    
    playersScore.textContent = `${playerScore}`;
    computersScore.textContent = `${computerScore}`

}
//the whole game
const game = ()=>{
   
    options.forEach(option =>{
        option.addEventListener('click',(e)=>{
            //computer choices
            const choices = ['rock','paper','scissors']
            let random = Math.floor(Math.random()*3)
            const computerChoice = choices[random];
            playRound(e.target.classList.value,computerChoice)
            results();
            stopGame();
        })
    })
    
}
//play a round of rock,paper,scissors
const playRound = (playerSelection,computerSelection)=>{
    const paragraph = document.querySelector('.paragraph')
    if(playerSelection.toLowerCase() === computerSelection){
        paragraph.textContent='its a tie';
        return;
       }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        paragraph.textContent ='rock beats scissors! player wins'
        playerScore++;
        updateScore();
        return;
       }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        paragraph.textContent='paper beats rock! player wins';
        playerScore++;
        updateScore();
        return;
       }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        paragraph.textContent='scissors beats paper ! player wins'
        playerScore++;
        updateScore();
        return;
       }else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        paragraph.textContent = 'rock beats scissors! computer wins'
        computerScore++;
        updateScore();
        return;
       }else if(computerSelection === 'paper' && playerSelection === 'rock'){
        paragraph.textContent = 'paper beats rock! computer wins'
        computerScore++;
        updateScore();
        return;
       }else if(computerSelection === 'scissors' && playerSelection === 'paper'){
        paragraph.textContent='scissors beats paper ! computer wins';
        computerScore++;
        updateScore();
        return;
       }     
}//display the final result after any of the players reaches 5 points
const results = () =>{
    const p = document.querySelector('.results')
    if(playerScore === 5 && computerScore < 5){
        p.textContent +="The player";
        return;
    }else if(computerScore === 5 && playerScore<5){
        p.textContent += 'The computer'
        return;
    }
}
game();
        const stopGame =()=>{
    if(playerScore === 5 || computerScore === 5){
        options.forEach(option =>
            option.classList.add('disable'))
            return;
    }
}
