import React from 'react';
import './Product.css'

import { cartToDb, removeToDb } from '../../Utilities/CartToDb';

const Product = (props) => {
    const { name, price, id } = props.product;

    const addToCart = id => {
        cartToDb(id);
    }

    function removeToCart(id) {
        removeToDb(id);
    }

    return (
        <div className='product'>
            <h4>Product_Name: {name}</h4>
            <p>Price:$ {price}</p>
            <button onClick={() => addToCart(id)} className='btn btn-primary mx-3'>Buy Now!</button>
            <button onClick={() => removeToCart(id)} className='btn btn-primary'>Delete Cart</button>
        </div>
    );
};

export default Product;