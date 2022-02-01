import { expect } from 'chai';

import Client from 'index';
import PostcardBuilder, { BlackAndWhitePostcardBuilder, ColoredPostcardBuilder } from 'PostcardBuilder';

function createClient(builder: PostcardBuilder):Client {
    const client = new Client(builder);
    return client;
}

describe("postcard builder test:", function () {
    it("create BlackAndWhite postcard", function () {
        // 
    });
    it("create colored postcard", function () {
        // 
    });
});