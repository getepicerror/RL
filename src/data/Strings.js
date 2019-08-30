define(["require", "exports", "./Config"], function (require, exports, Config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Strings = (function () {
        function Strings() {
        }
        Strings.getString = function (key) {
            var rtn;
            if (Strings[Config_1.Config.language].hasOwnProperty(key)) {
                rtn = Strings[Config_1.Config.language][key];
            }
            else {
                console.log("TRANSLATE " + key + " INTO " + Config_1.Config.language);
                rtn = Strings["EN"][key];
            }
            return rtn;
        };
        Strings.EN = {
            victory: "Victory!",
            rewards: "Now pick your rewards",
        };
        Strings.NL = {};
        return Strings;
    }());
    exports.default = Strings;
});
