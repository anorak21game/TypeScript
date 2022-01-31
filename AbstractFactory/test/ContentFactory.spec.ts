import { expect } from 'chai';

import Client from "Client";
import ContentFactory, { WinContentFactory, MacContentFactory } from 'ContentFactory';

function createClient(factory: ContentFactory):Client {
    const client = new Client(factory);
    return client;
}

describe("client test:", function () {
    it("create client on Windows", function () {
        expect(createClient(new WinContentFactory())).to.be.an.instanceOf(Client);
    });
    it("create client on Mac", function () {
        expect(createClient(new MacContentFactory())).to.be.an.instanceOf(Client);
    })
});