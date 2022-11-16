import React from 'react';
import { ReactComponent as SvgShoppingCart } from '../svg/shopping-cart.svg';
import Cart from './cart';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cartIsOpen: false, defaultTab: true };
    }

    openCart = () => this.setState({ cartIsOpen: true });
    closeCart = () => this.setState({ cartIsOpen: false, defaultTab: true });

    setCart = () => this.setState({ defaultTab: true });
    setWishes = () => this.setState({ defaultTab: false });

    render() {
        return (
            <header>
                <div className='header-container'>
                    <div className='logo-container'>K-SHOP</div>
                    <button className='cart-button' onClick={this.openCart}>
                        <div className='icon'><SvgShoppingCart /></div>
                        <div className='amount'>$99.99</div>
                    </button>
                </div>
                <Cart isOpen={this.state.cartIsOpen} close={this.closeCart} cart={this.props.cart} wishes={this.props.wishes} defaultTab={this.state.defaultTab} setCart={this.setCart} setWishes={this.setWishes} getProduct={this.props.getProduct} openProduct={this.props.openProduct} />
            </header>
        );
    }

}