let previous;
const keys = [];

document.addEventListener("keydown", function (event) {
    let key = event.keyCode;
    if (key === 32) {
        takeControl = false;
        directions = getDirections();
    }
    if (checkDirection(key)) {
        previous = key;
        keys.push(key);
        takeControl = true;
    }
});

function actOnKeys() {
    if (keys.length > 0) {
        switch (keys[0]) {
            case 37: //LEFT
                snake.direction(-1, 0);
                break;
            case 39: //RIGHT
                snake.direction(1, 0);
                break;
            case 38: //UP
                snake.direction(0, -1);
                break;
            case 40: //DOWN
                snake.direction(0, 1);
                break;
            default:
                break;
        }
        keys.shift();
    }
}

function checkDirection(key) {
    if (key === 32) {
        return false;
    }
    switch (previous) {
        case 37: //LEFT
            return key !== 39;
        case 39: //RIGHT
            return key !== 37;
        case 38: //UP
            return key !== 40;
        case 40: //DOWN
            return key !== 38;
        default:
            return true;
    }
}

function logPrevious(dirX, dirY) {
    if(dirX === -1 && dirY === 0) {
        previous = 37;
    }
    if(dirX === 1 && dirY === 0) {
        previous = 39;
    }
    if(dirX === 0 && dirY === -1) {
        previous = 38;
    }
    if(dirX === 0 && dirY === 1) {
        previous = 40;
    }
}