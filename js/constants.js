const canvas = document.getElementById("board");
const context = canvas.getContext("2d");

const interval = 0.10; //seconds
const fps = 1 / 60; //frames per second

const scale = 30; //size of box
const board = {
    height: canvas.height / scale,
    width: canvas.width / scale
};