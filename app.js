const squares=document.querySelectorAll('.square ');
const mole=document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score=document.querySelector('#score')
const startGame=document.querySelector('#startBtn')

let result=0;
let hitPosition;
let currentTime=60;
let timerId;
let moleTimer;

function randomSquare(){
  squares.forEach((square)=>{
    square.classList.remove('mole')
  })

  let randomSquare=squares[Math.floor(Math.random()*9)];
  randomSquare.classList.add('mole');

   hitPosition=randomSquare.id; 
}

squares.forEach((square)=>{
  square.addEventListener('mousedown',()=>{
    if(square.id==hitPosition){
      result++;
      console.log(result);
      score.textContent=result;
      hitPosition=null;
    }
  })
})

startGame.addEventListener('click',()=>{
  startGame.disabled=true;
  moveMole();
  timerId=setInterval(countDown,1000); 
 
});

function moveMole(){
  
   moleTimer=setInterval(randomSquare,500);

  setTimeout(()=>{
    clearInterval(moleTimer);
  },60000);
}



function countDown(){
  currentTime--;
  timeLeft.textContent=currentTime;

  if(currentTime===0){
    clearInterval(timerId);
    clearInterval(moleTimer); 

    setTimeout(()=>{
      alert(`GAME OVER ,  YOUR SCORE:${result}`);
    },1000);
  }

}