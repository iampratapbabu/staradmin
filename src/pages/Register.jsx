import react, { Fragment,useState,useContext, useEffect} from 'react';
import AuthContext from '../context/auth/AuthContext';
import { Link,useNavigate } from "react-router-dom";


const Register = () =>{
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const {register,login,logout,userdata,msg,user,isLoggedIn} = authContext;

    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/dashboard')
        }
    },[])

    const [userRegister,setUserregister]=useState({
        email:"",
        password:"",
        confirmPassword:"",
        checked:true,
    })

    const {email,password,confirmPassword,checked}=userRegister;

    const onChange = (e) =>{setUserregister({...userRegister,[e.target.name]:e.target.value})};
    const handleCheck =(e) =>{
        if(checked==false){
            setUserregister({...userRegister,checked:true});
        }else{
            setUserregister({...userRegister,checked:false});
        }
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        //console.log(userRegister);
        register(userRegister);
        navigate('/dashboard');
    
    }

    return(
        <Fragment>
            <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth register-bg-1 theme-one">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <h2 className="text-center mb-4">Register</h2>
              <div className="auto-form-wrapper">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" className="form-control" name="email" placeholder="Email" onChange={onChange}/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" className="form-control" name="password" placeholder="Password" onChange={onChange}/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" onChange={onChange}/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-center">
                  <div className="form-check">
                    <input className="form-check-input btn btn-outline success" type="checkbox" value="" checked={checked} id="flexCheckDefault" onChange={handleCheck}/>
                        <label className="form-check-label">I agree to The Terms</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit-btn btn-block">Register</button>
                  </div>
                  <div className="text-block text-center my-3">
                    <span className="text-small font-weight-semibold">Already have and account ?</span>
                    <Link to='/login' className="text-black text-small">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
        </Fragment>
    )
}

export default Register;