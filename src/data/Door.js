define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Door = (function () {
        function Door() {
            this.isOpen = false;
        }
        Object.defineProperty(Door.prototype, "char", {
            get: function () {
                if (this.isOpen) {
                    return "/";
                }
                else {
                    return "+";
                }
            },
            enumerable: true,
            configurable: true
        });
        return Door;
    }());
    exports.default = Door;
});
