let snake;
let food;
let tick;
let directions;
let takeControl;

initGame();
run();

function initGame() {
    snake = new Snake(board.width / 2, board.height / 2);
    placeFood();
    directions = getDirections();
    takeControl = false;
    tick = 0;
}

function run() {
    if (tick > interval) {
        actOnKeys();
        if (!takeControl) {
            translateDirection();
        }
        snake.update();
        draw();
        if (isGameOver()) {
            initGame();
        }
        if (isOutOfBounds()) {
            goThroughWall();
        }
        if (isFood()) {
            snake.eatFood(food.x, food.y);
            placeFood();
            directions = getDirections();
        }
        tick = 0;
    }
    tick += fps;
    requestAnimationFrame(run);
}

function translateDirection() {
    if (directions.length > 0) {
        let direction = directions[0];
        let dirX = direction.x - snake.x;
        let dirY = direction.y - snake.y;
        logPrevious(dirX, dirY);
        snake.direction(dirX, dirY);
        directions.shift();
    } else {
        directions = getDirections();
    }
}

function draw() {
    drawBoard();
    updateScore();
    drawFood(food.x, food.y);
    drawSnake(snake.x, snake.y);
}

function isGameOver() {
    for (let i = 1; i < snake.tail.length; i++) {
        if (snake.x === snake.tail[i].x
            && snake.y === snake.tail[i].y) {
            return true;
        }
    }
    return false;
}

function isOutOfBounds() {
    return (snake.x < 0 || snake.x >= board.width
        || snake.y < 0 || snake.y >= board.height);
}

/**
 * Border is shifted by 1 in order to draw frame.
 */
function goThroughWall() {
    if (snake.x < 0) {
        snake.x = board.width - 1;
    }
    if (snake.x >= board.width) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = board.height - 1;
    }
    if (snake.y >= board.height) {
        snake.y = 0;
    }
}

function isFood() {
    return (snake.x === food.x && snake.y === food.y);
}

function placeFood() {
    do {
        food = {
            x: randomPosition(),
            y: randomPosition()
        }
    }
    while (!isEmpty(food.x, food.y));
}

function isEmpty(x, y) {
    for (let i = 0; i < snake.tail.length; i++) {
        if (snake.tail[i].x === x
            && snake.tail[i].y === y) {
            return false;
        }
    }
    return true;
}

function randomPosition() {
    return Math.floor((Math.random() * board.width));
}