/// <reference path="./_all.d.ts" />

import { GameStage } from "./GameStage";
import { Config } from "./data/Config";
import { Images } from "./assets/Images";
import { Fonts } from "./assets/Fonts";

export class Main {
    private renderer;
    public static stage: GameStage;
    private pixelRatio = 1;
    public static renderEveryFrame = false;
    public pixiDimensions: PIXI.Rectangle = new PIXI.Rectangle(0, 0, 1280, 720);
    public static hasFocus = true;

    constructor() {
        TweenMax.delayedCall(0.1, this.loadImages, null, this);
    }

    public loadImages(): void {
        Config.loader = PIXI.loader;
        Config.loader.add(Images.preloadList);
        Config.loader.add(Fonts.preloadList);
        Config.loader.on("complete", () => this.onLoaded());
        Config.loader.load();
    }

    private onLoaded() {
        if (devicePixelRatio > 1) {
            this.pixelRatio = devicePixelRatio;
        }
        this.pixelRatio = Math.min(2, this.pixelRatio);
        PIXI.settings.TARGET_FPMS = Config.targetFPS / 1000;

        this.renderer = new PIXI.WebGLRenderer(
            this.pixiDimensions.width, this.pixiDimensions.height,
            {
                antialias: false,
                transparent: true,
                resolution: this.pixelRatio,
                view: <HTMLCanvasElement>window.document.getElementById("pixistage")
            }
        );
        Config.renderer = this.renderer;
        this.renderer.backgroundColor = 0x000000;
        this.renderer.renderEveryFrame = false;
        this.renderer.view.tabIndex = 1;
        this.renderer.textureGC.mode = PIXI.GC_MODES.AUTO;
        this.renderer.view.addEventListener('blur', (e) => this.onBlur(e));
        this.renderer.view.addEventListener('focus', (e) => this.onFocus(e));
        this.renderer.view.addEventListener('mouseover', (e) => this.onFocus(e));
        this.renderer.view.addEventListener('mouseout', (e) => this.onBlur(e));
        this.renderer.view.focus();
        window.onresize = this.onResizePixi.bind(this);

        this.onResizePixi(null);

        Main.stage = new GameStage();
        Main.stage.scale.set(Config.SCALING_FACTOR);
        Main.render();
    }

    private onResizePixi(e): void {
        //DESKTOP! 1280 x 720
        let wi = 1280 * 2 / this.pixelRatio;
        let he = 720 * 2 / this.pixelRatio;
        this.renderer.resize(wi, he);
        Config.right = 1280;
        Config.bottom = 1280 / wi * he;
        Config.SCALING_FACTOR = wi / 1280;
        this.renderer.view.style.width = "1280px";
        this.renderer.view.style.height = "720px";
    }

    private onBlur(e): void {
        Main.hasFocus = false;
    }

    private onFocus(e): void {
        Main.hasFocus = true;
        if (Main.stage) {
            Main.render();
        }
    }

    public static render() {
        Config.renderer.render(Main.stage);
        console.log("render");
    }
}
