import '@jest/globals';
import Brew from "../src";
describe('index.js', () => {

    test('Upon bootstrap, canvas should use canvas-id given by user.', () => {
        const expectedCanvasId = 'poop';
        const root = document.createElement('DIV');
        const brew = Brew(root, expectedCanvasId);

        expect(brew.canvasElement.id)
            .toBe(expectedCanvasId);
    });

});