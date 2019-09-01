import Level from "./Level";

export default class Player {
    public id = -1;
    public hp: number = 50;
    public inventoryObjIDs = [];
    public char = "@";
    public isRunning = false;
    public isStealthy = false;
    public isPushing = false;
    public isPulling = false;
    constructor() {

    }

    public update(command: string) {
        let posID = this.id;
        Level.entitylayer[this.id] = null;
        let pullPosID;
        let pushPosID;
        let toPushID;
        console.log("pre", this.id, this.x, this.y)
        switch (command) {
            case "right":
                posID = Level.xyToID(this.x + 1, this.y);
                pullPosID = Level.xyToID(this.x - 1, this.y);
                pushPosID = Level.xyToID(this.x + 1, this.y);
                toPushID = Level.xyToID(this.x + 2, this.y);
                break;
            case "left":
                posID = Level.xyToID(this.x - 1, this.y);
                pullPosID = Level.xyToID(this.x + 1, this.y);
                pushPosID = Level.xyToID(this.x - 1, this.y);
                toPushID = Level.xyToID(this.x - 2, this.y);
                break;
            case "up":
                posID = Level.xyToID(this.x, this.y - 1);
                pullPosID = Level.xyToID(this.x, this.y + 1);
                pushPosID = Level.xyToID(this.x, this.y - 1);
                toPushID = Level.xyToID(this.x, this.y - 2);
                break;
            case "down":
                posID = Level.xyToID(this.x, this.y + 1);
                pullPosID = Level.xyToID(this.x, this.y - 1);
                pushPosID = Level.xyToID(this.x, this.y + 1);
                toPushID = Level.xyToID(this.x, this.y + 2);
                break;
        }
        if (Level.isWalkable(posID)) {
            if (this.isPulling) {
                if (Level.isPushable(pullPosID)) {
                    Level.pull(pullPosID, this.id);
                }
            }
            this.id = posID;
        } else {
            if (this.isPushing) {
                if (Level.isPushable(pushPosID) && Level.isWalkable(toPushID)) {
                    Level.push(pushPosID, toPushID);
                }
                this.id = posID;
            }
        }
        console.log("here", this.id);
        Level.entitylayer[this.id] = this.char;
    }

    public get x(): number {
        return Level.idToX(this.id);
    }

    public get y(): number {
        return Level.idToY(this.id);
    }

    public setPos(x, y) {
        this.id = Level.xyToID(x, y);
    }
}