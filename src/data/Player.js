define(["require", "exports", "./Level"], function (require, exports, Level_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = (function () {
        function Player() {
            this.id = -1;
            this.hp = 50;
            this.inventoryObjIDs = [];
            this.char = "@";
            this.isRunning = false;
            this.isStealthy = false;
            this.isPushing = false;
            this.isPulling = false;
        }
        Player.prototype.update = function (command) {
            var posID = this.id;
            Level_1.default.entitylayer[this.id] = null;
            var pullPosID;
            var pushPosID;
            var toPushID;
            console.log("pre", this.id, this.x, this.y);
            switch (command) {
                case "right":
                    posID = Level_1.default.xyToID(this.x + 1, this.y);
                    pullPosID = Level_1.default.xyToID(this.x - 1, this.y);
                    pushPosID = Level_1.default.xyToID(this.x + 1, this.y);
                    toPushID = Level_1.default.xyToID(this.x + 2, this.y);
                    break;
                case "left":
                    posID = Level_1.default.xyToID(this.x - 1, this.y);
                    pullPosID = Level_1.default.xyToID(this.x + 1, this.y);
                    pushPosID = Level_1.default.xyToID(this.x - 1, this.y);
                    toPushID = Level_1.default.xyToID(this.x - 2, this.y);
                    break;
                case "up":
                    posID = Level_1.default.xyToID(this.x, this.y - 1);
                    pullPosID = Level_1.default.xyToID(this.x, this.y + 1);
                    pushPosID = Level_1.default.xyToID(this.x, this.y - 1);
                    toPushID = Level_1.default.xyToID(this.x, this.y - 2);
                    break;
                case "down":
                    posID = Level_1.default.xyToID(this.x, this.y + 1);
                    pullPosID = Level_1.default.xyToID(this.x, this.y - 1);
                    pushPosID = Level_1.default.xyToID(this.x, this.y + 1);
                    toPushID = Level_1.default.xyToID(this.x, this.y + 2);
                    break;
            }
            if (Level_1.default.isWalkable(posID)) {
                if (this.isPulling) {
                    if (Level_1.default.isPushable(pullPosID)) {
                        Level_1.default.pull(pullPosID, this.id);
                    }
                }
                this.id = posID;
            }
            else {
                if (this.isPushing) {
                    if (Level_1.default.isPushable(pushPosID) && Level_1.default.isWalkable(toPushID)) {
                        Level_1.default.push(pushPosID, toPushID);
                    }
                    this.id = posID;
                }
            }
            console.log("here", this.id);
            Level_1.default.entitylayer[this.id] = this.char;
        };
        Object.defineProperty(Player.prototype, "x", {
            get: function () {
                return Level_1.default.idToX(this.id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "y", {
            get: function () {
                return Level_1.default.idToY(this.id);
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype.setPos = function (x, y) {
            this.id = Level_1.default.xyToID(x, y);
        };
        return Player;
    }());
    exports.default = Player;
});
