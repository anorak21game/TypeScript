import Standard from './Adapter';
import { Compatible, Adapter } from './Adapter';
import { Incompatible } from './Different';

function clientCode(Standard: Standard) {
    console.log(Standard.request());
}

console.log('Client: I can work just fine with the Compatible objects:');
const compatible = new Compatible();
clientCode(compatible);

console.log('');

const incompatible = new Incompatible();
console.log('Client: The Incompatible class has a different interface. See, I don\'t understand it:');
console.log(`Different: ${incompatible.invertedRequest()}`);

console.log('');

console.log('Client: But I can work with it via Adapter:');
const adapter = new Adapter(incompatible);
clientCode(adapter);