var newYear;
(function (newYear) {
    class Firework {
        constructor(color, particles, x, y) {
            this.x = x;
            this.y = y;
            this.r = 1;
            this.rx = 0;
            this.color = color;
            this.particles = particles;
            this.type = "line";
        }
        draw() {
            //console.log("drawing");
            let particleAngle = 6.283 / this.particles;
            let currentAngle = 0;
            for (let i = 0; i < this.particles; i++) {
                currentAngle = currentAngle += particleAngle;
                let ray = new Path2D();
                ray.moveTo(this.x, this.y);
                ray.lineTo(this.x + this.r * Math.cos(currentAngle), this.y + this.r * Math.sin(currentAngle));
                newYear.crc.strokeStyle = this.color;
                newYear.crc.lineWidth = 1;
                newYear.crc.stroke(ray);
            }
            for (let i = 0; i < 20; i++) {
                currentAngle = currentAngle += particleAngle;
                let rayDisapperas = new Path2D();
                rayDisapperas.moveTo(this.x, this.y);
                rayDisapperas.lineTo(this.x + this.rx * Math.cos(currentAngle), this.y + this.rx * Math.sin(currentAngle));
                newYear.crc.strokeStyle = "rgb(51, 35, 86)";
                newYear.crc.lineWidth = 2;
                newYear.crc.stroke(rayDisapperas);
            }
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.r = this.r += 1;
            if (this.r >= 30) {
                this.r = 0;
            }
            if (this.r >= 8 || this.rx >= 22) {
                this.rx = this.rx += 1;
                if (this.rx >= 30) {
                    this.rx = 0;
                }
            }
        }
    }
    newYear.Firework = Firework;
})(newYear || (newYear = {}));
//# sourceMappingURL=firework.js.map