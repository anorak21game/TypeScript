import Director from 'Director';
import PostcardBuilder, { BlackAndWhitePostcardBuilder, ColoredPostcardBuilder} from 'PostcardBuilder';

// Client

export default class Client {
    director: Director;
    public builder: PostcardBuilder;

    constructor(builder: PostcardBuilder) {
        this.builder = builder;
        this.director = new Director();
        this.director.setBuilder(this.builder);
    }

    public makePostcard() {
        console.log(`Basic ${this.builder.getPrintType()}:`);
        this.director.makeBasicPostcard();
        this.builder.getPostcard().listHighlights();

        console.log(`Premium ${this.builder.getPrintType()}:`);
        this.director.makePremiumPostcard();
        this.builder.getPostcard().listHighlights();
    }
}

const client1 = new Client(new BlackAndWhitePostcardBuilder());
client1.makePostcard();

const client2 = new Client(new ColoredPostcardBuilder());
client2.makePostcard();
