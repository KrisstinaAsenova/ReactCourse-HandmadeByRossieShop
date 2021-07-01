import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

    const [searchKeyword, setSearchKeyword] = useState('');

    const category = props.match.params.id ? props.match.params.category : '';
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts(category));
    
        return () => {
          //
        };
      }, [category]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listProducts(category, searchKeyword));
      };

      return (
        <>
          {category && <h2>{category}</h2>}
    
          <ul className="filter">
            <li>
              <form onSubmit={submitHandler}>
                <input
                  name="searchKeyword"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button type="submit">Search</button>
              </form>
            </li>
          </ul>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <ul className="products">
              {products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <Link to={'/product/' + product._id}>
                      <img className="product-image"
                        src={product.image}
                        alt="product"
                      />
                    </Link>
                    <div className="product-name">
                      <Link to={'/product/' + product._id}>{product.name}</Link>
                    </div>
                    <div className="product-brand">
                         {product.brand}
                    </div>
                    <div className="product-price"> Price: ${product.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      );
    }

export default HomeScreen;