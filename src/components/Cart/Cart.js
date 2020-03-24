import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
//    const total = cart.reduce((total, product) => total + product.price , 0);

let total = 0;
for(let i = 0; i< cart.length; i++){
    const product = cart[i];
    total = total + product.price;
}

let shipping = 0;
if(total > 35){
    shipping = 0;
}
else if(total > 15){
    shipping = 4.98;

}
else if(total > 0){
    shipping= 12.99;
}
const tax = (total/10).toFixed(2);
const grandTotal = (total + shipping + Number(tax)).toFixed(2);

const formateNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}
    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Items Ordered: {cart.length}</h4>
    <p>Product price: {formateNumber(total)}</p>
    <p>Tax and VAT:{tax}</p>
            <p>shipping cost: {shipping}</p>
            <h3>Total: {grandTotal}</h3>
        </div>
    );
};

export default Cart;