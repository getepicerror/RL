import LevelGenerator from "./LevelGenerator";

export default class Level {
    public static updated: number[] = [];
    public static level = [];
    public static objects = [];
    public static entities = [];
    public static seen: number[] = [];
    public static seeing: number[] = [];
    public static nonWalkable: string[] = ["#"];
    public static init() {
        this.level = LevelGenerator.generateLevel();
    }

    public static update() {
        this.updated = [];
        this.updateBack();
        this.updateEntities();
    }

    public static updateBack() {
        //Gases, explosions and fire.
    }

    public static updateEntities() {

    }

    public static idToX(id): number {
        return id % 80;
    }
    public static idToY(id): number {
        return Math.floor(id / 80);
    }

    public static xyToID(x, y): number {
        return y * 80 + x;
    }
}