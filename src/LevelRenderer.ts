/// <reference path="./_all.d.ts" />

import { Tile } from "./Tile";
import { Main } from "./main";
import Level from "./data/Level";
import "../lib/pSBC"

export class LevelRenderer extends PIXI.Container {
    private tiles = [];
    public static instance;
    constructor() {
        super()
        LevelRenderer.instance = this;
        this.init();
    }
    private init() {
        for (let y = 0; y < 32; y++) {
            for (let x = 0; x < 80; x++) {
                let tile = new Tile();
                tile.position.set(x * 12, y * 18);
                this.addChild(tile);
                this.tiles.push(tile);
            }
        }
        this.update();
    }

    public update() {
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].update(Level.level[i]);
        }
    }

    public render() {
        let t = new Date().getTime();
        this.update();
        Main.render();
        console.log(new Date().getTime() - t);
    }

}