export default interface Device {
    isEnabled(): boolean;
    enable(): any;
    disable(): any;
    getVolume(): number;
    setVolume(value: number): void;
    getChannel(): number;
    setChannel(value: number): void;
}

export class Radio implements Device {
    private enabled: boolean;
    private volume: number;
    private channel: number;

    constructor() {
        this.enabled = false;
        this.volume = 50;
        this.channel = 1;
    }

    public isEnabled(): boolean {
        return this.enabled;
    }

    public enable() {
        this.enabled = true;
    }

    public disable() {
        this.enabled = false;
    }

    public getVolume(): number {
        return this.volume;
    }

    public setVolume(value: number): void {
        this.volume = value;
    }

    public getChannel(): number {
        return this.channel;
    }

    public setChannel(value: number): void {
        this.channel = value;
    }
}