function drawBoard() {
    for (let row = 0; row < board.height; row++) {
        for (let col = 0; col < board.width; col++) {
            fillStyle("#000");
            fillRect(col, row, 0, 0);
        }
    }
}

function updateScore() {
    fillStyle("#828282");
    context.font = "16px Arial";
    context.fillText("" + (snake.length - 1), 10, canvas.height - 12 );
}

function drawSnake() {
    for (let i = 0; i < snake.tail.length; i++) {
        if (i === snake.tail.length - 1) {
            fillStyle("#d1d1d1");
        } else {
            fillStyle("#0bac0a");
        }
        fillRect(snake.tail[i].x, snake.tail[i].y, 1, -2);
        fillStyle("#000000");
        fillRect(snake.tail[i].x, snake.tail[i].y, 2, -4);
    }
}

function drawFood(x, y) {
    fillStyle("#e3220b");
    fillRect(x, y, 1, -2);
    fillStyle("#000000");
    fillRect(x, y, 2, -4);
}

function fillRect(x, y, dx, dy) {
    context.fillRect(
        (x * scale) + dx,
        (y * scale) + dx,
        scale + dy,
        scale + dy);
}

function fillStyle(color) {
    context.fillStyle = color;
}
