import react, { Fragment,useEffect,useContext,useState } from 'react';
import {Routes, Route,Switch,Link,useNavigate } from "react-router-dom";
import AuthContext from '../context/auth/AuthContext';
import axios from 'axios';
import Alert from '../components/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () =>{

  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/dashboard')
    }
  },[])

  const [userLogin,setUserLogin]=useState({
    username:"",
    password:"",
    checked:false,
  })

  const authContext = useContext(AuthContext);
  const {register,login,logout,userdata,msg,user,isLoggedIn,toggleLogin,loading,setLoading,showAlert,setAlert,alertMsg} = authContext;
  const {username,password,checked} = userLogin

  const onChange = (e) =>{setUserLogin({...userLogin,[e.target.name]:e.target.value})};
  const handleCheck =(e) =>{
      if(checked==false){
          setUserLogin({...userLogin,checked:true});
      }else{
          setUserLogin({...userLogin,checked:false});
      }
  }
  const onSubmit = (e) =>{ 
      e.preventDefault();
      console.log(userLogin);
      setLoading(true);
      //login(userLogin);
      if(userLogin.username == "" || userLogin.password == ""){
        alert("Please provide the required credentials")
      }else{
        axios.post('http://localhost:3200/users/login',userLogin)
        .then(res=>{
            let serverResponse = res;
            console.log(serverResponse.data);
  
            if(serverResponse.data.token){
                localStorage.setItem('token',serverResponse.data.token);
                toggleLogin(true);
                setLoading(false);
                
                setAlert(true);
                navigate('/dashboard')
                toast.success("Logged In Successfully")
            }
            else{
                alert("login Failed");
            }
        })
        .catch(e=>{
            let emsg = e;
            console.log(emsg)
            alert(emsg.response.data.message)
            setLoading(false);
        })
        //navigate('/dashboard');
      }

  
  }

  if(loading) return (<h1>Loading...</h1>);

    return(
        <Fragment>
          <ToastContainer/>
      {showAlert && <Alert msg={["success","Logged out Successully"]}/>}
      <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <div className="auto-form-wrapper">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label className="label">Username</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="username" placeholder="Username" onChange={onChange}/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Password</label>
                    <div className="input-group">
                      <input type="password" className="form-control" name="password" placeholder="*********" onChange={onChange}/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit-btn btn-block">Login</button>
                  </div>
                  <div className="form-group d-flex justify-content-between">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checked} onChange={handleCheck}/>
                      <label className="form-check-label" >Keep Me Signed in</label>
                  </div>
                    <a href="#" className="text-small forgot-password text-black">Forgot Password</a>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-block g-login">
                      <img className="mr-3" src="../../../assets/images/file-icons/icon-google.svg" alt=""/>Log in with Google</button>
                  </div>
                  <div className="text-block text-center my-3">
                    <span className="text-small font-weight-semibold">Not a member ?</span>
                    <Link to='/register'className="text-black text-small">Create new account</Link>
                  </div>
                </form>
              </div>
              <ul className="auth-footer">
                <li>
                  <a href="#">Conditions</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
              </div>
          </div>
        </div>
   
      </div>
    
      </div>
        </Fragment>
    )
}

export default Login;