import { Wall } from './wall'
import { getRandomInt } from './util';
export class WallFactory {
    private gap: number;
    private maxGap: number;
    private freq: number;
    public walls: Wall[];
    constructor(private canvas: HTMLCanvasElement) {
        // Specifications
        this.gap = 200;
        this.maxGap = 300;
        this.freq = 1500;
        this.walls = [];
    }


    generateWalls() {
        // Generate
        setInterval( () => {

            var gap = getRandomInt(this.gap, this.maxGap);
            var height = getRandomInt(0, this.maxGap);

            var wall = new Wall(this.canvas);
            wall.gap = gap;
            wall.h = height;

            this.walls.push(wall);

        }, this.freq);
    }
}

