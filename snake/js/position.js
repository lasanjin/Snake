function Position(x, y) {
    this.neighbours = [];
    this.previous = null;
    this.x = x;
    this.y = y;
    this.g = 0;
    this.f = 0;
    this.h = 0;

    this.addNeighbors = function () {
        let width = world.length - 1;
        let height = world[0].length - 1;

        if (this.y > 0) {
            let up = world[this.y - 1][this.x];
            if (up !== OBSTACLE) {
                this.neighbours.push(up);
            }
        }
        if (this.x > 0) {
            let left = world[this.y][this.x - 1];
            if (left !== OBSTACLE) {
                this.neighbours.push(left);
            }
        }
        if (this.y < height) {
            let down = world[this.y + 1][this.x];
            if (down !== OBSTACLE) {
                this.neighbours.push(down);
            }
        }
        if (this.x < width) {
            let right = world[this.y][this.x + 1];
            if (right !== OBSTACLE) {
                this.neighbours.push(right);
            }
        }
    };
}