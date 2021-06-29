import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

function ProductScreen(props) {

    // const product = data.products.find(x => x.id === props.match.params.id);
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            
        };
    }, []);
    
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return <div>
        <div className="back-to-results">
            <Link to="/">Back to results</Link>
        </div>
        {loading? <div>Loading..</div> : error? <div>{error}</div> :
        (
            <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        Name: <h4>{product.name}</h4>
                    </li>
                    <li>
                        Price: <h4>{product.price}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews) 
                    </li>
                    <li>
                        Description: 
                        <div>
                            {product.description}
                        </div> 
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Status: {product.countInStock>0? "In stock" : "Out of stock"}
                    </li>
                    <li>
                        Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}} >
                            {[...Array(product.countInStock).keys()].map(x =>
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                                )}
                        </select>
                    </li>
                    <li>
                        {product.countInStock>0 && <button onClick={handleAddToCart}  className="button">
                            Add to cart
                        </button> }
                    </li>
                </ul>
            </div>
        </div>
        )
            }
        
    </div>
}

export default ProductScreen;