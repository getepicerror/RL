var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./assets/Images", "./data/Config", "./main", "./LevelRenderer", "./data/Level"], function (require, exports, Images_1, Config_1, main_1, LevelRenderer_1, Level_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameScreen = (function (_super) {
        __extends(GameScreen, _super);
        function GameScreen() {
            var _this = _super.call(this) || this;
            Level_1.default.init();
            _this.init();
            _this.interactive = true;
            _this.on("pointermove", function (e) { return _this.onMove(e); });
            _this.on("pointertap", function (e) { return _this.onTap(e); });
            window.addEventListener("keydown", function (e) { return _this.onKey(e); });
            return _this;
        }
        GameScreen.prototype.init = function () {
            this.back = PIXI.Sprite.fromFrame(Images_1.Images.SQUARE);
            this.back.tint = 0x000000;
            this.back.width = Config_1.Config.width;
            this.back.height = Config_1.Config.height;
            this.addChild(this.back);
            this.levelRenderer = new LevelRenderer_1.LevelRenderer();
            this.addChild(this.levelRenderer);
        };
        GameScreen.prototype.onMove = function (e) {
            if (!main_1.Main.hasFocus)
                return;
            var x = e.data.global.x /= Config_1.Config.SCALING_FACTOR;
            var y = e.data.global.y /= Config_1.Config.SCALING_FACTOR;
            x /= 12;
            y /= 18;
        };
        GameScreen.prototype.onTap = function (e) {
            if (!main_1.Main.hasFocus)
                return;
            var x = e.data.global.x /= Config_1.Config.SCALING_FACTOR;
            var y = e.data.global.y /= Config_1.Config.SCALING_FACTOR;
        };
        GameScreen.prototype.onKey = function (e) {
            if (!main_1.Main.hasFocus)
                return;
            console.log(e);
            switch (e.key) {
                case '':
                    break;
            }
            this.levelRenderer.render();
        };
        return GameScreen;
    }(PIXI.Container));
    exports.GameScreen = GameScreen;
});
