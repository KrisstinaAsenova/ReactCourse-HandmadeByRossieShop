import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen(props) {
    const product = data.products.find(x => x.id === props.match.params.id);
    return <div>
        <div className="back-to-results">
            <Link to="/">Back to results</Link>
        </div>
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
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button className="button">
                            Add to cart
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProductScreen;