var newYear;
(function (newYear) {
    class FireworkNoAnimation {
        constructor(color, particles) {
            this.r = 1;
            this.color = color;
            this.particles = particles;
            this.x = 350;
            this.y = 50;
            this.r = 30;
        }
        draw() {
            let particleAngle = 6.283 / this.particles;
            let currentAngle = 0;
            for (let i = 0; i < this.particles; i++) {
                currentAngle = currentAngle += particleAngle;
                let ray = new Path2D();
                ray.moveTo(this.x, this.y);
                ray.lineTo(this.x + this.r * Math.cos(currentAngle), this.y + this.r * Math.sin(currentAngle));
                newYear.crc2.strokeStyle = this.color;
                newYear.crc2.lineWidth = 1;
                newYear.crc2.stroke(ray);
            }
        }
    }
    newYear.FireworkNoAnimation = FireworkNoAnimation;
})(newYear || (newYear = {}));
//# sourceMappingURL=fireworkNA.js.map