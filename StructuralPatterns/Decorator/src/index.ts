import Component from './Component';
import { TextView } from './Component';
import { ScrollDecorator, BorderDecorator } from './Decorator';

function clientCode(component: Component) {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new TextView();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const decorator1 = new ScrollDecorator(simple);
const decorator2 = new BorderDecorator(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);