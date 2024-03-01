import Brew from "./core/brew.js";

/** @type Brew */
let instance = null;

/**
 * @param root { HTMLElement }
 * @param canvasID { string }
 */
export default function brew(root, canvasID = "") {
    if (!instance) {
        instance = new Brew(root, canvasID);
    }
    return instance;
}