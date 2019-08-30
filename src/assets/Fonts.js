define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Fonts = (function () {
        function Fonts() {
        }
        Fonts.BOLDSHEET = "./src/assets/fonts/monobold.xml";
        Fonts.REGULARSHEET = "./src/assets/fonts/mono.xml";
        Fonts.BOLD = "monobold";
        Fonts.TEXT = "mono";
        Fonts.preloadList = [
            Fonts.BOLDSHEET,
            Fonts.REGULARSHEET,
        ];
        return Fonts;
    }());
    exports.Fonts = Fonts;
});
