var newYear;
(function (newYear) {
    class FireworkCircleNA {
        constructor(color, particles) {
            this.r = 25;
            this.color = color;
            this.particles = particles;
            this.x = 350;
            this.y = 50;
            this.r = 30;
        }
        draw() {
            let dashLength = 0.5 * this.particles;
            let dashArray = [5, dashLength];
            let ray = new Path2D();
            ray.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            newYear.crc2.setLineDash([dashLength, 10]);
            newYear.crc2.strokeStyle = this.color;
            newYear.crc2.lineWidth = 2;
            newYear.crc2.stroke(ray);
        }
    }
    newYear.FireworkCircleNA = FireworkCircleNA;
})(newYear || (newYear = {}));
//# sourceMappingURL=circleNA.js.map