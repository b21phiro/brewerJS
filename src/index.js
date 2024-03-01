import Brew from "./core/brew.js";

/** @type Brew */
let instance = null;

/** @param root { HTMLElement } */
export default function brew(root) {
    if (!root) {
        throw new Error("[Brew]: A root element to mount the canvas onto is required, however none was given!");
    }
    if (!instance) {
        instance = new Brew(root);
    }
    return instance;
}