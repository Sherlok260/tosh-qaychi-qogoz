window.addEventListener('DOMContentLoaded', function(){
    let scoreBoard = {
        player: 0,
        computer: 0
    };
    let restart = document.querySelector('#restart'),
        choices = document.querySelector('.choices'),
        modal = document.querySelector('.modal'),
        result = document.querySelector('#result'),
        score = document.querySelector('#score');
        
    play();

    function play(){

        restart.addEventListener('click', function(){
            restartGame();
        })

        let computerChoice = '';
        let playerChoice = 'rock';

        choices.addEventListener('click', function(event){
            restart.style.display = 'inline-block';
           
            computerChoice = getComputerChoice();

            if(event.target.classList.contains('fa-hand-rock')){
                playerChoice = 'rock'
            } else if(event.target.classList.contains('fa-hand-paper')){
                playerChoice = 'paper'
            } else playerChoice = 'scissors'
        
            let winner = getWinner(playerChoice, computerChoice);
            showWinner(winner, computerChoice, playerChoice);
            
            score.querySelector('.player').textContent = `Player: ${scoreBoard.player}`;
            score.querySelector('.computer').textContent = `Computer: ${scoreBoard.computer}`;  
            
            clearModal();
        })

    }

    function getComputerChoice(){

        let x = Math.random();
        
        if(x<0.34) return 'rock'
        else if(x<0.67) return 'paper'
        else return 'scissors';

    }

    function getWinner(p,c){

        if(p === c) return 'draw'
        else if(p === 'rock' && c === 'scissors') {
            scoreBoard.player+=1
            return 'player'
        }
        else if(p === 'rock' && c === 'paper') {
            scoreBoard.computer+=1
            return 'computer'
        }
        else if(p === 'paper' && c === 'rock') {
            scoreBoard.player+=1
            return 'player'
        }
        else if(p === 'paper' && c === 'scissors') {
            scoreBoard.computer+=1
            return 'computer'
        }
        else if(p === 'scissors' && c === 'paper') {
            scoreBoard.player+=1
            return 'player'
        }
        else if(p === 'scissors' && c === 'rock') {
            scoreBoard.computer+=1
            return 'computer';
        }
    }

    function showWinner(winner, computerChoice, playerChoice){

        let win = ''

        if(winner === 'player'){
            win = 'You Win'
        } else if(winner === 'computer'){
            win = 'You lose'
        } else win = 'Draw';

        result.innerHTML = `
            <h1 style="text-align: center">${win}</h1>
            <div style="display: flex">
                <div>
                    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                    <br> <h1>Computer choice</h1> 
                </div>
                <div>
                    <i class="fas fa-hand-${playerChoice} fa-10x"></i>
                    <br> <h1>Player choice</h1> 
                </div>
            </div>
        `;
        modal.style.display = 'inline-block'
    }

    function restartGame(){
        scoreBoard.player = 0
        scoreBoard.computer = 0;
        restart.style.display = 'none';
        score.querySelector('.player').textContent = `Player: ${scoreBoard.player}`;
        score.querySelector('.computer').textContent = `Computer: ${scoreBoard.computer}`;
    }

    function clearModal(){
        window.addEventListener('click', function(event){
            if(event.target == modal){
                modal.style.display = 'none'
            }
        }) 
    }

})