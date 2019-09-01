import Utils from "../Utils";
import { Config } from "./Config";
import Player from "./Player";

export default class GameData {
    private static HEALTH_AT_START = 50;
    public static MAX_ARTEFACTS = 3;
    public static health = 0;
    public static maxHealth = 0;
    public static version: string = "";
    public static XP = 0;
    public static inGame = false;
    private static toSave = ["seed", "inGame", "inBattle", "health", "maxHealth",
        "XP", "version"];
    public static seed;
    public static seedRandom;
    public static player: Player;

    public static newGame() {
        this.health = this.HEALTH_AT_START;
        this.maxHealth = this.HEALTH_AT_START;
        this.version = Config.version;
        this.player = new Player();

        this.seed = Math.floor(Math.random() * 1000000);

    }

    public static fakeGame() {
        this.health = this.HEALTH_AT_START;
        this.maxHealth = this.HEALTH_AT_START;
        this.version = Config.version;
        this.player = new Player();

        this.seed = Math.floor(GameData.seedRandom() * 1000000);

    }

    public static save() {
        for (let i = 0; i < this.toSave.length; i++) {
            localStorage.setItem(this.toSave[i], JSON.stringify(this[this.toSave[i]]));
        }
    }

    public static load() {
        if (localStorage.getItem("inGame") != undefined) {
            for (let i = 0; i < this.toSave.length; i++) {
                if (localStorage.getItem(this.toSave[i]) != "undefined") {
                    this[this.toSave[i]] = JSON.parse(localStorage.getItem(this.toSave[i]));
                } else {
                    console.log(this.toSave[i] + " was not loaded as it is undefined");
                }
            }
        } else {
            console.log("No savegame to load yet.");
        }
        this.seedRandom = window["seedrandom"](this.seed);
    }
}