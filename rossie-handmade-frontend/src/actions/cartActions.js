import axios from "axios";
import Cookie from 'js-cookie';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try{
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({type: CART_ADD_ITEM, payload:{
            product: data.id,
            image: data.image,
            name: data.name,
            price: data.price,
            countInStock: data.countInStock,
            qty
        } });
        const {cart: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    }
    catch(error){

    }
}

const removeFromCart = (productId) => async (dispatch, getState) => {
  
        dispatch({type: CART_REMOVE_ITEM, payload:productId
        });

        const {cart: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
}

export { addToCart, removeFromCart }