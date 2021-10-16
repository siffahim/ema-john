import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    const { name, img, price, star, seller, stock} = props.product;
    return (
        <div className='pd-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='pd-detail'>
                <p className='pd-name'>{name}</p>
                <p>{seller}</p>
                <h4>${price}</h4>
                <Rating
                    readonly
                    initialRating={star}
                    emptySymbol='far fa-star'
                    fullSymbol='fas fa-star'
                />
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handle(props.product)} className='btn-regular'><i className="fas fa-shopping-cart"></i> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;