import { ConcretePrototypeA, ConcretePrototypeB } from 'Prototype';
import PrototypeRegistry from 'PrototypeRegistry';

function timer(code: any, time: number) {
    setTimeout(function () {return code}, time);
}

export function clientCode() {
    const prototypeRegistry = new PrototypeRegistry();

    const prototypeA = new ConcretePrototypeA();
    prototypeA.config = 123456789;

    const prototypeB = new ConcretePrototypeB();
    prototypeB.config = 987654321;

    timer(prototypeRegistry.addItem(prototypeA.clone()), 0);
    timer(prototypeRegistry.addItem(prototypeA.clone()), 50000);
    timer(prototypeRegistry.addItem(prototypeB.clone()), 50000);

    const prototypeCloneA1 = prototypeRegistry.getItemById(0);
    const prototypeCloneA2 = prototypeRegistry.getItemById(1);
    const prototypeCloneB3 = prototypeRegistry.getItemById(2);

    console.log(prototypeCloneA1);
    console.log(prototypeCloneA2);
    console.log(prototypeCloneB3);

    if (prototypeCloneA1.config === prototypeCloneA2.config) {
        console.log('Config have been carried over to a clone. Yay!');
    } else {
        console.log('Config have not been copied. Booo!');
    }

    if (prototypeCloneA1.config === prototypeCloneB3.config) {
        console.log('Clone from prototype A and B have been the same config. Booo!');
    } else {
        console.log('Clone from prototype A and B have not been the same config. Yay!');
    }

    if (prototypeCloneA1.creationTime === prototypeCloneA2.creationTime) {
        console.log('Simple creationTime has not been cloned. Booo!');
    } else {
        console.log('Simple creationTime has been cloned. Yay!');
    }

    if (prototypeCloneA1.circularReference === prototypeCloneA2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    } else {
        console.log('Component with back reference has been cloned. Yay!');
    }

    if (prototypeCloneA1.circularReference.prototype.creationTime === prototypeCloneA2.circularReference.prototype.creationTime) {
        console.log('Component with back reference is linked to original object. Booo!');
    } else {
        console.log('Component with back reference is linked to the clone and own clone time. Yay!');
    }
}

clientCode();