function drawFrame() {
    for (let row = 0; row < board.height; row++) {
        for (let col = 0; col < board.width; col++) {
            fillStyle("#000000");
            if (col === 0 || col === board.width - 1) {
                fillRect(col, row, 2, -4);
                fillStyle("#ffffff");
                fillRect(col, row, 3, -6);
            }
            if (row === 0 || row === board.height - 1) {
                fillRect(col, row, 2, -4);
                fillStyle("#ffffff");
                fillRect(col, row, 3, -6);
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

function updateScore() {
    fillStyle("#828282");
    context.font = "16px Arial";
    context.fillText("" + (snake.length - 1), 25, canvas.height - 27);
}

function drawSnake() {
    for (let i = 0; i < snake.tail.length; i++) {
        if (i === snake.tail.length - 1) {
            fillStyle("#d1d1d1");
        } else{
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
