import { BootScene } from "./scenes/boot-scene";
import GameScene from "./scenes/game-scene";
import HudScene from "./scenes/hud-scene";

export const config: Phaser.Types.Core.GameConfig = {
  title: "PostQuake",
  url: "https://github.com/postquake/postquake",
  version: "0.1",
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game",
  scene: [BootScene, HudScene, GameScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  backgroundColor: "#f8f8f8",
};
