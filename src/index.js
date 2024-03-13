import Brew from "./core/brew.js";

/**
 * The bootstrapper creates an instance of the Brew class.
 * It knows how to properly initiate the library correctly.
 */

/** Prevents certain actions from being taken and throws more exceptions. */
'use strict';

/** @type Brew */
let instance = null;

/**
 * @param root { HTMLElement }
 */
export default function brewInstance(root) {

    // Throws error if ni root element was given.
    if (!root) {
        console.error("[BrewJS] Failed to bootstrap, as no root element was given to mount the canvas on!");
        return false;
    }

    // Creates an instance if non has been made allready.
    if (!instance) {
        instance = new Brew(root);
    }

    return instance;

}