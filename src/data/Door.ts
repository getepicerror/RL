export default class Door {
    public id;
    public isOpen = false;
    constructor() {

    }

    public get char(): string {
        if (this.isOpen) {
            return "/";
        } else {
            return "+";
        }
    }
}