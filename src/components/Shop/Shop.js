import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
   const first15 = fakeData.slice(0, 15);
   const [products, serProducts]= useState(first15);
   const [cart, setCart] = useState([]);
   const handlerAddProduct =(product)=>{
       const newCart = [...cart, product];
       setCart(newCart);
   }


    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <Product 
                            product={product}
                            handlerAddProduct = {handlerAddProduct}
                            ></Product>)
                    }
                </ul>
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;