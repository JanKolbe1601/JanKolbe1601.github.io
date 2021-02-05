  
namespace newYear {

    export class Firework  {
        x: number;
        y: number;
        r: number;
        rx: number;
        color: string;
        particles: number;
        type: string;

        constructor(color: string, particles: number, x: number, y: number) {
            this.x = x;
            this.y = y;
            this.r = 1;
            this.rx = 0;
            this.color = color;
            this.particles = particles;
            this.type = "line";
        }

        draw(): void {
            //console.log("drawing");
            let particleAngle: number = 6.283 / this.particles
            let currentAngle: number = 0;
            for (let i: number = 0; i < this.particles; i++){
            currentAngle = currentAngle += particleAngle
            let ray: Path2D = new Path2D();
            ray.moveTo(this.x, this.y)
            ray.lineTo(this.x + this.r * Math.cos(currentAngle), this.y + this.r * Math.sin(currentAngle))
            crc.strokeStyle = this.color
            crc.lineWidth = 1;
            crc.stroke(ray);
            }
            for (let i: number = 0; i < 20; i++){
            currentAngle = currentAngle += particleAngle
            let rayDisapperas: Path2D = new Path2D();
            rayDisapperas.moveTo(this.x, this.y)
            rayDisapperas.lineTo(this.x + this.rx * Math.cos(currentAngle), this.y + this.rx * Math.sin(currentAngle))
            crc.strokeStyle = "rgb(51, 35, 86)"
            crc.lineWidth = 2;
            crc.stroke(rayDisapperas);
            }
        }
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.r = this.r += 1;
            if (this.r >= 30){
                this.r = 0;
            }
            if (this.r >= 8 || this.rx >= 22){
                this.rx = this.rx += 1;
                if (this.rx >= 30){
                    this.rx = 0;
                }
            }
        }


    }
}