import React, {createContext, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

function CartScreen(props){

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const productId = props.match.params.id;
    const qty =  props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
        return () => {
            
        };
    }, []);

    return <div className="cart"> 
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h1>
                        Shopping cart
                    </h1>
                    <h1>
                        Price
                    </h1>
                </li>
                {
                    cartItems.length === 0 ?
                    <div>
                        Cart is empty
                    </div> :
                    cartItems.map( item =>
                        <li>
                        <div className="cart-image">
                            <img src={item.image} alt="product" />
                        </div>
                        <div className="cart-name">
                                <div>
                                    <Link to={"/product/" + item.product}>
                                         {item.name}
                                    </Link>
                                </div>
                                <div>
                                    Qty:
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                    {[...Array(item.countInStock).keys()].map(x =>
                                     <option key={x + 1} value={x + 1}>{x + 1}</option>
                                     )}
                                    </select>
                                    <button type="button" className="delete-button" onClick={() => removeFromCartHandler(item.product)}>
                                        Delete
                                    </button>
                            </div>
                            <div className="cart-price">
                                ${item.price * item.qty}
                            </div>
                        </div>
                        </li>                 
                    )
                   
                }
            </ul>
            <div className="total-price">
                 Total: $ {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
            </div>
            <button onClick={checkoutHandler} className="button full-width" disabled={cartItems.length===0}>
                Proceed to Checkout
            </button>
        </div>
        
    </div>
}

export default CartScreen