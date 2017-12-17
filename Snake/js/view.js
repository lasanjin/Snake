function drawFrame() {
    fillStyle("#3b3b3b");
    for (let row = 0; row < board.height; row++) {
        for (let col = 0; col < board.width; col++) {
            if (col === 0 || col === board.width - 1) {
                fillRect(col, row, 1, -2);
            }
            if (row === 0 || row === board.height - 1) {
                fillRect(col, row, 1, -2);
            }
        }
    }
}

function drawBoard() {
    for (let row = 0; row < board.height - (2 * offset); row++) {
        for (let col = 0; col < board.width - (2 * offset); col++) {
            fillStyle("#000");
            fillRect(col, row, offsetBoard, 0);
        }
    }
}

function drawScore() {

}

function updateScore() {
    fillStyle("#828282");
    context.font = "16px Arial";
    context.fillText("" + (snake.length - 1), 25, canvas.height - 27);
}

function drawSnake() {
    fillStyle("#0bac0a");
    for (let i = 0; i < snake.length; i++) {
        if (i === snake.length - 1) {
            fillStyle("#d1d1d1");
        }
        fillRect(snake.tail[i].x, snake.tail[i].y, 1, -2);
    }
}

function drawFood(x, y) {
    fillStyle("#bf1020");
    fillRect(x, y, 1, -2);
    fillStyle("#e3220b");
    fillRect(x, y, 6, -12);
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
