import React from "react";

import { ReactComponent as SvgSearch } from '../svg/search.svg';

import ProductInSection from './product-in-section';

export default class ProductsSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = { filter: '' };
    }

    filter = e => this.state.filter === '' ? true : Object.values(e).some(i => i.toString().toLowerCase().includes(this.state.filter));
    setFilter = e => this.setState({ filter: e.target.value.toString().toLowerCase() });

    render() {
        return (
            <div className='products-section'>
                <input className='filter-input' type='text' placeholder='Buscar...' onKeyUp={this.setFilter} />
                <div className='products-container'>{this.props.products.map(e => this.filter(e) && <ProductInSection data={e} wishes={this.props.wishes} openProduct={() => this.props.openProduct(e.id)} key={'product-in-section-' + e.id} />)}</div>
            </div>
        );

    }
}