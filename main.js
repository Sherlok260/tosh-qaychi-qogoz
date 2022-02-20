window.addEventListener('DOMContentLoaded', function(){

    let container = document.querySelector('.container'),
        choices = document.querySelectorAll('.choices'),
        scoreUser = document.querySelector('.player'),
        scoreComp = document.querySelector('.computer'),
        result = document.querySelector('#result'),
        modal = document.querySelector('.modal'),
        game= {
            player: 0,
            computer: 0
        };
    
    let rock = 'fa-hand-rock',
        paper = 'fa-hand-paper',
        scissors = 'fa-hand-scissors';
        
    choices.forEach(function(item){
        item.addEventListener('click', function(event){
            let userChoice;
            // console.log(event.target.classList.contains('fa-hand-rock'));
            // console.log(event.target.classList.contains('fa-hand-paper'));
            // console.log(event.target.classList.contains('fa-hand-scissors'));
            if(event.target.classList.contains('fa-hand-rock')) userChoice = 'rock'
            else if(event.target.classList.contains('fa-hand-paper')) userChoice = 'paper'
            else userChoice = 'scissors';
            
            let compChoice = random();
            let win = winner(userChoice,compChoice) 
           
            console.log('computer choice: ' + compChoice);
            console.log(win);
            console.log('__________________________');

            console.log(scoreUser);

            scoreUser.textContent = 'Player: ' + game.player;
            scoreComp.textContent = 'Computer: ' + game.computer;
            
            let showUserChoice = document.createElement('i'),
                showCompChoice = document.createElement('i'),
                vs = document.createElement('span');
            let showWinner = document.createElement('i')
            let showLoser = document.createElement('i')
            let user, comp;
            
            if(userChoice === 'rock') user = rock
            else if(userChoice === 'paper') user = paper
            else user = scissors;

            if(compChoice === 'rock') comp = rock
            else if(compChoice === 'paper') comp = paper
            else comp = scissors;

            showWinner.classList.add('fas')
            showWinner.classList.add(user)
            showWinner.classList.add('fa-10x')
            
            showLoser.classList.add('fas')
            showLoser.classList.add(comp)
            showLoser.classList.add('fa-10x')

            showUserChoice.appendChild(showWinner)
            showCompChoice.appendChild(showLoser)
            vs.style.margin = '0 auto'
            vs.style.fontSize = '30px'
            vs.innerHTML = '<br><br>VS'

            showUserChoice.innerHTML = '<i class="fas ' + user + ' fa-10x"><h2 style="font-size:30px">User Choice</h2></i>';
            showCompChoice.innerHTML = '<i class="fas ' + comp + ' fa-10x"><h2 style="font-size:30px">Comp Choice</h2></i>';

            result.innerHTML = '';
            result.appendChild(showUserChoice);
            result.appendChild(vs)
            result.appendChild(showCompChoice);
            result.appendChild()
            result.style.display = 'flex'
            result.style.margin = 'auto'

            modal.style.display = 'inline-block'

            window.addEventListener('click', function(event){
                if(event.target == modal){
                    modal.style.display = 'none'
                }
            })

          
        })
    })

    console.log(random());
    function random(){
        let x = Math.random();
        
        if(x<0.34){
            return 'rock'
        } else if(x<0.67){
            return 'paper'
        } else return 'scissors';
    }

    function winner(userChoice, compChoice){
        if(compChoice === userChoice){
            return 'Draw'
        } else{
            if(userChoice === 'rock' && compChoice === 'paper'){
                game.computer +=1
                return 'Comp Win'
            } else if(userChoice === 'rock' && compChoice === 'scissors'){
                game.player +=1
                return 'User Win'
            } else{
                if(userChoice === 'paper' && compChoice === 'scissors'){
                    game.computer +=1
                    return 'Comp Win'
                } else if(userChoice === 'paper' && compChoice === 'rock'){
                    game.player +=1
                    return 'User Win'
                } else {
                    if(userChoice === 'scissors' && compChoice === 'rock'){
                        game.computer +=1
                        return 'Comp Win'
                    } else {
                        game.player +=1
                        return 'User Win';
                }       }
            }
        }
    }

});

