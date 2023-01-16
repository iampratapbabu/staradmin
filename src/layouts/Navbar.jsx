import react, { Fragment,useContext } from 'react';
import { Navigate,useNavigate ,Link } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import Dropdown from 'react-bootstrap/Dropdown';


//logos
import mainlogo from '../assets/images/logo.svg';
import minilogo from '../assets/images/logo-mini.svg';

const Navbar = () =>{
  const authContext = useContext(AuthContext);
  const {login,logout,userdata,msg,user,isLoggedIn,loadUser,createProfile} = authContext;
  const navigate = useNavigate();



    const Mylogout = () =>{
      logout();
      navigate('/login');
    }

    return(
        <Fragment>
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
    <Link className="navbar-brand brand-logo" to="/dashboard">
      <img src={mainlogo} alt="logo" /> </Link>
    <Link className="navbar-brand brand-logo-mini" to="/dashboard">
      <img src={minilogo} alt="logo" /> </Link>
  </div>
  <div className="navbar-menu-wrapper d-flex align-items-center">
    <ul className="navbar-nav">
      <li className="nav-item font-weight-semibold d-none d-lg-block">Help : +050 2992 709</li>
      <li className="nav-item dropdown language-dropdown">
        <a className="nav-link dropdown-toggle px-2 d-flex align-items-center" id="LanguageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
          <div className="d-inline-flex mr-0 mr-md-3">
            <div className="flag-icon-holder">
              <i className="flag-icon flag-icon-us"></i>
            </div>
          </div>
          <span className="profile-text font-weight-medium d-none d-md-block">English</span>
        </a>
        <div className="dropdown-menu dropdown-menu-left navbar-dropdown py-2" aria-labelledby="LanguageDropdown">
          <a className="dropdown-item">
            <div className="flag-icon-holder">
              <i className="flag-icon flag-icon-us"></i>
            </div>English
          </a>
          <a className="dropdown-item">
            <div className="flag-icon-holder">
              <i className="flag-icon flag-icon-fr"></i>
            </div>French
          </a>
          <a className="dropdown-item">
            <div className="flag-icon-holder">
              <i className="flag-icon flag-icon-ae"></i>
            </div>Arabic
          </a>
          <a className="dropdown-item">
            <div className="flag-icon-holder">
              <i className="flag-icon flag-icon-ru"></i>
            </div>Russian
          </a>
        </div>
      </li>
    </ul>
    <form className="ml-auto search-form d-none d-md-block" action="#">
      <div className="form-group">
        <input type="search" className="form-control" placeholder="Search Here"/>
      </div>
    </form>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link count-indicator" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
          <i className="mdi mdi-bell-outline"></i>
          <span className="count">7</span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
          <a className="dropdown-item py-3">
            <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
            <span className="badge badge-pill badge-primary float-right">View all</span>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face12.jpg" alt="image" className="img-sm profile-pic"/>
            </div>
            <div className="preview-item-content flex-grow py-2">
              <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
              <p className="font-weight-light small-text"> The meeting is cancelled </p>
            </div>
          </a>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face12.jpg" alt="image" className="img-sm profile-pic"/>
            </div>
            <div className="preview-item-content flex-grow py-2">
              <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
              <p className="font-weight-light small-text"> The meeting is cancelled </p>
            </div>
          </a>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face1.jpg" alt="image" className="img-sm profile-pic"/>
            </div>
            <div className="preview-item-content flex-grow py-2">
              <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
              <p className="font-weight-light small-text"> The meeting is cancelled </p>
            </div>
          </a>
        </div>
      </li>
      <li className="nav-item dropdown mr-2">
        <a className="nav-link count-indicator" id="notificationDropdown" href="#" data-toggle="dropdown">
          <i className="mdi mdi-email-outline"></i>
          <span className="count bg-success">3</span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
          <a className="dropdown-item py-3 border-bottom">
            <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
            <span className="badge badge-pill badge-primary float-right">View all</span>
          </a>
          <a className="dropdown-item preview-item py-3">
            <div className="preview-thumbnail">
              <i className="mdi mdi-alert m-auto text-primary"></i>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
              <p className="font-weight-light small-text mb-0"> Just now </p>
            </div>
          </a>
          <a className="dropdown-item preview-item py-3">
            <div className="preview-thumbnail">
              <i className="mdi mdi-settings m-auto text-primary"></i>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
              <p className="font-weight-light small-text mb-0"> Private message </p>
            </div>
          </a>
          <a className="dropdown-item preview-item py-3">
            <div className="preview-thumbnail">
              <i className="mdi mdi-airballoon m-auto text-primary"></i>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
              <p className="font-weight-light small-text mb-0"> 2 days ago </p>
            </div>
          </a>
        </div>
      </li>
     
     <div>
      <Dropdown>
        <Dropdown.Toggle variant='light' id="dropdown-basic">
        <img className="img-xs rounded-circle" src={`http://localhost:3200/${user?.photo}`} alt="Profile image"/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
        
          <Dropdown.Item>          
            <div className="dropdown-header text-center">
            <img className="img-md rounded-circle" src={`http://localhost:3200/${user?.photo}`} alt="Profile image"/>
            <p className="mb-1 mt-3 font-weight-semibold">{user?.fname}{" "}{user?.lname}</p>
            <p className="font-weight-light text-muted mb-0">{user?.email}</p>
          </div>
         
          </Dropdown.Item>
          <Dropdown.Item><button onClick={()=>{navigate('/profile')}} className="btn btn-light btn-fw">Profile</button></Dropdown.Item>
          <Dropdown.Item><button onClick={Mylogout} className="btn btn-light btn-fw">Sign out</button></Dropdown.Item>
          <Dropdown.Item><button onClick={()=>navigate('/users')} className="btn btn-light btn-fw">Users</button></Dropdown.Item>
          <Dropdown.Item><button onClick={()=>navigate('/categories')} className="btn btn-light btn-fw">Categories</button></Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      </div>

      
    </ul>
    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span className="mdi mdi-menu"></span>
    </button>
  </div>
</nav>
<h1>Navbar ends</h1>


        </Fragment>
    )
}

export default Navbar;