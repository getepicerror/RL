import LevelGenerator from "./LevelGenerator";
import Utils from "../Utils";
import Player from "./Player";
import GameData from "./GameData";
import Objects from "./Objects";
import GameObject from "./GameObject";
import Door from "./Door";

export default class Level {
    public static updated: number[] = [];
    public static floor = [];
    public static objectlayer = [];
    public static bloodlayer = [];
    public static entitylayer = [];
    public static gassfirelayer = [];
    public static level = [];
    public static rememberlayer = [];
    public static objects = [];
    public static entities = [];
    public static seen: number[] = [];
    public static seeing: number[] = [];
    public static nonWalkable: string[] = ["#", "0"];
    public static objectChars: string[] = ["0"];
    public static entityChars: string[] = ["B", "M"];
    public static pushable: string[] = ["0", "/"];
    public static player;
    public static playerX = 15;
    public static playerY = 15;
    public static init() {
        this.floor = LevelGenerator.generateLevel();

        GameData.player.id = this.xyToID(15, 15);

        let barrel = new GameObject(Objects.BARREL);
        barrel.id = this.xyToID(20, 15);
        this.objects.push(barrel);

        let door = new Door();
        door.id = this.xyToID(39, 12);
        this.floor[door.id] = door.char;
        this.update("");
    }

    public static update(playerCommand: string) {
        this.level = Utils.clone(this.floor);
        // this.updated = [];
        GameData.player.update(playerCommand);
        this.updateBack();
        this.updateObjects();
        this.updateEntities();

    }

    public static updateBack() {
        //Gases, explosions and fire.
    }

    public static updateObjects() {
        this.objectlayer = [];
        for (let object of this.objects) {
            this.objectlayer[object.id] = object.char;
        }
    }

    public static updateEntities() {
        for (let entity of this.entities) {
            entity.update();
        }
    }

    public static typeAt(id): string {
        let char = this.result[id];
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
    }

    public static isWalkable(id: number): boolean {
        let char = this.result[id];
        return this.nonWalkable.indexOf(char) == -1;
    }

    public static isPushable(id: number): boolean {
        let char = this.result[id];
        return this.pushable.indexOf(char) > -1;
    }

    public static get result(): string[] {
        let result = Utils.clone(this.floor);
        for (let i = 0; i < result.length; i++) {
            if (this.entitylayer[i]) {
                result[i] = this.entitylayer[i];
            } else if (this.objectlayer[i]) {
                result[i] = this.objectlayer[i];
            }
        }
        return result;
    }

    public static pull(objectPosID: number, toPosID: number) {
        for (let object of this.objects) {
            console.log(object);
            if (object.id == objectPosID) {
                if (object instanceof Door) {
                    object.isOpen = !object.isOpen;
                } else {
                    object.id = toPosID;
                }
            }
        }
    }

    public static push(objectPosID: number, toPosID: number) {
        for (let object of this.objects) {
            if (object.id == objectPosID) {
                if (object instanceof Door) {
                    object.isOpen = !object.isOpen;
                } else {
                    object.id = toPosID;
                }
            }
        }
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