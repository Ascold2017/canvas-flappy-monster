import { getRandomColor } from "./util";

export class Wall {
    private context: CanvasRenderingContext2D;
    public x: number;
    public y: number;
    public h: number;
    public w: number;
    public gap: number;
    public color: string;
    constructor(private canvas: HTMLCanvasElement) {
        this.context = this.canvas.getContext('2d');

        // Specifications
        this.x = canvas.width;
        this.y = 0;
        this.w = 100;
        this.h = 0;
        this.gap = 0;
        this.color = getRandomColor();
    }

    draw() {
        // Wall Color
        this.context.fillStyle = this.color;

        // Draw Upper Part
        this.context.fillRect(this.x, this.y, this.w, this.h);

        // Draw Lower Part
        this.context.fillRect(this.x, this.h + this.gap, this.w, this.canvas.height);
    }
}
