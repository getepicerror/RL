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
define(["require", "exports", "./assets/Images", "./data/Config", "./main", "./LevelRenderer", "./data/Level", "./data/GameData"], function (require, exports, Images_1, Config_1, main_1, LevelRenderer_1, Level_1, GameData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameScreen = (function (_super) {
        __extends(GameScreen, _super);
        function GameScreen() {
            var _this = _super.call(this) || this;
            GameData_1.default.newGame();
            Level_1.default.init();
            _this.init();
            _this.interactive = true;
            _this.on("pointermove", function (e) { return _this.onMove(e); });
            _this.on("pointertap", function (e) { return _this.onTap(e); });
            window.addEventListener("keydown", function (e) { return _this.onKey(e); });
            window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
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
            console.log(e.key);
            switch (e.key) {
                case 'ArrowRight':
                    Level_1.default.update("right");
                    break;
                case 'ArrowLeft':
                    Level_1.default.update("left");
                    break;
                case 'ArrowUp':
                    Level_1.default.update("up");
                    break;
                case 'ArrowDown':
                    Level_1.default.update("down");
                    break;
                case '.':
                    Level_1.default.update("");
                case 'a':
                    GameData_1.default.player.isPulling = true;
                    break;
                case 's':
                    GameData_1.default.player.isPushing = true;
                    break;
            }
            this.levelRenderer.render();
        };
        GameScreen.prototype.onKeyUp = function (e) {
            if (!main_1.Main.hasFocus)
                return;
            switch (e.key) {
                case 'a':
                    GameData_1.default.player.isPulling = false;
                    break;
                case 's':
                    GameData_1.default.player.isPushing = false;
                    break;
            }
            this.levelRenderer.render();
        };
        return GameScreen;
    }(PIXI.Container));
    exports.GameScreen = GameScreen;
});
