export default class Brew {

    /** @type HTMLElement */
    rootElement = null;

    /** @type HTMLCanvasElement */
    canvasElement = null;

    /** @type WebGL2RenderingContext */
    canvasContext = null;

    /**
     * @param rootElement { HTMLElement }
     */
    constructor(rootElement) {

        // Sets the root element.
        this.rootElement = rootElement;

        // Setup canvas element.
        this.initCanvasElement();

        // Ensure that the context is set.
        if (!this.canvasContext) {
            console.error("[Brew] Failed to set correct context for the canvas element!");
            return false;
        }

        // Ready!

    }

    /**
     * Creates a canvas element and mounts it onto the given root element.
     */
    initCanvasElement() {
        const canvas = document.createElement('canvas');
        const id = 'canvas';
        canvas.id = id;
        canvas.width = 740;
        canvas.height = 540;

        this.rootElement.insertAdjacentElement('afterbegin', canvas);

        const element = document.getElementById(id);
        this.canvasElement = element;

        this.canvasContext = element.getContext('webgl2');

    }

}