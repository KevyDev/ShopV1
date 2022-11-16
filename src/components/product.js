import React from 'react';
import { ReactComponent as SvgStar } from '../svg/star.svg';
import { ReactComponent as SvgStarHalf } from '../svg/star-half.svg';
import { ReactComponent as SvgStarFull } from '../svg/star-full.svg';

export default class Product extends React.Component {
    constructor(props) {
        super(props);

        this.stars = [1, 2, 3, 4, 5];
        this.state = {
            imgIndex: 0,
            ...this.props.data
        };
    }
    render() {
        return (
            <div className='product-overlay' onClick={e => e.target.classList.contains('product-overlay') && this.props.close()}>
                <div className='main-container'>
                    <div className='left-container'>
                        <div className='image-container'><img src={'products/' + this.state.img[this.state.imgIndex][0]} alt={this.state.img[this.state.imgIndex][1]} /></div>
                        <div className='stars-container'>
                            {
                                this.stars.map(e =>
                                    <div className='star-container'>
                                        {e <= Math.floor(this.state.stars) ? <SvgStarFull /> : (e - 1 < this.state.stars ? <SvgStarHalf /> : <SvgStar />)}
                                    </div>
                                )
                            }
                        </div>
                        <div className='reviews'>{'3854 reviews (' + this.state.stars + '/5)'}</div>
                    </div>
                    <div className='right-container'>
                        <div className='name'>{this.state.name}</div>
                        <div className='description'>{this.state.description}</div>
                    </div>
                </div>
            </div>
        );
    }
}