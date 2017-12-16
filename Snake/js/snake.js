function Snake(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.length = 1;
    this.tail = [new vector(this.x, this.y)];

    this.direction = function (x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    };

    this.update = function () {
        if (this.length === this.tail.length) {
            for (let i = 0; i < this.length; i++) {
                this.tail[i] = this.tail[i + 1];
            }
            this.tail.pop();
        }
        this.tail.push(new vector(this.x, this.y));

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    };

    this.eatFood = function (x, y) {
        this.length++;
        this.tail.push(new vector(x, y));
    };
}

const vector = function (x, y) {
    this.x = x;
    this.y = y;
};