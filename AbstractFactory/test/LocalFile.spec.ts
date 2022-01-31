import { expect } from 'chai';

import ContentFactory, { WinContentFactory, MacContentFactory } from 'ContentFactory';
import { WinLocalFile, MacLocalFile } from 'LocalFile';

describe("local file test:", function () {
    it("create local file on Windows", function () {
        const contentFactory: ContentFactory = new WinContentFactory();
        expect(contentFactory.createLocalFile()).to.be.an.instanceOf(WinLocalFile);
    });
    it("create local file on Mac", function () {
        const contentFactory: ContentFactory = new MacContentFactory();
        expect(contentFactory.createLocalFile()).to.be.an.instanceOf(MacLocalFile);
    });
});