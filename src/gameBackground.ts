
export class GameBackground {
    private context: CanvasRenderingContext2D;
    public x: number;
    public y: number;
    private h: number;
    private w: number;
    private img: HTMLImageElement;
    constructor(private src: string, private canvas: HTMLCanvasElement) {
        this.context = this.canvas.getContext('2d');
  
        // Specifications
        this.x = 0;
        this.y = 0;
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        this.src = src;
        this.img = null;
      
        // Create Background Image
        this.create();
    }

    create() {
         // Create Image
    this.img = new Image();
    this.img.src = this.src;
    }

    draw() {
        // Draw
    if(this.img != null){
        this.context.drawImage(this.img, this.x, this.y, this.w, this.h);
      }
    }
}
