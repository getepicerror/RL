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
define(["require", "exports", "./data/Config", "./data/GameData", "./data/TextStyles", "./assets/Images"], function (require, exports, Config_1, GameData_1, TextStyles_1, Images_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomeScreen = (function (_super) {
        __extends(HomeScreen, _super);
        function HomeScreen() {
            var _this = _super.call(this) || this;
            _this.back = PIXI.Sprite.fromFrame(Images_1.Images.SQUARE);
            _this.back.tint = 0x000000;
            _this.back.width = Config_1.Config.width;
            _this.back.height = Config_1.Config.height;
            _this.addChild(_this.back);
            var buttonY = 500;
            var versionField = new PIXI.extras.BitmapText("v" + Config_1.Config.version, TextStyles_1.default.BOLD);
            versionField.tint = 0xffffff;
            versionField.position.set(6, 10);
            _this.addChild(versionField);
            var seedField = new PIXI.extras.BitmapText("s" + GameData_1.default.seed, TextStyles_1.default.TEXT);
            seedField.tint = 0xffffff;
            seedField.position.set(6, 50);
            _this.addChild(seedField);
            var meField = new PIXI.extras.BitmapText("##@##~~...^", TextStyles_1.default.BOLD);
            meField.anchor.set(0.5);
            meField.position.set(Config_1.Config.middleX, Config_1.Config.middleY);
            _this.addChild(meField);
            return _this;
        }
        HomeScreen.prototype.startRun = function () {
        };
        HomeScreen.prototype.continueRun = function () {
        };
        return HomeScreen;
    }(PIXI.Container));
    exports.default = HomeScreen;
});
