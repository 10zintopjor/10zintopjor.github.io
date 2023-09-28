
const squares = document.querySelectorAll(".square ")
const mole = document.querySelector(".mole")
const score = document.querySelector("#score")
const timeLeft = document.querySelector("#time-left")

/* let cur_time = 60

const checkResult = () =>{
    let i=0
}

squares.forEach((square)=>{
    square.addEventListener("click",checkResult)

})

function getRandomSquare(){
    let randomId = Math.floor(Math.random() * 9) + 1;
    console.log(randomId)
    const selectedSquare = document.getElementById(`${randomId}`)
    return selectedSquare
}


while(cur_time != 0){
    
} */

let result = 0
let hitPosition= null 
let totalTime = 60

function randomSquare(){
    squares.forEach((square)=>{
        square.classList.remove("mole")
    })
    randomSquare = squares[Math.floor(Math.random()*9)+1]
    randomSquare.classList.add("mole")
    hitPosition = randomSquare.id
}
 
squares.forEach((square)=>{
    square.addEventListener("mousedown",()=>{
        if (square.id == hitPosition){
            result++ 
            console.log(result)
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
  }
  
moveMole()


function countDown(){
    if (totalTime!=0){
        totalTime--
        timeLeft.textContent = totalTime
    }
}


let countDownTimerId = setInterval(countDown,1000)

