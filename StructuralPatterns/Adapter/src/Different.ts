export default interface Different {
    invertedRequest(): any;
}

export class Incompatible implements Different {
    public invertedRequest(): string {
        return '.tnereffiD eht fo roivaheb laicepS';
    }
}