import Prototype from 'Prototype';

export default class PrototypeRegistry {
    private _items: Prototype[];
    private _id: number;

    constructor() {
        this._items = [];
        this._id = 1;
    }

    public addItem(prototype: Prototype) {
        prototype.id = this._id;
        prototype.name = prototype.name + ` ${this._id}`;
        this._items.push(prototype);
        this._id = this._id + 1;
    }

    public getItemById(id: number) {
        return this._items[id];
    }
}