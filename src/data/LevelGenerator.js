define(["require", "exports", "./Level"], function (require, exports, Level_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LevelGenerator = (function () {
        function LevelGenerator() {
        }
        LevelGenerator.generateLevel = function () {
            var lvl = [];
            for (var i = 0; i < 80; i++) {
                for (var j = 0; j < 32; j++) {
                    var id = Level_1.default.xyToID(i, j);
                    lvl[id] = " ";
                }
            }
            for (var i = 10; i < 40; i++) {
                for (var j = 5; j < 18; j++) {
                    var id = Level_1.default.xyToID(i, j);
                    if (i == 10 || i == 39 || j == 5 || j == 17) {
                        lvl[id] = "#";
                    }
                    else {
                        lvl[id] = ".";
                    }
                }
            }
            return lvl;
        };
        return LevelGenerator;
    }());
    exports.default = LevelGenerator;
});
