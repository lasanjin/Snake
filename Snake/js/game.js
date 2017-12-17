let snake;
let food;
let tick;

initGame();
run();

function initGame() {
    snake = new Snake(board.width / 2, board.height / 2);
    drawFrame();
    placeFood();
    tick = 0;
}

function run() {
    if (tick > interval) {
        actOnKeys();

        if (isGameOver()) {
            initGame();
        }
        if (isOutOfBounds()) {
            goThroughWall();
        }
        if (isFood()) {
            snake.eatFood(food.x, food.y);
            placeFood();
        }
        snake.update();
        draw();
        tick = 0;
    }
    tick += fps;
    requestAnimationFrame(run);
}

function draw() {
    drawBoard();
    updateScore();
    drawFood(food.x, food.y);
    drawSnake(snake.x, snake.y);
}

function isGameOver() {
    for (let i = 1; i < snake.length - 1; i++) {
        if (isSnake(snake.x, snake.y, snake.tail[i].x, snake.tail[i].y)) {
            return true;
        }
    }
    return false;
}

function isSnake(newX, newY, x, y) {
    return (newX === x && newY === y);
}

function isOutOfBounds() {
    return (snake.x < offset || snake.x >= board.width - offset
        || snake.y < offset || snake.y >= board.height - offset);
}

/**
 * Border is shifted by 1 in order to draw frame.
 */
function goThroughWall() {
    if (snake.x < offset) {
        snake.x = board.width - 1 - offset;
    }
    if (snake.x >= board.width - offset) {
        snake.x = offset;
    }
    if (snake.y < offset) {
        snake.y = board.height - 1 - offset;
    }
    if (snake.y >= board.height - offset) {
        snake.y = offset;
    }
}

function isFood() {
    return (snake.x === food.x && snake.y === food.y);
}

function placeFood() {
    do {
        food = {
            x: randomPos(),
            y: randomPos()
        }
    }
    while (!isEmpty(food.x, food.y));
}

function isEmpty(x, y) {
    for (let i = 0; i < snake.length; i++) {
        if (isSnake(snake.tail[i].x, snake.tail[i].y, x, y)) {
            return false;
        }
    }
    return true;
}

function randomPos() {
    return Math.floor((Math.random() * (board.width - (2 * offset))) + offset);
}