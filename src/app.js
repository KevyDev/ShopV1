import React from 'react';

import './proton.min.css';
import './app.scss';

import Header from './components/header';
import ProductsSection from './components/products-section';
import Product from './components/product';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            products: [],
            cart: [],
            wisheslist: [],
            product: false
        }
    }

    openProduct = id => this.setState({ product: id });
    closeProduct = () => this.setState({ product: false });

    setOnCart = (id, q = 1) => {
        let newCart = this.state.cart,
            index = this.state.cart.findIndex(e => e[0] === id);
        if (index >= 0) {
            if (q > 0) {
                newCart[index][1] = q;
            } else {
                newCart.splice(index, 1);
            }
        } else if (q > 0) {
            newCart.push([id, q]);
        }
        this.setState({ cart: newCart });
    }

    addToWishes = id => {
        if (this.state.wisheslist.findIndex(e => e === id) < 0) {
            let newWisheslist = this.state.wisheslist;
            newWisheslist.push(id);
            this.saveWishes(newWisheslist);
        }
    }

    removeFromWishes = id => {
        let index = this.state.wisheslist.findIndex(e => e === id);
        if (index >= 0) {
            let newWisheslist = this.state.wisheslist;
            newWisheslist.splice(index, 1);
            this.saveWishes(newWisheslist);

        }
    }

    saveWishes = newWisheslist => {
        this.setState({ wisheslist: newWisheslist });
        localStorage.setItem('wisheslist', JSON.stringify(newWisheslist));
    }

    getProduct = id => {
        let product = this.state.products.find(i => i.id === id);
        return product === undefined ? {
            id: '0',
            name: 'No disponible',
            description: 'No disponible.',
            price: 0,
            discount: false,
            img: [
                ['', 'No disponible']
            ],
            stars: 0
        } : product;
    }

    load = async () => {
        const data = await fetch('data.json').then(e => e.json()).catch(err => false);
        let cart = localStorage.getItem('cart'),
            wisheslist = localStorage.getItem('wisheslist');
        data && this.setState({
            loaded: true,
            cart: (cart === null ? [] : JSON.parse(cart)),
            wisheslist: (wisheslist === null ? [] : JSON.parse(wisheslist)),
            ...data
        });
    }

    componentDidMount() {
        this.load();
    }

    render() {
        let wishes = {
            list: this.state.wisheslist,
            add: this.addToWishes,
            remove: this.removeFromWishes
        };
        let cart = {
            list: this.state.cart,
            set: this.setOnCart
        };
        return (
            <div className='app'>
                <Header openProduct={this.openProduct} cart={cart} wishes={wishes} getProduct={this.getProduct} />
                {this.state.product && <Product close={this.closeProduct} data={this.getProduct(this.state.product)} cart={cart} wishes={wishes} />}
                <ProductsSection openProduct={this.openProduct} cart={cart} wishes={wishes} products={this.state.products} />
            </div>
        );
    }
}
