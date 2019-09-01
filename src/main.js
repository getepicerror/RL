define(["require", "exports", "./GameStage", "./data/Config", "./assets/Images", "./assets/Fonts"], function (require, exports, GameStage_1, Config_1, Images_1, Fonts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Main = (function () {
        function Main() {
            this.pixelRatio = 1;
            this.pixiDimensions = new PIXI.Rectangle(0, 0, 1280, 720);
            TweenMax.delayedCall(0.1, this.loadImages, null, this);
        }
        Main.prototype.loadImages = function () {
            var _this = this;
            Config_1.Config.loader = PIXI.loader;
            Config_1.Config.loader.add(Images_1.Images.preloadList);
            Config_1.Config.loader.add(Fonts_1.Fonts.preloadList);
            Config_1.Config.loader.on("complete", function () { return _this.onLoaded(); });
            Config_1.Config.loader.load();
        };
        Main.prototype.onLoaded = function () {
            var _this = this;
            if (devicePixelRatio > 1) {
                this.pixelRatio = devicePixelRatio;
            }
            this.pixelRatio = Math.min(2, this.pixelRatio);
            PIXI.settings.TARGET_FPMS = Config_1.Config.targetFPS / 1000;
            this.renderer = new PIXI.WebGLRenderer(this.pixiDimensions.width, this.pixiDimensions.height, {
                antialias: false,
                transparent: true,
                resolution: this.pixelRatio,
                view: window.document.getElementById("pixistage")
            });
            Config_1.Config.renderer = this.renderer;
            this.renderer.backgroundColor = 0x000000;
            this.renderer.renderEveryFrame = false;
            this.renderer.view.tabIndex = 1;
            this.renderer.textureGC.mode = PIXI.GC_MODES.AUTO;
            this.renderer.view.addEventListener('blur', function (e) { return _this.onBlur(e); });
            this.renderer.view.addEventListener('focus', function (e) { return _this.onFocus(e); });
            this.renderer.view.addEventListener('mouseover', function (e) { return _this.onFocus(e); });
            this.renderer.view.addEventListener('mouseout', function (e) { return _this.onBlur(e); });
            this.renderer.view.focus();
            window.onresize = this.onResizePixi.bind(this);
            this.onResizePixi(null);
            Main.stage = new GameStage_1.GameStage();
            Main.stage.scale.set(Config_1.Config.SCALING_FACTOR);
            Main.render();
        };
        Main.prototype.onResizePixi = function (e) {
            var wi = 1280 * 2 / this.pixelRatio;
            var he = 720 * 2 / this.pixelRatio;
            this.renderer.resize(wi, he);
            Config_1.Config.right = 1280;
            Config_1.Config.bottom = 1280 / wi * he;
            Config_1.Config.SCALING_FACTOR = wi / 1280;
            this.renderer.view.style.width = "1280px";
            this.renderer.view.style.height = "720px";
        };
        Main.prototype.onBlur = function (e) {
            Main.hasFocus = false;
        };
        Main.prototype.onFocus = function (e) {
            Main.hasFocus = true;
            if (Main.stage) {
                Main.render();
            }
        };
        Main.render = function () {
            Config_1.Config.renderer.render(Main.stage);
        };
        Main.renderEveryFrame = false;
        Main.hasFocus = true;
        return Main;
    }());
    exports.Main = Main;
});
