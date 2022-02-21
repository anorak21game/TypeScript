import Different from './Different';

export default interface Standard {
    request(): any;
}

export class Compatible implements Standard {
    public request(): string {
        return 'Standard: The default Standard\'s behavior.';
    }
}

export class Adapter extends Compatible implements Standard {
    private different: Different;

    constructor(Different: Different) {
        super();
        this.different = Different;
    }

    public request(): string {
        const result = this.different.invertedRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}