import { getinputDir } from "./input.js";

export const SnakeSpeed = 3;
let newSegments = 0;

const SnakeBody = [
    { x: 11, y: 11 }, // Head of the snake
];


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

export function getSnakeHead() {
    return SnakeBody[0]
}


function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return SnakeBody.some((block, index) => {
        // console.log(`ignoreHead: ${ignoreHead}, index: ${index}, block: ${JSON.stringify(block)}, position: ${JSON.stringify(position)}`);
        if (ignoreHead && index === 0) {
            return false;
        } else {
            return equalPositions(block, position);
        }
    });
}

export function snakeIntersection() {
    return onSnake(SnakeBody[0], { ignoreHead: true });
}

// Example usage:
console.log(snakeIntersection()); // Output will depend on the SnakeBody configuration