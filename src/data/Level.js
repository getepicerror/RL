define(["require", "exports", "./LevelGenerator"], function (require, exports, LevelGenerator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Level = (function () {
        function Level() {
        }
        Level.init = function () {
            this.level = LevelGenerator_1.default.generateLevel();
        };
        Level.update = function () {
            this.updated = [];
            this.updateBack();
            this.updateEntities();
        };
        Level.updateBack = function () {
        };
        Level.updateEntities = function () {
        };
        Level.idToX = function (id) {
            return id % 80;
        };
        Level.idToY = function (id) {
            return Math.floor(id / 80);
        };
        Level.xyToID = function (x, y) {
            return y * 80 + x;
        };
        Level.updated = [];
        Level.level = [];
        Level.objects = [];
        Level.entities = [];
        Level.seen = [];
        Level.seeing = [];
        Level.nonWalkable = ["#"];
        return Level;
    }());
    exports.default = Level;
});
