export function calcDiscount(price, discount) {
    return Math.round((price - (price / 100 * (discount ? discount : 0))) * 100) / 100;
}