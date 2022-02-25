export default interface Prototype {
    name: string;
    id: number;
    config: any;
    creationTime: object;
    circularReference: ComponentWithBackReference;
    clone(): object;
}

export class ConcretePrototypeA implements Prototype {
    public name: string;
    public id: number;
    public config: any;
    public creationTime!: object;
    public circularReference: ComponentWithBackReference;

    constructor() {
        this.name = "Prototype A";
        this.id = 0;
        this.config = 0;
        this.creationTime = new Date();
        this.circularReference = new ComponentWithBackReference(this);
    }

    private newDate():object {
        return this.creationTime = new Date();
    }

    public clone(): this {
        const clone = Object.create(this);

        clone.creationTime = Object.create(this.newDate());

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

export class ConcretePrototypeB implements Prototype {
    public name: string;
    public id: number;
    public config: any;
    public creationTime!: object;
    public circularReference!: ComponentWithBackReference;

    constructor() {
        this.name = "Prototype B";
        this.id = 0;
        this.config = 0;
        this.creationTime = new Date();
        this.circularReference = new ComponentWithBackReference(this);
    }

    private newDate():object {
        return this.creationTime = new Date();
    }

    public clone(): this {
        const clone = Object.create(this);

        clone.creationTime = Object.create(this.newDate());

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