define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Images = (function () {
        function Images() {
        }
        Images.GUI_SHEET = "./src/assets/img/gui.json";
        Images.SQUARE = "gui/white.png";
        Images.preloadList = [
            Images.GUI_SHEET,
        ];
        return Images;
    }());
    exports.Images = Images;
});
