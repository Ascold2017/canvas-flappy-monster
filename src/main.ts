import { FlappyMonster } from './flappyMonster'
window.onload = function() {

    // Canvas Definition
    var canvas: HTMLCanvasElement = document.getElementById('flappy-monster-game') as HTMLCanvasElement;
  
    // Game Object
    var flappyMonster = new FlappyMonster(canvas);
    flappyMonster.start();
  
  };