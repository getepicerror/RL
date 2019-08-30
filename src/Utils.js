define(["require", "exports", "./data/GameData"], function (require, exports, GameData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = (function () {
        function Utils() {
        }
        Utils.shuffle = function (array) {
            var arr = this.clone(array);
            var currentIndex = arr.length;
            var temporaryValue;
            var randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(GameData_1.default.seedRandom() * currentIndex);
                currentIndex -= 1;
                temporaryValue = arr[currentIndex];
                arr[currentIndex] = arr[randomIndex];
                arr[randomIndex] = temporaryValue;
            }
            return arr;
        };
        Utils.clone = function (object) {
            return JSON.parse(JSON.stringify(object));
        };
        return Utils;
    }());
    exports.default = Utils;
});
