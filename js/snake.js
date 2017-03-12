function Snake(x, y, snakeColor) {
    this.position = new p5.Vector(parseInt(x), parseInt(y));
    this.direction = new p5.Vector(1, 0);
    this.dead = false;
    this.tail = [];
    this.tail.push(this.position);
    this.size = 2;

    this.update = function() {
        // Update current position
        if (!this.dead) {
            this.position = p5.Vector.add(this.position, this.direction);

            this.tail.push(this.position);

            if (this.position.x < 0 || this.position.x > width / GRID_SIZE - 1 || this.position.y < 0 || this.position.y > height / GRID_SIZE - 1) {
                this.dead = true;
            }

            while (this.size + 1 < this.tail.length) {
                this.tail.shift();
            }
        }
    }

    this.grow = function() {
        this.size++;
    }

    this.eats = function(apple) {
        return (this.position.equals(apple.position));
    }

    this.show = function() {
        if (!this.dead) {
            fill(snakeColor);
            for (var i = 0; i < this.tail.length - 1; ++i) {
                rect(this.tail[i].x * GRID_SIZE, this.tail[i].y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            }
        } else {
            fill(120);
            for (var i = 0; i < this.tail.length; ++i) {
                rect(this.tail[i].x * GRID_SIZE, this.tail[i].y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
            }
        }
    }

    this.face = function(x, y) {
        this.direction.set(x, y);
    }
    this.checkStatus = function() {
        if (!this.dead) {
            for (var i = 0; i < this.tail.length - 1; ++i) {
                if (this.position.x == this.tail[i].x && this.position.y == this.tail[i].y) {
                    this.dead = true;
                }
            }
        }
    }
}
