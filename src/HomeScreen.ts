/// <reference path="./_all.d.ts" />

import { Config } from "./data/Config";
import { GameStage } from "./GameStage";
import GameData from "./data/GameData";
import { Howl } from "howler";
import TextStyles from "./data/TextStyles";
import { Images } from "./assets/Images";

export default class HomeScreen extends PIXI.Container {
    private back: PIXI.Sprite;
    private logo: PIXI.Sprite;
    private versionErrorText: PIXI.extras.BitmapText;
    constructor() {
        super();
        this.back = PIXI.Sprite.fromFrame(Images.SQUARE);
        this.back.tint = 0x000000;
        this.back.width = Config.width;
        this.back.height = Config.height;
        this.addChild(this.back);

        let buttonY = 500;

        let versionField = new PIXI.extras.BitmapText("v" + Config.version, TextStyles.BOLD);
        versionField.tint = 0xffffff;
        versionField.position.set(6, 10);
        this.addChild(versionField);

        let seedField = new PIXI.extras.BitmapText("s" + GameData.seed, TextStyles.TEXT);
        seedField.tint = 0xffffff;
        seedField.position.set(6, 50);
        this.addChild(seedField);

        let meField = new PIXI.extras.BitmapText("##@##~~...^", TextStyles.BOLD);
        meField.anchor.set(0.5);
        meField.position.set(Config.middleX, Config.middleY);
        this.addChild(meField);
    }

    private startRun() {
        // GameStage.instance.startGame();
    }

    private continueRun() {
        // GameStage.instance.continueGame();
    }
}