import '@jest/globals';
import Brew from "../src/core/brew";
describe('brew.js', () => {

    test('Instantiate class with given root-element', () => {
        const rootElement = document.createElement('div');
        const brew = new Brew(rootElement);
        expect(brew.rootElement)
            .toBe(rootElement);
    });

});