/// <reference path="./_all.d.ts" />

import GameData from "./data/GameData";

export default class Utils {
    public static shuffle(array): any[] {
        let arr = this.clone(array) as any[];
        let currentIndex: number = arr.length;
        let temporaryValue;
        let randomIndex: number;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(GameData.seedRandom() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }

        return arr;
    }

    public static clone(object) {
        return JSON.parse(JSON.stringify(object));
    }

    public static colorLuminance(hex: string, lum: number) {

        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;

        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }

        return rgb;
    }
}