/// <reference path="../_all.d.ts" />

export class Config {
    public static SCALING_FACTOR = 1;
    public static language = "EN";
    public static renderer;
    public static loader;
    public static left = 0;
    public static right = 0;
    public static bottom = 0;
    public static top = 0;
    public static version = "0.0.1";
    public static targetFPS = 60;
    public static isIPAD = false;
    public static get width() {
        return Config.right;
    }
    public static get height() {
        return Config.bottom;
    }

    public static get middleX() {
        return Config.right / 2;
    }

    public static get middleY() {
        return Config.bottom / 2;
    }

    public static get factor() {
        return this.bottom / this.right;
    }
}