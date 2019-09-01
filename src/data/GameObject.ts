export default class GameObject {
    public char = "";
    public id;
    public name;
    public knownName;
    constructor(initObject) {
        this.char = initObject.char;
        this.name = initObject.name;
        this.knownName = initObject.knownName;
    }
}