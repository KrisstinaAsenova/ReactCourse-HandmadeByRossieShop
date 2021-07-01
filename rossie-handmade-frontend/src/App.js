import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useDispatch, useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Rossie</Link>
        </div>
        <div className="header-links">
          
           <Link to="/products">Products</Link> 
          
            <Link to="/cart">
                Cart
            </Link>
            {userInfo ? <Link to="/profile">{userInfo.name}</Link>
            : <Link to="/signin">
            Sign In
        </Link>}
            
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Cakes</a>
            </li>
            <li>
                <a href="index.html">Bouquets</a>
            </li>
            <li>
                <a href="index.html">Book marks</a>
            </li>
            <li>
                <a href="index.html">Personalized cups</a>
            </li>
        </ul>
      </aside>
      <main className="main">
          <div className="content">
            <Route path="/products" component={ProductsScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} /> 
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>
      <footer className="footer">
        All right reserved.
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
