import Game from "@/Game";

class Player {
  game: Game;
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  speedX: number;
  speedY: number;
  constructor({
    game,
    x,
    y,
    speedX,
    speedY,
  }: {
    game: Game;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
  }) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.ctx = this.game.ctx;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, 20, 20);
    this.ctx.fill();
  }
}

export default Player;
