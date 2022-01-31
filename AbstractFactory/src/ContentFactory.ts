import LocalFile, { WinLocalFile, MacLocalFile } from 'LocalFile';
import InputField, { WinInputField, MacInputField } from 'InputField';

// Abstract Factory

export default interface ContentFactory {
    createLocalFile(): LocalFile;

    createInputField(): InputField;
}

// Concrete Factory 1

export class WinContentFactory implements ContentFactory {
    public createLocalFile(): LocalFile {
        return new WinLocalFile();
    }

    public createInputField(): InputField {
        return new WinInputField();
    }
}

// Concrete Factory 2

export class MacContentFactory implements ContentFactory {
    public createLocalFile(): LocalFile {
        return new MacLocalFile();
    }

    public createInputField(): InputField {
        return new MacInputField();
    }
}