/// <reference path="./_all.d.ts" />

import GameData from "./data/GameData";
import HomeScreen from "./HomeScreen";
import { Config } from "./data/Config";
import { Images } from "./assets/Images";
import { GameScreen } from "./GameScreen";

export class GameStage extends PIXI.Container {
    public static TO_DEPLOY: boolean = false;
    private back: PIXI.Sprite;
    private currentScreen;
    public static HOME_SCREEN = "home";
    public static GAME_SCREEN = "gameScreen";
    public static currentID = "";
    private screenHolder: PIXI.Container;
    private screenShakeTimer: number = 0;
    private screenShakeDelta: number = 0;
    private screenShakeOrigX: number = 0;
    private screenShakeOrigY: number = 0;

    public static instance;

    constructor() {
        super();
        GameData.load();
        GameStage.instance = this;
        console.log("GAMESTAGE STARTED");

        this.back = PIXI.Sprite.fromFrame(Images.SQUARE);
        this.back.width = Config.width;
        this.back.height = Config.height;
        this.addChild(this.back);

        this.screenHolder = new PIXI.Container();
        this.addChild(this.screenHolder);

        if (GameStage.TO_DEPLOY) {
            this.switchScreen(GameStage.HOME_SCREEN);
        } else {
            this.switchScreen(GameStage.GAME_SCREEN);
        }
    }

    private switchScreen(screenID) {
        if (this.currentScreen) {
            this.screenHolder.removeChild(this.currentScreen);
            TweenMax.killAll(false, true, true, true);
            this.currentScreen.destroy({ children: true, texture: false, baseTexture: false });
            this.currentScreen = null;
            this.clearCache();
            GameData.save();
        }

        GameStage.currentID = screenID;
        switch (screenID) {
            case GameStage.HOME_SCREEN:
                this.currentScreen = new HomeScreen();
                this.screenHolder.addChild(this.currentScreen);
                break;
            case GameStage.GAME_SCREEN:
                this.currentScreen = new GameScreen();
                this.screenHolder.addChild(this.currentScreen);
                break;
        }
    }


    public startGame() {
        if (GameStage.TO_DEPLOY) {
            GameData.newGame();
        } else {
            GameData.fakeGame();
        }
        GameData.inGame = true;
        GameData.save();
        // this.switchScreen(GameStage.REGION_START_SCREEN);
    }

    public screenShake(frames) {
        this.screenShakeTimer = frames;
        this.screenShakeDelta = Math.min(12, frames / 1.5);
        this.screenShakeOrigX = 0;
        this.screenShakeOrigY = 0;
        this.shakeScreen();
    }
    private shakeScreen() {
        this.screenShakeTimer--;
        if (this.screenShakeTimer > 0) {
            this.x = GameData.seedRandom() * this.screenShakeDelta - this.screenShakeDelta / 2;
            this.y = GameData.seedRandom() * this.screenShakeDelta - this.screenShakeDelta / 2;
            setTimeout(() => {
                this.shakeScreen();
            }, 16);
        } else {
            this.x = this.screenShakeOrigX;
            this.y = this.screenShakeOrigY;
        }
    }

    private clearCache() {
        //Remove all text textures
        //Force garbage collection
        // console.log(PIXI.utils.BaseTextureCache);
    }
}