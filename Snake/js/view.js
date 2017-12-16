function drawBoard() {
    for (let row = 0; row < board.height; row++) {
        for (let col = 0; col < board.width; col++) {
            context.fillStyle = "#000";
            fillRect(col, row, 0);
        }
    }
    context.fillStyle = "#717171";
    context.font = "15px Arial";
    context.fillText("" + (snake.length - 1), 5, canvas.height - 10);
}

function drawSnake() {
    context.fillStyle = "#0bac0a";
    for (let i = 0; i < snake.length; i++) {
        if(i === snake.length - 1) {
            context.fillStyle = "#d1d1d1";
        }
        fillRect(snake.tail[i].x, snake.tail[i].y, 1.5);
    }
}

function drawFood(x, y) {
    context.fillStyle = "#bf1020";
    fillRect(x, y, 1.5);
    context.fillStyle = "#cf1f0a";
    fillRect(x, y, 6);
}

function fillRect(x, y, dx) {
    context.fillRect(
        (x * scale) + dx,
        (y * scale) + dx,
        scale - (2 * dx),
        scale - (2 * dx));
}
