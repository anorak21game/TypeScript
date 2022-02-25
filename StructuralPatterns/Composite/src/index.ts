import Component from './Component';
import { Composite, Leaf } from './Component';

function clientCode(component: Component) {
    
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf()); // branch1(add(Leaf))
branch1.add(new Leaf()); // branch1(Leaf + add(Leaf))
const branch2 = new Composite();
branch2.add(new Leaf()); // branch2(add(Leaf))
tree.add(branch1); // tree(add(branch1(Leaf + Leaf)))
tree.add(branch2); // tree(branch1(Leaf + Leaf) + add(branch2(Leaf)))
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree); // tree(branch1(Leaf + Leaf) + branch2(Leaf))
console.log('');

function clientCode2(component1: Component, component2: Component) {

    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log(`RESULT: ${component1.operation()}`);

}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientCode2(tree, simple); // tree(branch1(Leaf + Leaf) + branch2(Leaf) + add(Leaf))

console.log('');
console.log(tree);

console.log('');
console.log(tree.children[0]);