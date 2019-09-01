/// <reference path="./_all.d.ts" />

import { Images } from "./assets/Images";
import { Config } from "./data/Config";
import TextStyles from "./data/TextStyles";
import { Main } from "./main";
import { LevelRenderer } from "./LevelRenderer";
import Level from "./data/Level";
import GameData from "./data/GameData";

export class GameScreen extends PIXI.Container {
    private back;
    private levelRenderer: LevelRenderer;
    constructor() {
        super();
        GameData.newGame();
        Level.init();
        this.init();

        this.interactive = true;
        this.on("pointermove", (e) => this.onMove(e));
        this.on("pointertap", (e) => this.onTap(e));
        window.addEventListener("keydown", (e) => this.onKey(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }

    private init() {
        this.back = PIXI.Sprite.fromFrame(Images.SQUARE);
        this.back.tint = 0x000000;
        this.back.width = Config.width;
        this.back.height = Config.height;
        this.addChild(this.back);

        this.levelRenderer = new LevelRenderer();
        this.addChild(this.levelRenderer);
    }

    private onMove(e) {
        if (!Main.hasFocus) return;
        let x = e.data.global.x /= Config.SCALING_FACTOR;
        let y = e.data.global.y /= Config.SCALING_FACTOR;
        x /= 12;
        y /= 18;
        // Main.render(); 
    }

    private onTap(e) {
        if (!Main.hasFocus) return;
        let x = e.data.global.x /= Config.SCALING_FACTOR;
        let y = e.data.global.y /= Config.SCALING_FACTOR;
        // Main.render(); 
    }

    private onKey(e) {
        if (!Main.hasFocus) return;
        console.log(e.key);
        switch (e.key) {
            case 'ArrowRight':
                Level.update("right");
                break;
            case 'ArrowLeft':
                Level.update("left");
                break;
            case 'ArrowUp':
                Level.update("up");
                break;
            case 'ArrowDown':
                Level.update("down");
                break;
            case '.':
                Level.update("");
            case 'a':
                GameData.player.isPulling = true;
                break
            case 's':
                GameData.player.isPushing = true;
                break

        }
        this.levelRenderer.render();
    }

    private onKeyUp(e) {
        if (!Main.hasFocus) return;
        switch (e.key) {
            case 'a':
                GameData.player.isPulling = false;
                break
            case 's':
                GameData.player.isPushing = false;
                break

        }
        this.levelRenderer.render();
    }
}