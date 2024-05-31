import { getinputDir } from "./input.js";

export const SnakeSpeed = 3;
let newSegments = 0;

const SnakeBody = [{ x: 11, y: 11 },
{ x: 12, y: 11 },
] // coordinates


function addSegments() {
    for (let i = 0; i < newSegments; i++) {

        // SnakeBody[SnakeBody.length] = {...SnakeBody[SnakeBody.length-1]}

        // similarly: to duplicate
        SnakeBody.push({ ...SnakeBody[SnakeBody.length - 1] })
    }
    newSegments = 0;
}

export function update() {
    addSegments()
    const inputDir = getinputDir()
    // it updates the state of the snake
    // console.log('update')
    for (let i = SnakeBody.length - 2; i >= 0; i--) { // shifting the snake // moving effect
        SnakeBody[i + 1] = { ...SnakeBody[i] }
        //  last element = secondlast element
    }
    // SnakeBody[0].x += 1;  // moving
    // SnakeBody[0].y += 0;
    SnakeBody[0].x += inputDir.x;  // moving
    SnakeBody[0].y += inputDir.y;
}

export function draw(gameBoard) {
    // it draws the snake on the screen
    // console.log('draw')
    SnakeBody.forEach(block => {
        const SnakeBlock = document.createElement('div')
        SnakeBlock.style.gridRowStart = block.y;
        SnakeBlock.style.gridColumnStart = block.x;
        SnakeBlock.classList.add('snake')
        gameBoard.appendChild(SnakeBlock)
    })
}


export function expandSnake(rate) {
    newSegments += rate
}

function equalPositions(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y
}


export function onSnake(position, { ignoreHead = false } = {}) {     
    return SnakeBody.some((block, index) => {
            if (ignoreHead && index === 0) {
                return false // to ignore the head by get head function
            }
            
                return equalPositions(block, position)
            
        


    })
}


export function getSnakeHead() {
    return SnakeBody[0]
}


///////////////// not working

// export function snakeIntersection() {
//     return onSnake(SnakeBody[0], { ignoreHead: true })
// }
