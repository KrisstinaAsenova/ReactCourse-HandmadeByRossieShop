import React, { useState, useEffect } from 'react';
import { logout, update } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
  
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const handleLogout = () => {
      dispatch(logout());
      props.history.push("/signin");
    }
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(update({ userId: userInfo._id, email, name, password }))
    }
    const userUpdate = useSelector(state => state.userUpdate);
    const { loading, success, error } = userUpdate;
  
     useEffect(() => {
      if (userInfo) {
        setEmail(userInfo.email);
        setName(userInfo.name);
        setPassword(userInfo.password);
      }
      return () => {
  
      };
    }, [userInfo])

    return <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
          <li>
              <h2>User Profile Data</h2>
            </li>
             <li> Name: {userInfo.name} </li>
             <li> Email: {userInfo.email} </li>
            <li>
              <button type="button" onClick={handleLogout} className="button full-width">Logout</button>
            </li>

          </ul>
        </form>
      </div>
    </div>
    </div>

}

export default ProfileScreen;