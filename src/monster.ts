
export class Monster {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    public x: number;
    public y: number;
    public h: number;
    public w: number;
    public vy: number;
    private g: number;
    private src: string;
    private img: HTMLImageElement | null;
    private frame: number = 0;
    constructor(src: string, canvas: HTMLCanvasElement) {
        // Global Attributes
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        // Specifications
        this.x = 115;
        this.y = 115;
        this.w = 115;
        this.h = 115;
        this.vy = 0;
        this.g = 0.20;
        this.src = src;
        this.img = null;
        this.frame = 0;

        // Create Monster Tile Image
        this.create();
    }

    create() {
        // Create Image
        this.img = new Image();
        this.img.src = this.src;
    }

    draw() {

        // Draw
        if (this.img != null) {
            this.vy = this.vy + this.g;
            this.y = this.y + this.vy;

            if (this.y + this.h > this.canvas.height) {
                this.y = this.canvas.height - this.h;
                this.vy = 0;
            } else if (this.y < 0) {
                this.y = 0;
                this.vy = 0;
            }

            this.context.drawImage(this.img, this.frame * 115, 0, 115, 100, this.x, this.y, this.w, this.h);
            this.frame++;
            this.frame %= 4;
        }
    }
}
