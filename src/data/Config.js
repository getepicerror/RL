define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Config = (function () {
        function Config() {
        }
        Object.defineProperty(Config, "width", {
            get: function () {
                return Config.right;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config, "height", {
            get: function () {
                return Config.bottom;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config, "middleX", {
            get: function () {
                return Config.right / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config, "middleY", {
            get: function () {
                return Config.bottom / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config, "factor", {
            get: function () {
                return this.bottom / this.right;
            },
            enumerable: true,
            configurable: true
        });
        Config.SCALING_FACTOR = 1;
        Config.language = "EN";
        Config.left = 0;
        Config.right = 0;
        Config.bottom = 0;
        Config.top = 0;
        Config.version = "0.0.1";
        Config.targetFPS = 60;
        Config.isIPAD = false;
        return Config;
    }());
    exports.Config = Config;
});
