  
namespace newYear {

    export class FireworkCircleNA {
        x: number;
        y: number;
        r: number;
        color: string;
        particles: number;

        constructor(color: string, particles: number) {
            this.r = 25;
            this.color = color
            this.particles = particles
            this.x = 350;
            this.y = 50;
            this.r = 30;
        }

        draw(): void {
            let dashLength: number = 0.5 * this.particles
            let dashArray:number [] = [5, dashLength];
            let ray: Path2D = new Path2D();
            ray.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
            crc2.setLineDash([dashLength, 10]);
            crc2.strokeStyle = this.color
            crc2.lineWidth = 2;
            crc2.stroke(ray);
            }
        }
}