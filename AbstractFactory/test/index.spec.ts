import { expect } from 'chai';

import Client from "index";
import ContentFactory, { WinContentFactory, MacContentFactory } from 'ContentFactory';

function createClient(factory: ContentFactory):Client {
    const client = new Client(factory);
    return client;
}

describe("content factory test:", function () {
    it("create client on Windows", function () {
        // 
    });
    it("create client on Mac", function () {
        // 
    })
});