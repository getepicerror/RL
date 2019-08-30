define(["require", "exports", "../assets/Fonts"], function (require, exports, Fonts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextStyles = (function () {
        function TextStyles() {
        }
        TextStyles.BOLD = {
            font: "15px " + Fonts_1.Fonts.BOLD
        };
        TextStyles.TEXT = {
            font: "15px " + Fonts_1.Fonts.TEXT
        };
        return TextStyles;
    }());
    exports.default = TextStyles;
});
