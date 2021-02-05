namespace newYear {

    export class FireworkNoAnimation   {
        x: number;
        y: number;
        r: number;
        color: string;
        particles: number;

        constructor(color: string, particles: number) {
            this.r = 1;
            this.color = color
            this.particles = particles
            this.x = 350;
            this.y = 50;
            this.r = 30;
        }

        draw(): void {
            let particleAngle: number = 6.283 / this.particles
            let currentAngle: number = 0;
            for (let i: number = 0; i < this.particles; i++){
            currentAngle = currentAngle += particleAngle
            let ray: Path2D = new Path2D();
            ray.moveTo(this.x, this.y)
            ray.lineTo(this.x + this.r * Math.cos(currentAngle), this.y + this.r * Math.sin(currentAngle))
            crc2.strokeStyle = this.color
            crc2.lineWidth = 1;
            crc2.stroke(ray);
            }
        }
    }
}