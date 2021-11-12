import Beer from './Beer';
import Cigar from './Cigar';
import Order from './Order';
import Water from './Water';

const order = new Order();
order.addItem(new Cigar("Malboro", 3));
order.addItem(new Beer("Cont", 10));
order.addItem(new Water("Crystal", 5));

console.log(order.getSubtotal());
console.log(order.getTaxes());
console.log(order.getTotal());