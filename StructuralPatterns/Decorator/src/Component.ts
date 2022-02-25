export default interface Component {
    operation(): string;
}

export class TextView implements Component {
    public operation(): string {
        return 'TextView';
    }
}