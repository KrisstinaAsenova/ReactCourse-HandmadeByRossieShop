import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { savePayment, saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props) {

    const [paymentMethod, setPaymentMethod] = useState('');
  
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping(paymentMethod));
        props.history.push('placeorder');
      }


    return <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Payment</h2>
        </li>
        <li>
        <input type="radio" name="paymentMethod" required id="paymentMethod" onChange={(e) => setPaymentMethod(e.target.value)}>
          </input>
          <label htmlFor="address">
            Paypal
          </label>
        </li>
      
        <li>
          <button type="submit" className="button">Continue</button>
        </li>
      
      </ul>
      </form>
      </div>
      </div>
}

export default PaymentScreen;