import Product1 from 'Product1';

//  Builder
 
export default interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
    getProduct(): any;
}

//  Concrete Builder

export class ConcreteBuilder1 implements Builder {
    private product!: Product1;
    typeOfPrinting!: string;

    constructor() {
        this.reset();
    }
    
    public reset(): void {
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}