import React from 'react';
import { ReactComponent as SvgShoppingCart } from '../svg/shopping-cart.svg';
import { ReactComponent as SvgHeartFull } from '../svg/heart-full.svg';
import ProductInCart from './product-in-cart';
import ProductInWishes from './product-in-wishes';

export default function Cart({ isOpen, close, cart, wishes, defaultTab, setCart, setWishes, getProduct, openProduct }) {
    return (
        <div className={'cart-overlay' + (isOpen ? ' open' : '')} onClick={e => e.target.classList.contains('cart-overlay') && close()}>
            <div className='main-container'>
                <ul className='tabs-buttons'>
                    <li className={defaultTab ? 'selected' : ''} onClick={setCart}>
                        <span className='icon'><SvgShoppingCart /></span>
                        <span className='text'>Cart</span>
                    </li>
                    <li className={!defaultTab ? 'selected' : ''} onClick={setWishes}>
                        <span className='icon'><SvgHeartFull /></span>
                        <span className='text'>Wisheslist</span>
                    </li>
                </ul>
                {
                    defaultTab ?
                        <div className='cart-container'>
                            <div className='products-container'>
                                {
                                    cart.list.map(e => <ProductInCart data={{ ...getProduct(e[0]), q: e[1] }} openProduct={() => openProduct(e[0])} key={'product-in-cart-' + e[0]} />)
                                }
                            </div>
                        </div>
                        :
                        <div className='wisheslist-container'>
                            {
                                wishes.list.map(e => <ProductInWishes data={{ ...getProduct(e) }} remove={() => wishes.remove(e)} openProduct={() => openProduct(e)} key={'product-in-wisheslist-' + e} />)
                            }
                        </div>
                }
            </div>
        </div>
    );
}