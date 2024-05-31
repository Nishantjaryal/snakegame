import { onSnake, expandSnake } from "./snake.js";

let food = {
    x:2,
    y:2
}
const SnakeExpansionRate = 1;

const Generate_RandomAddress = () => { // random address generator
    return Math.floor((Math.random()*18)+2) // excemting border boxes (1 & 21)
}

const generateFood = () =>{
    while (food == null || onSnake(food)) {
        food =  {
            x: Generate_RandomAddress(),
            y: Generate_RandomAddress()
        }
    }
}

export function update() {
    if (onSnake(food)) {
        generateFood()
        expandSnake(SnakeExpansionRate)
    }
}

export function draw(gameBoard) {
        const FoodBlock = document.createElement('div')
        FoodBlock.style.gridRowStart = food.y;
        FoodBlock.style.gridColumnStart = food.x;
        FoodBlock.classList.add('food')
        gameBoard.appendChild(FoodBlock)

}