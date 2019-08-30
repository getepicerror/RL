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
define(["require", "exports", "./data/GameData", "./HomeScreen", "./data/Config", "./assets/Images", "./GameScreen"], function (require, exports, GameData_1, HomeScreen_1, Config_1, Images_1, GameScreen_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameStage = (function (_super) {
        __extends(GameStage, _super);
        function GameStage() {
            var _this = _super.call(this) || this;
            _this.screenShakeTimer = 0;
            _this.screenShakeDelta = 0;
            _this.screenShakeOrigX = 0;
            _this.screenShakeOrigY = 0;
            GameData_1.default.load();
            GameStage.instance = _this;
            console.log("GAMESTAGE STARTED");
            _this.back = PIXI.Sprite.fromFrame(Images_1.Images.SQUARE);
            _this.back.width = Config_1.Config.width;
            _this.back.height = Config_1.Config.height;
            _this.addChild(_this.back);
            _this.screenHolder = new PIXI.Container();
            _this.addChild(_this.screenHolder);
            if (GameStage.TO_DEPLOY) {
                _this.switchScreen(GameStage.HOME_SCREEN);
            }
            else {
                _this.switchScreen(GameStage.GAME_SCREEN);
            }
            return _this;
        }
        GameStage.prototype.switchScreen = function (screenID) {
            if (this.currentScreen) {
                this.screenHolder.removeChild(this.currentScreen);
                TweenMax.killAll(false, true, true, true);
                this.currentScreen.destroy({ children: true, texture: false, baseTexture: false });
                this.currentScreen = null;
                this.clearCache();
                GameData_1.default.save();
            }
            GameStage.currentID = screenID;
            switch (screenID) {
                case GameStage.HOME_SCREEN:
                    this.currentScreen = new HomeScreen_1.default();
                    this.screenHolder.addChild(this.currentScreen);
                    break;
                case GameStage.GAME_SCREEN:
                    this.currentScreen = new GameScreen_1.GameScreen();
                    this.screenHolder.addChild(this.currentScreen);
                    break;
            }
        };
        GameStage.prototype.startGame = function () {
            if (GameStage.TO_DEPLOY) {
                GameData_1.default.newGame();
            }
            else {
                GameData_1.default.fakeGame();
            }
            GameData_1.default.inGame = true;
            GameData_1.default.save();
        };
        GameStage.prototype.screenShake = function (frames) {
            this.screenShakeTimer = frames;
            this.screenShakeDelta = Math.min(12, frames / 1.5);
            this.screenShakeOrigX = 0;
            this.screenShakeOrigY = 0;
            this.shakeScreen();
        };
        GameStage.prototype.shakeScreen = function () {
            var _this = this;
            this.screenShakeTimer--;
            if (this.screenShakeTimer > 0) {
                this.x = GameData_1.default.seedRandom() * this.screenShakeDelta - this.screenShakeDelta / 2;
                this.y = GameData_1.default.seedRandom() * this.screenShakeDelta - this.screenShakeDelta / 2;
                setTimeout(function () {
                    _this.shakeScreen();
                }, 16);
            }
            else {
                this.x = this.screenShakeOrigX;
                this.y = this.screenShakeOrigY;
            }
        };
        GameStage.prototype.clearCache = function () {
        };
        GameStage.TO_DEPLOY = false;
        GameStage.HOME_SCREEN = "home";
        GameStage.GAME_SCREEN = "gameScreen";
        GameStage.currentID = "";
        return GameStage;
    }(PIXI.Container));
    exports.GameStage = GameStage;
});
