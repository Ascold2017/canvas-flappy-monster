
export class GameScore {
    private context: CanvasRenderingContext2D;
    public x: number;
    public y: number;
    public start: number;
    public score: number;
    constructor(private canvas: HTMLCanvasElement) {
        // Global Attributes
        this.context = this.canvas.getContext('2d');

        // Specifications
        this.start = +new Date();
        this.score = 0;
        this.x = 0;
        this.y = 0;
    }

    draw() {
        // Draw
        var draw = +new Date();
        this.score = +((draw - this.start) / 1000).toFixed(1);
        this.context.font = '45px Verdana';
        this.context.fillText(this.score.toString(), this.x, this.y);
    }
}
