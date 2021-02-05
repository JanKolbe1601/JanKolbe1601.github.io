var newYear;
(function (newYear) {
    class FireworkTriangle extends newYear.Firework {
        constructor(color, particles, x, y) {
            super(color, particles, x, y);
            this.type = "arc";
        }
        draw() {
            let dashLength = 0.5 * this.particles;
            let ray = new Path2D();
            ray.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            newYear.crc.setLineDash([dashLength, 10]);
            newYear.crc.strokeStyle = this.color;
            newYear.crc.lineWidth = 2;
            newYear.crc.stroke(ray);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.r = this.r += 0.5;
            if (this.r >= 30) {
                this.r = 0;
            }
        }
    }
    newYear.FireworkTriangle = FireworkTriangle;
})(newYear || (newYear = {}));
//# sourceMappingURL=fireworkTriangle.js.map