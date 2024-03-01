import '@jest/globals';
import Brew from "../src/core/brew";
describe('brew.js', () => {

    test('Should throw exception when init without a root element.', () => {
        expect(() => {
            new Brew();
        }).toThrow(Error);
    });

    test('Instantiate class with given root-element is the same', () => {
        const rootElement = document.createElement('div');
        const brew = new Brew(rootElement);
        expect(brew.rootElement)
            .toBe(rootElement);
    });

    test('Instantiate class with given canvas id is the same', () => {
        const rootElement = document.createElement('div');
        const canvasID = 'canvas';
        const brew = new Brew(rootElement, canvasID);
        expect(brew.canvasElement.id)
            .toBe(canvasID);
    });

});