define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Entities = (function () {
        function Entities() {
        }
        Entities.MOBLIN = {
            char: "M",
            hp: 30,
            openDoors: true,
            climbStairs: true,
            maxHP: 30,
            flying: false,
        };
        return Entities;
    }());
    exports.default = Entities;
});
