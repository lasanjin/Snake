const canvas = document.getElementById("board");
const context = canvas.getContext("2d");

const interval = 0.10; //seconds
const fps = 1 / 60; //frames per second

const offset = 1; //set to 0 to get rid of frame
const offsetBoard = 20; ////set to 0 when offset is 0
const scale = 20; //size of box
const board = {
    height: canvas.height / scale,
    width: canvas.width / scale
};