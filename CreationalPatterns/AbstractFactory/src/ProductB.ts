import ProductA from 'ProductA';

export default interface ProductB {
    usefulFunctionB(): string;

    anotherUsefulFunctionB(collaborator: ProductA): string;
}

export class ConcreteProductB1 implements ProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B1.';
    }

    public anotherUsefulFunctionB(collaborator: ProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

export class ConcreteProductB2 implements ProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B2.';
    }

    public anotherUsefulFunctionB(collaborator: ProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}