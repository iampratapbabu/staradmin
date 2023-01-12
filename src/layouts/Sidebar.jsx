import react, { Fragment,useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';


const Sidebar = () =>{
  const authContext = useContext(AuthContext);
  const {login,logout,userdata,msg,user,isLoggedIn,loadUser,createProfile} = authContext;
    return(
        <Fragment>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
  <ul className="nav">
    <li className="nav-item nav-profile">
      <a href="#" className="nav-link">
        <div className="profile-image">
          <img className="img-xs rounded-circle" src={`http://localhost:3200/${user?.photo}`} alt="profile image"/>
          <div className="dot-indicator bg-success"></div>
        </div>
        <div className="text-wrapper">
          <p className="profile-name">{user?.fname}{' '}{user?.lname}</p>
          <p className="designation">Premium user</p>
        </div>
      </a>
    </li>
    <li className="nav-item nav-category">Main Menu</li>
    <li className="nav-item">
      <a className="nav-link">
        <i className="menu-icon typcn typcn-document-text"></i>
        <Link className="menu-title" to='/dashboard'>Dashboard</Link>
      </a>
    </li>

    {/*conditionally showing login and logout */}
    {isLoggedIn ?     
    <li className="nav-item">
      <a className="nav-link">
        <i className="menu-icon typcn typcn-document-text"></i>
        <Link className="menu-title" to='/login'>Logout</Link>
        </a>
    </li> :
    
    <li className="nav-item">
      <a className="nav-link">
        <i className="menu-icon typcn typcn-document-text"></i>
        <Link className="menu-title" to='/login'>Login</Link>
        </a>
    </li>
    }

    <li className="nav-item">
      <a className="nav-link">
        <i className="menu-icon typcn typcn-document-text"></i>
        <Link className="menu-title" to='/profile'>Profile</Link>
        </a>
    </li>
    <li className="nav-item">
      <a className="nav-link">
        <i className="menu-icon typcn typcn-document-text"></i>
        <Link className="menu-title" to='/users'>Users</Link>
        </a>
    </li>

  </ul>
</nav>
        </Fragment>
    )
}

export default Sidebar;