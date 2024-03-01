import Brew from "./core/brew.js";

/** @type Brew */
let instance = null;

/** @param root { HTMLElement } */
export default function brew(root) {
    if (!instance) {
        instance = new Brew(root);
    }
    return instance;
}