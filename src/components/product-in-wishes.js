import React from 'react';
import { ReactComponent as SvgHeartBroken } from '../svg/heart-broken.svg';
import { ReactComponent as SvgShoppingCart } from '../svg/shopping-cart.svg';

import Price from './price.js';

export default function ProductInWishes({ data, remove, openProduct }) {
    return (
        <div className='product-in-wishes'>
            <div className='image-container'><img src={'products/' + data.img[0][0]} alt={data.img[0][1]} /></div>
            <div className='info'>
                <span className='name'>{data.name}</span>
                <Price price={data.price} discount={data.discount} />
            </div>
            <button className='cart-button' onClick={openProduct}><span className='icon'><SvgShoppingCart /></span></button>
            <button className='remove-button' onClick={remove}><span className='icon'><SvgHeartBroken /></span></button>
        </div>
    );
}