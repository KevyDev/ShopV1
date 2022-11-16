import React, { Component } from 'react';

export default function ProductInCart({ data, addToCart, removeFromCart }) {
    return (
        <div className='product-in-cart'>
            {data.id}: {data.q}
            <button className='remove-button' onClick={() => removeFromCart(data.id)}>Remove</button>
        </div>
    );
}