import { ConcretePrototypeA, ConcretePrototypeB } from 'Prototype';
import PrototypeRegistry from 'PrototypeRegistry';

function timer(code: any, time: number) {
    setTimeout(function () {return code}, time);
}

function clientCode() {
    const prototypeRegistry = new PrototypeRegistry();

    const prototypeA = new ConcretePrototypeA();
    prototypeA.data = 123456789;

    const prototypeB = new ConcretePrototypeB();
    prototypeB.data = 987654321;

    timer(prototypeRegistry.addItem(prototypeA.clone()), 0);
    timer(prototypeRegistry.addItem(prototypeA.clone()), 50000);
    timer(prototypeRegistry.addItem(prototypeB.clone()), 50000);

    const prototypeCloneA1 = prototypeRegistry.getItemById(0);
    const prototypeCloneA2 = prototypeRegistry.getItemById(1);
    const prototypeCloneB3 = prototypeRegistry.getItemById(2);

    console.log(prototypeCloneA1);
    console.log(prototypeCloneA2);
    console.log(prototypeCloneB3);

    if (prototypeCloneA1.data === prototypeCloneA2.data) {
        console.log('data field values have been carried over to a clone. Yay!');
    } else {
        console.log('data field values have not been copied. Booo!');
    }

    if (prototypeCloneA1.data === prototypeCloneB3.data) {
        console.log('Clone A and B have been the same data value. Booo!');
    } else {
        console.log('Clone A and B have not been the same data value. Yay!');
    }

    if (prototypeCloneA1.component === prototypeCloneA2.component) {
        console.log('Simple component has not been cloned. Booo!');
    } else {
        console.log('Simple component has been cloned. Yay!');
    }

    if (prototypeCloneA1.circularReference === prototypeCloneA2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    } else {
        console.log('Component with back reference has been cloned. Yay!');
    }

    if (prototypeCloneA1.circularReference.prototype.component === prototypeCloneA2.circularReference.prototype.component) {
        console.log('Component with back reference is linked to original object. Booo!');
    } else {
        console.log('Component with back reference is linked to the clone and own clone time. Yay!');
    }
}

clientCode();