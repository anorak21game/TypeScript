import Director from 'Director';
import { ConcreteBuilder } from 'Builder';

// Client

export function clientCode(director: Director) {
    const builder = new ConcreteBuilder();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listSteps();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listSteps();

    console.log('Custom product:');
    builder.buildStepA();
    builder.buildStepC();
    builder.getProduct().listSteps();
}

const director = new Director();
clientCode(director);
