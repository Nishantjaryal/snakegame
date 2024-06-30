import { update as updateSnake, draw as DrawSnake, getSnakeHead, snakeIntersection } from "./snake.js"
const gameBoard = document.getElementById('board')

let SnakeSpeed = 3;
import { update as updateFood, draw as DrawFood } from "./food.js";
import { outSideGrid } from "./grid.js";

const load_template = document.getElementById("loader")
const start_btn = document.getElementById("start")
const start_btn2 = document.getElementById("start2")
const setting_main = document.getElementById("Advance_setting")
const setting_Adv = document.getElementById("base_setting")
const hide_main = document.querySelector(".hide_main")
const hide_adv = document.querySelector(".hide_adv")
const restart = document.getElementById("restart")

let lastRenderTime = 0
let gameOver = false;

const checkDeath = () => {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}

function update() {
    // it updates the state of the snake
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '' // it removes the previous section

    // it draws the snake on the screen
    DrawSnake(gameBoard)

    // draw food
    DrawFood(gameBoard)
}

function main(currTime) {            // game loop function
    if (gameOver) {
        restart.style.display = "flex"
        return
    }

    let speed = document.getElementById("speed").value
    if (speed) {
        SnakeSpeed = speed;
    }

    window.requestAnimationFrame(main) // repeating itself // behaviouring as counter
    const secSinceLastRender = (currTime - lastRenderTime) / 1000; // delay within each frame
    if (secSinceLastRender < 1 / SnakeSpeed) return // to allow required no. of counts per seconds


    // here all the code will be run after a calculated delay 


    lastRenderTime = currTime // getting the latest or the last rendered request 

    // console.log('Render') // check
    // console.log(currTime) // getting the latest or the last rendered request 
    // console.log(secSinceLastRender) // it will calculate the delay in seconds

    update();
    draw();
}

window.requestAnimationFrame(main) // requesting window that when to render next frame


start_btn.addEventListener("click", () => {
    load_template.style.top = "-100%"
})
start_btn2.addEventListener("click", () => {
    load_template.style.top = "-100%"
})
setting_main.addEventListener("click", () => {
    hide_adv.style.display = "block"
    hide_main.style.display = "none"
})
setting_Adv.addEventListener("click", () => {
    hide_adv.style.display = "none"
    hide_main.style.display = "block"
})


