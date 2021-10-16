import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storedProduct = [];
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quentity = saveCart[key];
                    addedProduct.quentity = quentity;
                    storedProduct.push(addedProduct)
                }
            }
            setCart(storedProduct)
        }    
    }, [products])
    

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.key)
    }
    const handleSearch = (e) => {
        const searchText = e.target.value;
        const searchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(searchProduct.length)
        setDisplayProduct(searchProduct)
    }


    return (
        <>
            <div className="search-container">
                <input type="search" onChange={handleSearch} placeholder='Search...' />
            </div>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        displayProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handle={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;