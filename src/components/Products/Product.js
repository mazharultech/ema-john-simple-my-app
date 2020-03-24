import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="products">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <br/>
                <p>$: {price}</p>
                <p><small>only {stock} left in stock- order soon</small></p>
                <button 
                className="main-button"
                onClick = {() =>props.handlerAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;