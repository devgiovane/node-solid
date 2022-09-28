import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {

    constructor(description: string, price: number) {
        super("Beer", description, price);
    }

    public getTax(date: Date): number {
        return 0.1;
    }

}
