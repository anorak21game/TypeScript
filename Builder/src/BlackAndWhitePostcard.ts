// Product

export default class BlackAndWhitePostcard {
    public highlights: string[] = [];

    public listHighlights(): void {
        console.log(`Black and white postcard highlights: ${this.highlights.join(', ')}\n`);
    }
}