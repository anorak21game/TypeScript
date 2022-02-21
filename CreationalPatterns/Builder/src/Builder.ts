export default interface Builder {
    buildStepA(): void;
    buildStepB(): void;
    buildStepC(): void;
    getProduct(): any;
}

export class ConcreteBuilder implements Builder {
    private product!: Product;

    constructor() {
        this.reset();
    }
    
    public reset(): void {
        this.product = new Product();
    }

    public buildStepA(): void {
        this.product.steps.push('PartA1');
    }

    public buildStepB(): void {
        this.product.steps.push('PartB1');
    }

    public buildStepC(): void {
        this.product.steps.push('PartC1');
    }

    public getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product {
    public steps: string[] = [];

    public listSteps(): void {
        console.log(`Product steps: ${this.steps.join(', ')}\n`);
    }
}