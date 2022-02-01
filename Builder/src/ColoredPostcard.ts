// Product

export default class ColoredPostcard {
    public highlights: string[] = [];

    public listHighlights(): void {
        console.log(`Colored postcard highlights: ${this.highlights.join(', ')}\n`);
    }
}