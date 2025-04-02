const choice_btns=document.querySelectorAll('.choices button')
const userDisplay=document.getElementById('userChoice')
const computerDisplay=document.getElementById('computerChoice')
const resultDisplay=document.getElementById('result')
//const restartbtn=document.getElementById('restart')

const choices=['rock','paper','scissors']

function evaluateResult(choice){
    userDisplay.textContent=`UserChoice: ${choice.toUpperCase()}`;
    const computerChoice=choices[Math.floor(Math.random()*3)]
    computerDisplay.textContent=`ComputerChoice: ${computerChoice.toUpperCase()}`
    if(computerChoice===choice){
        resultDisplay.textContent='IT IS A TIE'
    }
    else if((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')){
        resultDisplay.textContent='USER WIN'
    }
    else{
        resultDisplay.textContent='COMPUTER WIN'
    }
}

choice_btns.forEach(btn=>{
    btn.addEventListener('click',(event)=>{
        evaluateResult(btn.value)
    })
})


