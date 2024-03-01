export default class Brew {

    /** @type HTMLElement */
    rootElement = null;

    /** Default ID for the canvas element. */
    canvasElementIDDefault = "brewCanvas";

    /** @type string */
    canvasElementID = "";

    /** @type HTMLElement */
    canvasElement = null;

    /** @type Number */
    canvasWidth = 720;
    /** @type Number */
    canvasHeight = 540;

    /**
     * @param rootElement { HTMLElement }
     * @param canvasElementID { string }
     */
    constructor(rootElement, canvasElementID = "") {

        // Throw error if no root-element was given.
        if (!rootElement) {
            throw new Error("[Brew] Requires an element to mount the \"<canvas>\" element on but no element was given!");
        }

        // Set the root element to the given element.
        this.rootElement = rootElement;

        // Prepare the canvas element.
        // If no id is given, set default canvas id.
        this.canvasElement = document.createElement('canvas');
        this.canvasElementID = (canvasElementID !== '')
            ? canvasElementID
            : this.canvasElementIDDefault;
        this.canvasElement.id = canvasElementID;

        // Sets the width and height of the canvas.
        this.canvasElement.width = this.canvasWidth;
        this.canvasElement.height = this.canvasHeight;

        // Clear the root element upon mounting.
        while(rootElement.children.firstChild) {
            rootElement.children.removeChild(
              rootElement.children.lastChild
            );
        }
        // Mounts the canvas onto given root-element.
        rootElement.insertAdjacentElement('afterbegin', this.canvasElement);

    }

}