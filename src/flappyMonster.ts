import { GameBackground } from "./gameBackground";
import { GameScore } from "./gameScore";
import { WallFactory } from "./wallFactory";
import { Monster } from "./monster";
import { Wall } from "./wall";


var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;

var KEY_CODE = {
    R: 82
};

export class FlappyMonster {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private currentState: number;
    private velocity: number;
    private background1: GameBackground;
    private background2: GameBackground;
    private gameScore: GameScore;
    private wallFactory: WallFactory;
    private monster: Monster;
    constructor(canvas: HTMLCanvasElement) {

        //Global Attributes
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        // Game State
        this.currentState = INITIAL;

        // Game Speed
        this.velocity = 5;

        // Bind Events
        this.bindEvents();

        // Create Game Objects
        this.createObjects();
    }

    createObjects() {

        // Background
        this.background1 = new GameBackground('images/back.png', this.canvas);
        this.background2 = new GameBackground('images/back.png', this.canvas);
        this.background2.x = this.canvas.width;

        // Score
        this.gameScore = new GameScore(this.canvas);
        this.gameScore.x = this.canvas.width - 150;
        this.gameScore.y = 80;

        // Wall Factory
        this.wallFactory = new WallFactory(this.canvas);

        // Monster
        this.monster = new Monster('images/monster.png', this.canvas);

    }

    bindEvents() {
        // Mouse Listener
        this.canvas.addEventListener('click', (event) => {
            switch (this.currentState) {
                case INITIAL:
                    this.currentState = GAME_PLAYING;
                    this.wallFactory.generateWalls();
                    break;
                case GAME_PLAYING:
                    this.monster.vy = -1 * this.velocity;
                    break;
            }
        });

        // Key Listener
        window.addEventListener('keydown', (event) => {
            switch (this.currentState) {
                case GAME_OVER:
                    if (event.keyCode === KEY_CODE.R) {
                        this.reset();
                        this.currentState = GAME_PLAYING;
                    }
                    break;
            }
        });
    }

    reset() {
        // Reset States
        this.gameScore.start = +new Date();
        this.gameScore.score = 0;
        this.wallFactory.walls = [];
        this.monster.x = 115;
        this.monster.y = 115;
    }

    start() {
        // Start Game
        window.requestAnimationFrame(() => this.runGameLoop());
    }

    runGameLoop() {

        // Game State
        switch (this.currentState) {
            case INITIAL:
                // DRAW INITIAL SCREEN
                this.drawInitialScreen();
                break;
            case GAME_PLAYING:
                // DRAW GAME PLAYING SCREEN
                this.drawGamePlayingScreen();
                break;
            case GAME_OVER:
                // DRAW GAME OVER SCREEN
                this.drawGameOverScreen();
                break;
        }

        window.requestAnimationFrame(() => this.runGameLoop());
    }

    drawInitialScreen() {
        // Background
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Text
        this.context.fillStyle = 'white';
        this.context.font = '36px Arial';
        this.context.fillText('Click to Start!', this.canvas.width / 2 - 100, this.canvas.height / 2);
    }

    drawGamePlayingScreen() {
         // Clear Canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw Background
    this.animateBackground();

    // Draw Score
    this.gameScore.draw();

    // Draw Walls
    this.drawWalls();

    // Draw Monster
    this.monster.draw();

    // Collision Check
    this.checkCollisions();
    }

    checkCollisions() {
        var walls = this.wallFactory.walls;

        for (var i = 0; i < walls.length; i++) {
            if (this.isCollided(walls[i])) {
                this.currentState = GAME_OVER;
            }
        }
    }

    isCollided(wall: Wall) {
        var isCollided = true;

        // Monster Coordinates
        var monsterTop = this.monster.y;
        var monsterBottom = this.monster.y + this.monster.h;
        var monsterRight = this.monster.x + this.monster.w;
        var monsterLeft = this.monster.x;
    
        // Wall Coordinates
        var wallTop = wall.y + wall.h + wall.gap; // top of lower wall
        var wallBottom = wall.y + wall.h // bottom of upper wall
        var wallRight = wall.x + wall.w;
        var wallLeft = wall.x;
    
        if ((monsterBottom < wallTop && monsterTop > wallBottom)
            || (monsterLeft > wallRight)
            || (monsterRight < wallLeft)) {
            isCollided = false;
        }
    
        return isCollided;
    }

    drawWalls() {
        // Draw Walls
    var walls = this.wallFactory.walls;

    for (var i = 0; i < walls.length; i++) {
        walls[i].draw();
        walls[i].x = walls[i].x - this.velocity;
    }

    this.removeExtraWalls();
    }

    removeExtraWalls() {
         // Draw Walls
    var walls = this.wallFactory.walls;

    for (var i = 0; i < walls.length; i++) {
        if (walls[i].x + walls[i].w < 0) {
            // remove
            walls.shift();
        }
    }
    }

    animateBackground() {
        // Background 1
    this.background1.draw();

    if (Math.abs(this.background1.x) > this.canvas.width) {
        this.background1.x = this.canvas.width - this.velocity;
    }
    this.background1.x = this.background1.x - this.velocity;

    // Background 2
    this.background2.draw();

    if (Math.abs(this.background2.x) > this.canvas.width) {
        this.background2.x = this.canvas.width - this.velocity;
    }
    this.background2.x = this.background2.x - this.velocity;
    }

    drawGameOverScreen() {
        
    // Background
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Text
    this.context.fillStyle = 'white';
    this.context.font = '54px Arial';
    this.context.fillText('Your Score : ' + this.gameScore.score, this.canvas.width / 2 - 180, this.canvas.height / 2 - 100);
    this.context.font = '36px Arial';
    this.context.fillText('Game Over :(', this.canvas.width / 2 - 100, this.canvas.height / 2);
    this.context.font = '24px Arial';
    this.context.fillText('Press R to Restart!', this.canvas.width / 2 - 100, this.canvas.height / 2 + 50);
    }
}
