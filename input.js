



let inputDirections = { // by x and y coordinations we satisfy iwhich direction to go
    x: 0,
    y: 0
}


let prevKey = '';
window.addEventListener('keydown', e => {

    switch (e.key) {
        case 'ArrowUp': // conditions
            if (prevKey === "ArrowDown" || prevKey === "ArrowUp") break // filters
            inputDirections = { x: 0, y: -1 }
            console.log('up')
            break;
        case 'ArrowDown':
            if (prevKey === "ArrowDown" || prevKey === "ArrowUp") break
            console.log('down')
            inputDirections = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            if (prevKey === "ArrowLeft" || prevKey === "ArrowRight") break
            console.log('left')
            inputDirections = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            if (prevKey === "ArrowLeft" || prevKey === "ArrowRight") break
            console.log('right')
            inputDirections = { x: 1, y: 0 }
            break;
    }
    prevKey = e.key;
})

export function getinputDir() {
    return inputDirections
}