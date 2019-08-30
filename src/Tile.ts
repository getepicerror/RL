/// <reference path="./_all.d.ts" />

import { Images } from "./assets/Images";
import TextStyles from "./data/TextStyles";

export class Tile extends PIXI.Container {
    private back: PIXI.Sprite;
    private char: PIXI.extras.BitmapText;
    constructor() {
        super()
        this.init();
    }

    private init() {
        this.back = PIXI.Sprite.fromFrame(Images.SQUARE);
        this.back.tint = 0x000000;//Math.random() * 50//0x000000;
        this.back.width = 12;
        this.back.height = 18;
        this.addChild(this.back);
        this.char = new PIXI.extras.BitmapText("", TextStyles.BOLD);
        this.char.tint = 0x222222;
        this.addChild(this.char);
        this.char.position.set(1, 0);
    }

    public update(val: string) {
        this.back.tint = 0x000000;//Math.random() * 50;//0x000000;
        this.char.text = val;
    }
}