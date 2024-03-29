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
define(["require", "exports", "./assets/Images", "./data/TextStyles"], function (require, exports, Images_1, TextStyles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        Tile.prototype.init = function () {
            this.back = PIXI.Sprite.fromFrame(Images_1.Images.SQUARE);
            this.back.tint = 0x000000;
            this.back.width = 12;
            this.back.height = 18;
            this.addChild(this.back);
            this.char = new PIXI.extras.BitmapText("", TextStyles_1.default.BOLD);
            this.char.tint = 0xffffff;
            this.addChild(this.char);
            this.char.position.set(1, 0);
        };
        Tile.prototype.updateText = function (val, color) {
            if (color === void 0) { color = 0xffffff; }
            this.char.text = val;
        };
        Tile.prototype.updateBack = function (val) {
            this.back.tint = val;
        };
        return Tile;
    }(PIXI.Container));
    exports.Tile = Tile;
});
