export default interface ProductA {
    usefulFunctionA(): string;
}

export class ConcreteProductA1 implements ProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}

export class ConcreteProductA2 implements ProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2.';
    }
}