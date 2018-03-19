/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer,gamePlaying;
var lastDice;

init();



//DOM manipulation
//document.querySelector('#current-' + activePlayer).textContent = dice;
//To change htmls as well below code
//document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>';


document.querySelector('.btn-roll').addEventListener('click',function (){
         
        if(gamePlaying){    
    
        //1. roll random number.Dice
        var dice1 = Math.floor(Math.random() * 6) +1;
        var dice2 = Math.floor(Math.random() * 6) +1;
            

        //2. Display  the result
            document.getElementById('dice1').style.display = 'block';
            document.getElementById('dice2').style.display = 'block';
            document.getElementById('dice1').src = 'dice-' + dice1 +'.png';
            document.getElementById('dice2').src = 'dice-' + dice2 +'.png';
       
            
        
             //3.Udate the round score if the rolled number is  not 1
        
            //add score
        if (dice1 !== 1 && dice2 !== 1){
            roundScore += (dice1 + dice2);
            console.log(dice1);
            console.log(dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else{
           nextPlayer();
            
        } 
        }
        
       // 1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
      /*  if(dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;
             document.querySelector('#current-' + activePlayer).textContent = '0' ;
             document.querySelector('#score-' + activePlayer).textContent = '0';
            
        }
            //3.Udate the round score if the rolled number is  not 1
        
            //add score
        else if (dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else{
           nextPlayer();
            
        } 
            lastDice = dice;
        }*/
           });




    document.querySelector('.btn-hold').addEventListener('click', function(){
        
        if(gamePlaying){
             //Add current score to global score
        scores[activePlayer] += roundScore;
        
        //Update in UI for each player
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
            
        var input = document.querySelector('.final-score').value;
          
            
            //all values of 0, null,undefined or "" are COERCED to FALSE, anything else is true
            if(input){
                var winningScore = input;   
            }else
                winningScore = 100
        
        //Check if the player wont the game
        if(scores[activePlayer] >= winningScore){
            document.getElementById('name-'+ activePlayer).textContent = 'Winner!';
           document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
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
            
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
    }


     //HOLD button functionality
        document.querySelector('.btn-new').addEventListener('click', init);

    function init(){
            scores = [0,0]
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;
        
            
            //to hide the dice
           document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';

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











