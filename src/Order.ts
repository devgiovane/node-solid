import Item from './Item';
import TaxItem from './TaxItem';

export default class Order {

    private code: string;
    private items: Item[]

    constructor() {
        this.code = `${Math.floor(Math.random() * 100000)}`;
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public getSubtotal(): number {
        return this.items.reduce((acc: number, item: Item) => acc + item.price, 0);
    }

    public getTaxes(date: Date): number {
        return this.items.reduce((acc: number, item: Item) => {
            if (item instanceof TaxItem)
                return acc + item.calculateTaxes(date);
            return acc;
        }, 0);
    }

    public getTotal(date: Date): number {
        return this.getSubtotal() + this.getTaxes(date);
    }

}
