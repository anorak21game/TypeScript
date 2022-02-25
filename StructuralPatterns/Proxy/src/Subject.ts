export default interface Subject {
    request(): void;
}

export class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}