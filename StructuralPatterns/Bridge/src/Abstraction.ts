import Device from './Implementation';

export default interface Control {
    togglePower(): void;
    volumeDown(): void;
    volumeUp(): void;
    channelDown(): void;
    channelUp(): void;
    mute(): void;
}

export class RemoteControl implements Control {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    public togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    public volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    public volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }

    public channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }

    public channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }

    public mute() {
        this.device.setVolume(0);
    }
}