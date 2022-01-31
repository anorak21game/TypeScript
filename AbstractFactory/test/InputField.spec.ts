import { expect } from 'chai';

import ContentFactory, { WinContentFactory, MacContentFactory } from 'ContentFactory';
import { WinInputField, MacInputField } from 'InputField';

describe("input field test:", function () {
    it("create input field on Windows", function () {
        const contentFactory: ContentFactory = new WinContentFactory();
        expect(contentFactory.createInputField()).to.be.an.instanceOf(WinInputField);
    });
    it("create input field on Mac", function () {
        const contentFactory: ContentFactory = new MacContentFactory();
        expect(contentFactory.createInputField()).to.be.an.instanceOf(MacInputField);
    });
});