import { Radio } from './Implementation';
import Control from './Abstraction';
import { RemoteControl } from './Abstraction';

function clientCode(remoteControl: Control) {
    console.log(remoteControl);
    remoteControl.togglePower();
    remoteControl.channelUp();
    remoteControl.volumeUp();
    remoteControl.mute();
    console.log(remoteControl);
}

let radio = new Radio();
let remoteControl = new RemoteControl(radio);
clientCode(remoteControl);