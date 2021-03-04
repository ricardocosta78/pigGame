'use strict';

// RECOLHER ELEMENTOS 
let namePlayer1 = document.getElementById('name--0');
let namePlayer2 = document.getElementById('name--1');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceEl = document.querySelector('.dice');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');


// FUNCÃO PARA MUDAR JOGADOR

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent= 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

const newGame = function(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    diceEl.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    
    // PERGUNTAR NOMES
    let nome1 = prompt('Qual é o seu Nome?');
    let nome2 = prompt('Qual é o seu Nome?');
    // ATRIBUIR NOMES
    namePlayer1.textContent = nome1;
    namePlayer2.textContent = nome2;
}

let scores;
let currentScore;
let activePlayer;
let gamePlaying;

// EVENTO PARA JOGAR
btnRoll.addEventListener('click', function(){
    if(gamePlaying){
        // ESCOLHA ALEATÓRIA DO DADO 
        const diceRandom = Math.floor(Math.random()*6)+1;
        // MOSTRAR DADO
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${diceRandom}.png`;
        // JUNTAR VALOR DO DADO AO CURRENT SCORE
        if (diceRandom !== 1){
            currentScore += diceRandom;
            document.getElementById(`current--${activePlayer}`).textContent= currentScore;
        }else{
            // SE DADO 1 MUDAR DE JOGADOR
            switchPlayer();
        }   
    }
    
});

btnHold.addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];    
        if(scores[activePlayer] >= 100){
            gamePlaying = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else{
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click',function(){
    newGame();
})