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
}