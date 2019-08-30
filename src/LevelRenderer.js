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
define(["require", "exports", "./Tile", "./main", "./data/Level"], function (require, exports, Tile_1, main_1, Level_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LevelRenderer = (function (_super) {
        __extends(LevelRenderer, _super);
        function LevelRenderer() {
            var _this = _super.call(this) || this;
            _this.tiles = [];
            LevelRenderer.instance = _this;
            _this.init();
            return _this;
        }
        LevelRenderer.prototype.init = function () {
            for (var y = 0; y < 32; y++) {
                for (var x = 0; x < 80; x++) {
                    var tile = new Tile_1.Tile();
                    tile.position.set(x * 12, y * 18);
                    this.addChild(tile);
                    this.tiles.push(tile);
                }
            }
            this.update();
        };
        LevelRenderer.prototype.update = function () {
            for (var i = 0; i < this.tiles.length; i++) {
                this.tiles[i].update(Level_1.default.level[i]);
            }
        };
        LevelRenderer.prototype.render = function () {
            var t = new Date().getTime();
            this.update();
            main_1.Main.render();
            console.log(new Date().getTime() - t);
        };
        return LevelRenderer;
    }(PIXI.Container));
    exports.LevelRenderer = LevelRenderer;
});
