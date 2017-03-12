function Apple() {
    this.position = randomPosition();

    this.show = function() {
    	fill("red");
        rect(this.position.x * GRID_SIZE, this.position.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    }
}