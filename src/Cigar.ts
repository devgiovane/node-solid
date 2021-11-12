import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {

    constructor(description: string, price: number) {
        super("Cigar", description, price);
    }
    
    public getTax(date: Date): number {
        if(date.getMonth() === 0) return 0.1; 
        return 0.2;
    }

}