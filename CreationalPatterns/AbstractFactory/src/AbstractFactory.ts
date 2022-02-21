import ProductA from 'ProductA';
import { ConcreteProductA1, ConcreteProductA2 } from 'ProductA';
import ProductB from 'ProductB';
import { ConcreteProductB1, ConcreteProductB2 } from 'ProductB';

export default interface AbstractFactory {
    createProductA(): ProductA;

    createProductB(): ProductB;
}

export class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): ProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): ProductB {
        return new ConcreteProductB1();
    }
}

export class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): ProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): ProductB {
        return new ConcreteProductB2();
    }
}