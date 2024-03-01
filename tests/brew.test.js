import '@jest/globals';
import Brew from "../src/core/brew";
describe('brew.js', () => {

    test('Should throw exception when init without a root element.', () => {
        expect(() => {
            new Brew();
        }).toThrow(Error);
    });

    test('Instantiate class with no canvas ID works', () => {
        const rootElement = document.createElement('div');
        const brew = new Brew(rootElement);
        expect(brew)
            .toBeInstanceOf(Brew);
    });

    test('Instantiate class with given root-element is the same', () => {
        const rootElement = document.createElement('div');
        const brew = new Brew(rootElement, 'canvasID');
        expect(brew.rootElement)
            .toBe(rootElement);
    });

    test('Instantiate class with given canvas id is the same', () => {
        const rootElement = document.createElement('div');
        const canvasID = 'poop';
        const brew = new Brew(rootElement, canvasID);
        expect(brew.canvasElement.id)
            .toBe(canvasID);
    });

    test('Instantiate class mounts canvas onto root correctly', () => {
        const rootElement = document.createElement('div');
        const canvasID = 'poop';
        const brew = new Brew(rootElement, canvasID);
        expect(brew.rootElement.firstChild)
            .toBe(brew.canvasElement);
    });

});