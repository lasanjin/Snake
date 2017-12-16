let snake;
let food;
let tick;

initGame();
run();

function run() {
    if (tick > interval) {
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

function initGame() {
    snake = new Snake(board.width / 2, board.height / 2);
    placeFood();
    tick = 0;
}

function draw() {
    drawBoard();
    drawFood(food.x, food.y);
    drawSnake(snake.x, snake.y);
}

function isGameOver() {
    for (let i = 1; i < snake.length - 1; i++) {
        let x = snake.tail[i].x;
        let y = snake.tail[i].y;
        if (isSnake(snake.x, snake.y, x, y)) {
            return true;
        }
    }
    return false;
}

function isSnake(newX, newY, x, y) {
    return (newX === x && newY === y);
}

function isOutOfBounds() {
    return (snake.x < 0 || snake.x >= board.width
        || snake.y < 0 || snake.y >= board.height);
}

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
    food = {
        x: randomPos(),
        y: randomPos()
    }
}

function randomPos() {
    return Math.floor((Math.random() * board.width));
}