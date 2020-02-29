const box = document.querySelector('.box');
const scoreBox = document.querySelector('.score');
let score = 0;
let timer = document.querySelector(".timer");
let timerClock = setUpTimer();

box.addEventListener('click',()=>{
    const mainContainerWidth  = document.querySelector('.main-container').offsetWidth;
    const mainContainerHeight = document.querySelector('.main-container').offsetHeight;
    const boxHeight = box.offsetHeight;
    const boxWidth = box.offsetWidth;
    let position = [Math.floor(Math.random()*(mainContainerWidth-boxWidth)),Math.floor(Math.random()*(mainContainerHeight-boxHeight))];
    score+=1
    scoreBox.innerText = `Score : ${score}`;
    box.style.right =`-${position[0]}px`;
    box.style.top = `${position[1]}px`;
    timerClock = setUpTimer()
})

function setUpTimer(){
    if (timerClock !== null) clearTimeout(timerClock);
    if(score < 23) {
        document.querySelector(".timer").innerText = 25-(score);
        return setTimeout(() => { alert("Game over!")}, 25000-(score*1000))
    } else {
        document.querySelector(".timer").innerText = 2;
        return setTimeout(() => { alert("Game over!")}, 2000)
    }
}

setInterval(() => {
    timer.innerText = Number(timer.innerText) - 1 ;
}, 1000)