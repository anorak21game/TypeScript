import { ConcretePrototype, ComponentWithBackReference } from 'Prototype';
import PrototypeRegistry from 'PrototypeRegistry';

function timer(code: any, time: number) {
    setTimeout(function () {return code}, time);
}

function clientCode() {
    const prototypeRegistry = new PrototypeRegistry();

    const prototype = new ConcretePrototype();
    prototype.primitive = 964585661741;

    timer(prototypeRegistry.addItem(prototype.clone()), 0);
    timer(prototypeRegistry.addItem(prototype.clone()), 50000);

    const prototypeClone1 = prototypeRegistry.getItemById(0);
    const prototypeClone2 = prototypeRegistry.getItemById(1);

    console.log(prototypeClone1);
    console.log(prototypeClone2);

    if (prototypeClone1.primitive === prototypeClone2.primitive) {
        console.log('Primitive field values have been carried over to a clone. Yay!');
    } else {
        console.log('Primitive field values have not been copied. Booo!');
    }
    if (prototypeClone1.component === prototypeClone2.component) {
        console.log('Simple component has not been cloned. Booo!');
    } else {
        console.log('Simple component has been cloned. Yay!');
    }

    if (prototypeClone1.circularReference === prototypeClone2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    } else {
        console.log('Component with back reference has been cloned. Yay!');
    }

    if (prototypeClone1.circularReference.prototype.component === prototypeClone2.circularReference.prototype.component) {
        console.log('Component with back reference is linked to original object. Booo!');
    } else {
        console.log('Component with back reference is linked to the clone and own clone time. Yay!');
    }
}

clientCode();