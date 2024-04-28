import "./style.css";
import { createElement } from "@/utils";
import grassNight from "@/assets/grass_night.png";
import Game from "@/Game";

const canvas = createElement("canvas", {
  className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  cssText: `background-image: url('${grassNight}')`,
  id: "canvas1",
});

const ctx = canvas.getContext("2d")!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const game = new Game(canvas, ctx);
game.render();

function gameLoop(_delta: number = 0) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.render();
  requestAnimationFrame(gameLoop);
}
gameLoop(0);
