import React from 'react';
import '../style/Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean Startup</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>11.96</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt=""/>
            <button>Add to Basket</button>
        </div>
    );  
};

export default Product;
