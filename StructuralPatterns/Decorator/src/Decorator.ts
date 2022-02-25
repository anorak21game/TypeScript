import Component from './Component';

export default class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

export class ScrollDecorator extends Decorator {
    public operation(): string {
        return `ScrollDecorator(${super.operation()})`;
    }
}

export class BorderDecorator extends Decorator {
    public operation(): string {
        return `BorderDecorator(${super.operation()})`;
    }
}