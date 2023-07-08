import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
import { totalValue } from '../../Utilities/Calculation';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const totalMoney = totalValue(products);

    return (

        <div>
            <h1>Here New Products</h1>
            <h3>Total Products: {products.length}</h3>
            <p>Total Cost: {totalMoney}</p>
            <div className='products'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;