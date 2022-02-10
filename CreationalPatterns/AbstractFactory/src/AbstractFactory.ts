import AbstractProductA from 'ProductA';
import { ConcreteProductA1, ConcreteProductA2 } from 'ProductA';
import AbstractProductB from 'ProductB';
import { ConcreteProductB1, ConcreteProductB2 } from 'ProductB';

export default interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}

export class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

export class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}