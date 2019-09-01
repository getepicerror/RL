define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameObject = (function () {
        function GameObject(initObject) {
            this.char = "";
            this.char = initObject.char;
            this.name = initObject.name;
            this.knownName = initObject.knownName;
        }
        return GameObject;
    }());
    exports.default = GameObject;
});
