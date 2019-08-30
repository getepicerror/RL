import Level from "./Level";

export default class LevelGenerator {
    public static generateLevel() {
        let lvl = [];
        for (let i = 0; i < 80; i++) {
            for (let j = 0; j < 32; j++) {
                let id = Level.xyToID(i, j);
                lvl[id] = " ";
            }
        }
        for (let i = 10; i < 40; i++) {
            for (let j = 5; j < 18; j++) {
                let id = Level.xyToID(i, j);
                if (i == 10 || i == 39 || j == 5 || j == 17) {
                    lvl[id] = "#";
                } else {
                    lvl[id] = ".";
                }
            }
        }
        return lvl;
    }
}