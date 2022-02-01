import ContentFactory, { WinContentFactory, MacContentFactory } from 'ContentFactory';

// Client

export default class Client {
    factory: ContentFactory;
    input: string;

    constructor(factory: ContentFactory) {
        this.factory = factory;
        this.input = "";
    }

    public createContentLocally(): void {
        const inputField = this.factory.createInputField();
        const localFile = this.factory.createLocalFile();

        console.log(`Client using ${localFile.getNameOfOperatingSystem()}:`)
        console.log(inputField.addText(this.input));
        console.log(inputField.createTextFile(localFile));
        console.log('');
    }
}

const clientOnWindows = new Client(new WinContentFactory());
clientOnWindows.input = "Write a story about a cat";
clientOnWindows.createContentLocally();

const clientOnMac = new Client(new MacContentFactory());
clientOnMac.input = "Make some notes";
clientOnMac.createContentLocally();