import LocalFile from 'LocalFile';

// Product 2

export default interface InputField {
    addText(text: string): string;

    createTextFile(collaborator: LocalFile): string;
}

// Concrete Product 2

export class WinInputField implements InputField {

    public addText(text: string): string {
        return `-> ${text} - written on Windows`;
    }

    public createTextFile(collaborator: LocalFile): string {
        const result = collaborator.addFileOnLocalSystem();
        return `-> Save Text local as ${result}`;
    }
}

export class MacInputField implements InputField {

    public addText(text: string): string {
        return `-> ${text} - written on iMac`;
    }

    public createTextFile(collaborator: LocalFile): string {
        const result = collaborator.addFileOnLocalSystem();
        return `-> Save Text local as ${result}`;
    }
}