import PostcardBuilder from 'PostcardBuilder';

// Director

export default class Director {
    private builder!: PostcardBuilder;

    public setBuilder(builder: PostcardBuilder): void {
        this.builder = builder;
    }

    public makeBasicPostcard(): void {
        this.builder.setTwoSidePrinting();
    }

    public makePremiumPostcard(): void {
        this.builder.setGloss();
        this.builder.setRoundEdges();
        this.builder.setTwoSidePrinting();
    }
}