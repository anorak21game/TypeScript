// Product 1

export default interface LocalFile {
    getNameOfOperatingSystem(): string;

    addFileOnLocalSystem(): string;
}

// Concrete Product 1

export class WinLocalFile implements LocalFile {
    public getNameOfOperatingSystem(): string {
        return "macOS";
    }

    public addFileOnLocalSystem(): string {
        return 'Word-Document';
    }
}

export class MacLocalFile implements LocalFile {
    public getNameOfOperatingSystem(): string {
        return "Windows10";
    }

    public addFileOnLocalSystem(): string {
        return 'Pages-Document';
    }
}