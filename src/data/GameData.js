define(["require", "exports", "./Config", "./Player"], function (require, exports, Config_1, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameData = (function () {
        function GameData() {
        }
        GameData.newGame = function () {
            this.health = this.HEALTH_AT_START;
            this.maxHealth = this.HEALTH_AT_START;
            this.version = Config_1.Config.version;
            this.player = new Player_1.default();
            this.seed = Math.floor(Math.random() * 1000000);
        };
        GameData.fakeGame = function () {
            this.health = this.HEALTH_AT_START;
            this.maxHealth = this.HEALTH_AT_START;
            this.version = Config_1.Config.version;
            this.player = new Player_1.default();
            this.seed = Math.floor(GameData.seedRandom() * 1000000);
        };
        GameData.save = function () {
            for (var i = 0; i < this.toSave.length; i++) {
                localStorage.setItem(this.toSave[i], JSON.stringify(this[this.toSave[i]]));
            }
        };
        GameData.load = function () {
            if (localStorage.getItem("inGame") != undefined) {
                for (var i = 0; i < this.toSave.length; i++) {
                    if (localStorage.getItem(this.toSave[i]) != "undefined") {
                        this[this.toSave[i]] = JSON.parse(localStorage.getItem(this.toSave[i]));
                    }
                    else {
                        console.log(this.toSave[i] + " was not loaded as it is undefined");
                    }
                }
            }
            else {
                console.log("No savegame to load yet.");
            }
            this.seedRandom = window["seedrandom"](this.seed);
        };
        GameData.HEALTH_AT_START = 50;
        GameData.MAX_ARTEFACTS = 3;
        GameData.health = 0;
        GameData.maxHealth = 0;
        GameData.version = "";
        GameData.XP = 0;
        GameData.inGame = false;
        GameData.toSave = ["seed", "inGame", "inBattle", "health", "maxHealth",
            "XP", "version"];
        return GameData;
    }());
    exports.default = GameData;
});
