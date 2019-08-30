import { Config } from "./Config";

export default class Strings {
    public static EN = {
        victory: "Victory!",
        rewards: "Now pick your rewards",
    };
    public static NL = {

    };

    public static getString(key: string): string {
        let rtn: string;
        if (Strings[Config.language].hasOwnProperty(key)) {
            rtn = Strings[Config.language][key];
        } else {
            console.log("TRANSLATE " + key + " INTO " + Config.language);
            rtn = Strings["EN"][key];
        }
        return rtn;
    }
}