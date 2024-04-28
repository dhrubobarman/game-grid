import Player from "@/Player";

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width!: number;
  height!: number;
  player: Player;
  cellSize: number;
  columns!: number;
  rows!: number;
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width;
    this.height;
    this.player = new Player({
      game: this,
      x: 0,
      y: 0,
      speedX: 1,
      speedY: 0.5,
    });
    this.cellSize = 50;
    this.columns;
    this.rows;

    window.addEventListener("resize", (e) => {
      const target = e.currentTarget as Window;
      this.resize(target.innerWidth, target.innerHeight);
    });
    this.resize(window.innerWidth, window.innerHeight);
  }
  drawGrid() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        this.ctx.strokeRect(
          x * this.cellSize,
          y * this.cellSize,
          this.cellSize,
          this.cellSize
        );
      }
    }
  }
  resize(width: number, height: number) {
    this.canvas.width = Math.floor(width - (width % this.cellSize));
    this.canvas.height = Math.floor(height - (height % this.cellSize));
    this.width = Math.floor(width);
    this.height = Math.floor(height);
    this.columns = Math.round(this.width / this.cellSize);
    this.rows = Math.round(this.height / this.cellSize);
  }
  render() {
    this.drawGrid();
    // this.player.draw();
    // this.player.update();
  }
}

export default Game;
