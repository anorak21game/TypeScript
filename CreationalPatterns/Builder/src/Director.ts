import Builder from 'Builder';

// Director

export default class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.buildStepA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.buildStepA();
        this.builder.buildStepB();
        this.builder.buildStepC();
    }
}