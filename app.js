/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer,gamePlaying,previousScore;

init();



//DOM manipulation
//document.querySelector('#current-' + activePlayer).textContent = dice;
//To change htmls as well below code
//document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>';


document.querySelector('.btn-roll').addEventListener('click',function (){
         
        if(gamePlaying){    
    
        //1. roll random number.Dice
        var dice = Math.floor(Math.random() * 6) +1;
            

        //2. Display  the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src  = 'dice-' + dice +'.png'

        //3.Udate the round score if the rolled number is  not 1
        
            //add score
        if (dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else{
           nextPlayer();
            
        } 
        }
           });




    document.querySelector('.btn-hold').addEventListener('click', function(){
        
        if(gamePlaying){
             //Add current score to global score
        scores[activePlayer] += roundScore;
        
        //Update in UI for each player
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
        
        //Check if the player wont the game
        if(scores[activePlayer] >= 20){
            document.getElementById('name-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display ='none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //next player
        nextPlayer();
        } 
            
        }
        
       
    });

    function nextPlayer(){
        
         //next player
            
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
             document.getElementById('current-0').textContent = '0';
             document.getElementById('current-1').textContent = '0';
            
            //active player toggle
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            /*document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');*/
            
            document.querySelector('.dice').style.display = 'none';
    }


     //HOLD button functionality
        document.querySelector('.btn-new').addEventListener('click', init);

    function init(){
            scores = [0,0]
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;
        
            
            //to hide the dice
            document.querySelector('.dice').style.display ='none';

            //to keeo the score to 0
            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
        
            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';
        
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            
}











