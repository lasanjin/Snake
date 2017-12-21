const canvas = document.getElementById("board");
const context = canvas.getContext("2d");

const interval = 0.10;
const fps = 1 / 60;

const scale = 20;
const board = {
    height: canvas.height / scale,
    width: canvas.width / scale
};

const OBSTACLE = null;