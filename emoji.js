const emojiDetails=[
    {desc:'Smiling with sunglasses',emoji:'😎'},
    {desc:'Melting Face',emoji:'🫠'},
    {desc:'Skull',emoji:'💀'},
    {desc:'Loudly Crying Face',emoji:'😭'},
    {desc:'Vampire',emoji:'🧛🏼'},
    {desc:'Mouth',emoji:'👄'},
    {desc:'Bomb',emoji:'💣'},
    {desc:'Fire Extinguisher',emoji:'🧯'}
];

const descriptionDiv=document.getElementById('description');
const guessInputText=document.getElementById('guess-input');
const result=document.getElementById('result');
const scoreDiv=document.getElementById('score');
const timer=document.getElementById('timer');
const restartButton=document.getElementById('restart-button');

let currentEmojiIndex=0;
let score=0;
let seconds=31;
let time;
function displayEmoji(){
    descriptionDiv.textContent=emojiDetails[currentEmojiIndex].emoji;
}

function checkGuess(){
    const guess=guessInputText.value.trim().toLowerCase();
    const correctEmoji=emojiDetails[currentEmojiIndex].desc.trim().toLowerCase();
    if(guess==correctEmoji){
        result.textContent='Correct!';
        score++;
    }else{
        result.textContent='Wrong!';
    }
    console.log(score);
    scoreDiv.textContent=`Score: ${score}`;
    guessInputText.value='';
    guessInputText.focus();
    nextEmoji();
}

function nextEmoji(){
    currentEmojiIndex++;
    setInterval(() => {
        result.textContent='';
    }, 2000);
    if(currentEmojiIndex===emojiDetails.length){
        score=0;
        currentEmojiIndex=0;
    }
    displayEmoji();
}

function startTimer(){
    time=setInterval(() => {
        seconds--;
        timer.textContent=`Time: ${seconds}s`;
        if(seconds<=0){
            endGame();
        }
    }, 1000);
}

function endGame(){
    clearInterval(time);
    guessInputText.disabled=true;
    timer.textContent='';
}
document.getElementById('guess-input').addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        checkGuess();
    }
});

document.addEventListener('DOMContentLoaded',()=>{
    displayEmoji();
    startTimer();
})