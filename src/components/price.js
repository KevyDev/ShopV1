import { calcDiscount } from "../utilities";

export default function Price({ price, discount }) {
    return (
        <div className='price'>
            <span className='value'>${calcDiscount(price, discount)}</span>
            {discount && <span className='discount'>-{discount}%</span>}
        </div>
    );
}