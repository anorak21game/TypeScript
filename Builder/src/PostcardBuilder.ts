import BlackAndWhitePostcard from 'BlackAndWhitePostcard';
import ColoredPostcard from 'ColoredPostcard';

//  Builder
 
export default interface PostcardBuilder {
    getPrintType(): string;
    setGloss(): void;
    setRoundEdges(): void;
    setTwoSidePrinting(): void;
    getPostcard(): any;
}

//  Concrete Builder

export class BlackAndWhitePostcardBuilder implements PostcardBuilder {
    private car!: BlackAndWhitePostcard;
    typeOfPrinting!: string;

    constructor() {
        this.reset();
    }
    
    public getPrintType() : string {
        return this.typeOfPrinting = "black and white postcard";
    }
    
    public reset(): void {
        this.car = new BlackAndWhitePostcard();
    }

    public setGloss(): void {
        this.car.highlights.push('gloss');
    }

    public setRoundEdges(): void {
        this.car.highlights.push('round edges');
    }

    public setTwoSidePrinting(): void {
        this.car.highlights.push('two side printing');
    }

    public getPostcard(): BlackAndWhitePostcard {
        const result = this.car;
        this.reset();
        return result;
    }
}

export class ColoredPostcardBuilder implements PostcardBuilder {
    private car!: ColoredPostcard;
    typeOfPrinting!: string;

    constructor() {
        this.reset();
    }

    public getPrintType() : string {
        return this.typeOfPrinting = "colored postcard";
    }

    public reset(): void {
        this.car = new ColoredPostcard();
    }

    public setGloss(): void {
        this.car.highlights.push('gloss');
    }

    public setRoundEdges(): void {
        this.car.highlights.push('round edges');
    }

    public setTwoSidePrinting(): void {
        this.car.highlights.push('two side printing');
    }

    public getPostcard(): ColoredPostcard {
        const result = this.car;
        this.reset();
        return result;
    }
}