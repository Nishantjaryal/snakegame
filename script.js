import { update as updateSnake, draw as DrawSnake, SnakeSpeed, getSnakeHead, snakeIntersection } from "./snake.js"
const gameBoard = document.getElementById('board')

import { update as updateFood, draw as DrawFood } from "./food.js";
import { outSideGrid } from "./grid.js";




let lastRenderTime = 0
let gameOver = false;

const checkDeath = ()=>{
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
    if (gameOver){
        return 
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

