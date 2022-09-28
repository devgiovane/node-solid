export default abstract class Item {

    public category: string;
    public description: string;
    public price: number;

    protected constructor(category: string, description: string, price: number) {
        this.category = category;
        this.description = description;
        this.price = price;
    }

}
