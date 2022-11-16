import React from "react";

import { ReactComponent as SvgShoppingCart } from '../svg/shopping-cart.svg';
import { ReactComponent as SvgHeart } from '../svg/heart.svg';
import { ReactComponent as SvgHeartFull } from '../svg/heart-full.svg';

import Price from './price';

export default function ProductInSection({ data, wishes, openProduct }) {
    let inWishes = wishes.list.findIndex(i => i === data.id) >= 0;
    return (
        <div className='product-in-section'>
            <div className='image-container'><img src={'products/' + data.img[0][0]} alt={data.img[0][1]} /></div>
            <div className='name'>{data.name}</div>
            <Price price={data.price} discount={data.discount} />
            <div className='buttons'>
                <button className='add-button' onClick={openProduct}>
                    <span className='icon'><SvgShoppingCart /></span>
                    <span className='text'>Agregar</span>
                </button>
                <button className='wishes-button' onClick={() => inWishes ? wishes.remove(data.id) : wishes.add(data.id)}>
                    <span className='icon'>{inWishes ? <SvgHeartFull /> : <SvgHeart />}</span>
                </button>
            </div>

        </div>
    );

}