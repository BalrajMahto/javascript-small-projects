const value=parseInt(Math.random()*100+1);
console.log(value)
const submitValue=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const slot=document.querySelector('.guesses');
const remain=document.querySelector('.lastResult');
const para=document.querySelector('.lesser');
const startover=document.querySelector('.result');

const p=document.createElement('p');

let preGuess=[]
let newGuess=1
let playGame=true;

if(playGame){
    submitValue.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        
        validate(guess)
    })
}
function validate(guess){
    if(isNaN(guess)){
        alert('please enter a valid number.')

    }else if(guess<1){
        alert('please enter a number greater than 0')
    }else if(guess>100){
        alert('please enter a number less than 100')
    }
    else{
        preGuess.push(guess)
        if(newGuess === 11){
            displayGuess(guess)
            displayMessage(`game over random number was ${value}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
        

    }

}
function checkGuess(guess){
    if(guess === value){
        displayMessage(`you guessed it absolutely correct .`)
        endGame()
    }
    else if(guess < value){
        displayMessage(`number is too low`)
    }
    else if(guess > value){
        displayMessage(`number is too high`)
    }

}
function displayGuess(guess){
    userInput.value=''
    slot.innerHTML+=`${guess} `
    newGuess++;
    remain.innerHTML= `${11 - newGuess}`;

}
function displayMessage(message){
    para.innerHTML=`<h2>${message}</h2>`

}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start a new game</h2>`;
    startover.appendChild(p)
    playGame=false;

    newGame();


}
function newGame(){
    const newwg= document.querySelector('#newGame');
    newwg.addEventListener('click',function(e){
        Randomvalue=parseInt(Math.random()*100+1);
        preGuess=[];
        newGuess=1;
        slot.innerHTML=''
        remain.innerHTML= `${11 - newGuess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        
        playGame=true;
    })

}