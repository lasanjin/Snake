let world = [];
let openSet = [];
let closedSet = [];
let path = [];
let origin;
let destination;

function getDirections() {
    reset();
    createWorld();
    setWorld();

    setOrigin(snake.x, snake.y);
    setDestination(food.x, food.y);
    openSet.push(origin);

    addNeighbors();

    search();
    return path;
}

function reset() {
    world = [];
    openSet = [];
    closedSet = [];
    path = [];
}

function createWorld() {
    for (let row = 0; row < board.height; row++) {
        world[row] = [];
        for (let col = 0; col < board.width; col++) {
            world[row][col] = null;
        }
    }
}

function setWorld() {
    for (let row = 0; row < world.length; row++) {
        for (let col = 0; col < world[row].length; col++) {
            if (isEmpty(col, row)) {
                world[row][col] = new Position(col, row);
            }
        }
    }
}

function setOrigin(x, y) {
    world[y][x] = new Position(x, y);
    origin = world[y][x];
}

function setDestination(x, y) {
    destination = world[y][x];
}

function addNeighbors() {
    for (let row = 0; row < world.length; row++) {
        for (let col = 0; col < world[row].length; col++) {
            let position = world[row][col];
            if (position !== OBSTACLE) {
                world[row][col].addNeighbors();
            }
        }
    }
}

function search() {
    while (openSet.length > 0) {
        let min = 0;

        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[min].f) {
                min = i;
            }
        }

        let current = openSet[min];

        if (current.x === destination.x
            && current.y === destination.y) {

            findPath(current);
        }

        let index = openSet.indexOf(current);
        openSet.splice(index, 1);
        closedSet.push(current);

        evaluateNeighbours(current);
    }
}

function evaluateNeighbours(current) {
    let neighbours = current.neighbours;

    for (let i = 0; i < neighbours.length; i++) {
        let neighbor = neighbours[i];

        evaluateNeighbour(current, neighbor)
    }
}

function evaluateNeighbour(current, neighbour) {
    if (!closedSet.includes(neighbour)) {
        let cost = current.g + 1;
        neighbour.previous = current;

        if (openSet.includes(neighbour)) {
            if (cost < neighbour.g) {
                neighbour.g = cost;
            }
        } else {
            neighbour.g = cost;
            openSet.push(neighbour);
        }
    }
    neighbour.h = calcHeuristic(neighbour, destination);
    neighbour.f = neighbour.g + neighbour.h;
}


function findPath(current) {
    let tmp = current;
    while (tmp.previous !== null) {
        path.push(tmp);
        tmp = tmp.previous;
    }
    path.reverse();
}

function calcHeuristic(position, destination) {
    return calcEucledianDistance(
        position.x, position.y, destination.x, destination.y);
}

function calcEucledianDistance(x, y, x1, y1) {
    return Math.floor(
        Math.sqrt(
            (Math.pow(x - x1, 2) +
                Math.pow(y - y1, 2)) * 10));
}

function printPath() {
    let string = "";
    for (let i = 0; i < path.length; i++) {
        if (i === path.length - 1) {
            string += " (" + path[i].x + "," + path[i].y + ") ";
        } else {
            string += " (" + path[i].x + "," + path[i].y + ") " + "->";
        }
    }
    console.log(string);
}