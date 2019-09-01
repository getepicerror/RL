define(["require", "exports", "./LevelGenerator", "../Utils", "./GameData", "./Objects", "./GameObject", "./Door"], function (require, exports, LevelGenerator_1, Utils_1, GameData_1, Objects_1, GameObject_1, Door_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Level = (function () {
        function Level() {
        }
        Level.init = function () {
            this.floor = LevelGenerator_1.default.generateLevel();
            GameData_1.default.player.id = this.xyToID(15, 15);
            var barrel = new GameObject_1.default(Objects_1.default.BARREL);
            barrel.id = this.xyToID(20, 15);
            this.objects.push(barrel);
            var door = new Door_1.default();
            door.id = this.xyToID(39, 12);
            this.floor[door.id] = door.char;
            this.update("");
        };
        Level.update = function (playerCommand) {
            this.level = Utils_1.default.clone(this.floor);
            GameData_1.default.player.update(playerCommand);
            this.updateBack();
            this.updateObjects();
            this.updateEntities();
        };
        Level.updateBack = function () {
        };
        Level.updateObjects = function () {
            this.objectlayer = [];
            for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
                var object = _a[_i];
                this.objectlayer[object.id] = object.char;
            }
        };
        Level.updateEntities = function () {
            for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
                var entity = _a[_i];
                entity.update();
            }
        };
        Level.typeAt = function (id) {
            var char = this.result[id];
            if (char) {
                if (char == "#") {
                    return "wall";
                }
                if (this.entityChars.indexOf(char) > -1) {
                    return "entity";
                }
                if (this.objectChars.indexOf(char) > -1) {
                    return "object";
                }
            }
        };
        Level.isWalkable = function (id) {
            var char = this.result[id];
            return this.nonWalkable.indexOf(char) == -1;
        };
        Level.isPushable = function (id) {
            var char = this.result[id];
            return this.pushable.indexOf(char) > -1;
        };
        Object.defineProperty(Level, "result", {
            get: function () {
                var result = Utils_1.default.clone(this.floor);
                for (var i = 0; i < result.length; i++) {
                    if (this.entitylayer[i]) {
                        result[i] = this.entitylayer[i];
                    }
                    else if (this.objectlayer[i]) {
                        result[i] = this.objectlayer[i];
                    }
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Level.pull = function (objectPosID, toPosID) {
            for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
                var object = _a[_i];
                console.log(object);
                if (object.id == objectPosID) {
                    if (object instanceof Door_1.default) {
                        object.isOpen = !object.isOpen;
                    }
                    else {
                        object.id = toPosID;
                    }
                }
            }
        };
        Level.push = function (objectPosID, toPosID) {
            for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
                var object = _a[_i];
                if (object.id == objectPosID) {
                    if (object instanceof Door_1.default) {
                        object.isOpen = !object.isOpen;
                    }
                    else {
                        object.id = toPosID;
                    }
                }
            }
        };
        Level.idToX = function (id) {
            return id % 80;
        };
        Level.idToY = function (id) {
            return Math.floor(id / 80);
        };
        Level.xyToID = function (x, y) {
            return y * 80 + x;
        };
        Level.updated = [];
        Level.floor = [];
        Level.objectlayer = [];
        Level.bloodlayer = [];
        Level.entitylayer = [];
        Level.gassfirelayer = [];
        Level.level = [];
        Level.rememberlayer = [];
        Level.objects = [];
        Level.entities = [];
        Level.seen = [];
        Level.seeing = [];
        Level.nonWalkable = ["#", "0"];
        Level.objectChars = ["0"];
        Level.entityChars = ["B", "M"];
        Level.pushable = ["0", "/"];
        Level.playerX = 15;
        Level.playerY = 15;
        return Level;
    }());
    exports.default = Level;
});
