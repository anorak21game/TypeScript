
export default interface Prototype {
    name: string;
    id: number;
    data: any;
    component: object;
    circularReference: ComponentWithBackReference;
    clone(): object;
}

export class ConcretePrototypeA {
    public name: string;
    public id: number;
    public data: any;
    public component!: object;
    public circularReference: ComponentWithBackReference;

    constructor() {
        this.name = "Prototype A";
        this.id = 0;
        this.data = 0;
        this.component = new Date();
        this.circularReference = new ComponentWithBackReference(this);
    }

    private newDate():object {
        return this.component = new Date();
    }

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.newDate());

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

export class ConcretePrototypeB {
    public name: string;
    public id: number;
    public data: any;
    public component!: object;
    public circularReference!: ComponentWithBackReference;

    constructor() {
        this.name = "Prototype B";
        this.id = 0;
        this.data = 0;
        this.component = new Date();
        this.circularReference = new ComponentWithBackReference(this);
    }

    private newDate():object {
        return this.component = new Date();
    }

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.newDate());

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

export class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}