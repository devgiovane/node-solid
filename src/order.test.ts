import Beer from "./Beer";
import Cigar from "./Cigar";
import Order from "./Order";
import Water from "./Water";

test('Should calculate order sub total', function() {
    const order = new Order();
    order.addItem(new Cigar("Malboro", 3));
    order.addItem(new Beer("Cont", 10));
    order.addItem(new Water("Crystal", 5));
    const subtotal = order.getSubtotal();
    expect(subtotal).toBe(18);
});

test('Should calculate order taxes', function() {
    const order = new Order();
    order.addItem(new Cigar("Malboro", 3));
    order.addItem(new Beer("Cont", 10));
    order.addItem(new Water("Crystal", 5));
    const taxes = order.getTaxes();
    expect(taxes).toBe(1.6);
});

test('Should calculate order total', function() {
    const order = new Order();
    order.addItem(new Cigar("Malboro", 3));
    order.addItem(new Beer("Cont", 10));
    order.addItem(new Water("Crystal", 5));
    const tatal = order.getTotal();
    expect(tatal).toBe(19.6);
});
