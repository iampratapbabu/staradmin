import react, { Fragment,useState,useContext, useEffect } from 'react';
import { Navigate,useNavigate  } from 'react-router-dom';
import '../assets/css/userProfile.css';
import AuthContext from '../context/auth/AuthContext';
import Alert from '../components/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Profile = () =>{
    const authContext = useContext(AuthContext);
    const {loading,setLoading,user,createProfile,showAlert,setAlert,msg,alertMsg,changePassword,changeImage} = authContext;
    const navigate = useNavigate();
    const formData = new FormData();

  useEffect(()=>{
    //console.log(user._id);
    setUserProfile(user);
    console.log(user);
  },[])

    //profile form handling
    const [userProfile,setUserProfile] = useState({
        fname:"",
        lname:"",
        gender:"",
        dob:"",
        role:"",
        address1:"",
        address2:"",
        phone:"",
        state:"",
        city:"",
        postcode:"",
        country:"", 
        free:false,
        professional:false

    });

     
    const onChange = (e) =>{
      setUserProfile({...userProfile,[e.target.name]:e.target.value});
    };
  
    const onSubmit = (e) =>{
      setLoading(true);
      e.preventDefault();
      // userProfile.additionalField = "this is added"; adding key value pair after declaration of state
          
      console.log(userProfile);
      setAlert(true);
      createProfile(user._id,userProfile); 
      toast.success("updated Successfully");
    
    }
      
    
    const handleCheck = (e) =>{
      console.log(e.target.value);
      if(e.target.value === "free"){
        // setUserProfile({...userProfile,free:"hello"}) alternate way of adding addtional field in state
        setUserProfile({...userProfile,free:true,professional:false});
      }
      if(e.target.value === "professional"){
        setUserProfile({...userProfile,free:false,professional:true});
              
      }
    }

    //password form handling
    const [showDiv,setShowDiv] = useState(false);
    const [newPasswordState,setNewPasswordState] = useState({
      oldPassword:"",
      newPassword:"",
      confirmNewPassword:"",
    });

    const toggleDiv = () =>{
      if(showDiv==true){
        setShowDiv(false);
        console.log("div is closed");
      }else{
        setShowDiv(true);
        console.log("div is open");
      }
    }

    const onChangePassword = (e)=>{
      setNewPasswordState({...newPasswordState,[e.target.name]:e.target.value});
    }

    const onSubmitNewPassword = (e) =>{
      e.preventDefault();
      changePassword(newPasswordState,user._id,);
      
    }

    //image uploading
    const [file,setFile]=useState({});

    const handleImage = (e) =>{
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);

    }

    const uploadImage = (e) =>{
      e.preventDefault();
      formData.append("file", file);
      changeImage(formData,user._id);
    }


    if (loading) return (<h1>Loading...</h1>);
    return (
        <Fragment>
        <div className="container">
          {showAlert && <Alert msg={["success",alertMsg]}/>}
           
                <div className="main-body">
               
                <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={`http://localhost:3200/${user?.photo}`} alt="Admin" class="rounded-circle" width="150"/>
                    <div className="mt-3">
                     
                      {user?.fname}{' '}{user?.lname}
                      <p className="text-muted mb-1" style={{"color":"red",'fontWeight':"bold"}}>{user?.email}</p>
                      
                      <form className="forms-sample" onSubmit={uploadImage}>
                          <div className="form-group">
                            <input type="file" accept=".png .jpeg .jpg" className="form-control" name="file" onChange={handleImage} />
                          </div>
                          <button type="submit" className="btn btn-success mr-2">Update Image</button>
                        </form>

                    </div>
                  </div>
                </div>
              </div>
              </div>
              
        
              <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0" >Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-muted">
                      {user?.fname}{' '}{user?.lname}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Role</h6>
                    </div>
                    <div class="col-sm-9 text-muted" >
                      {user?.role}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-muted" >
                      {user?.email}
                    </div>
                  </div>
                  <hr/>
               
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-muted">
                    {user?.address1},{user?.address2},{user?.city},{user?.country}
                    </div>
                  </div>
                  <hr/>
                  <button className='btn btn-primary' onClick={toggleDiv}>Change Password</button>
                  </div>
                  </div>
                  </div>
                  </div>

                  {showDiv?
                  <>
                      <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Change Password</h4>
                        <form className="forms-sample" onSubmit={onSubmitNewPassword}>
                          <div className="form-group">
                            <label>Old Password</label>
                            <input type="password" className="form-control" name="oldPassword" placeholder="*********" onChange={onChangePassword} />
                          </div>
                          <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" name="newPassword" placeholder="**********" onChange={onChangePassword} />
                          </div>
                          <div className="form-group">
                            <label>confirm Password</label>
                            <input type="password" className="form-control" name="confirmNewPassword" placeholder="*********" onChange={onChangePassword} />
                          </div>
                          <button type="submit" className="btn btn-success mr-2">Submit</button>
                          <button className="btn btn-light" onClick={()=>setShowDiv(false)}>Cancel</button>
                        </form>
                      </div>
                    </div>
                  </>:null}



              </div>
            </div>




        <div className='container'>
            
            <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">User Profile</h4>
                    <form className="form-sample" onSubmit={onSubmit}>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                          {/* <h2>{userProfile.fname}</h2> */}
                            <label className="col-sm-3 col-form-label">First Name</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="fname" value={userProfile?.fname || ''}  onChange={onChange} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Last Name</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="lname" value={userProfile?.lname || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Gender</label>
                            <div className="col-sm-9">
                              <select className="form-control" name="gender" value={userProfile?.gender || ''} onChange={onChange}>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Date of Birth</label>
                            <div className="col-sm-9">
                              <input type="date" className="form-control" placeholder="dd/mm/yyyy" name="dob"  onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Role</label>
                            <div className="col-sm-9">
                              <select className="form-control" name="role" value={userProfile?.role || ''} onChange={onChange}>
                                <option>admin</option>
                                <option>developer</option>
                                <option>user</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Membership</label>
                            <div className="col-sm-4">
                              <div className="form-radio">
                                <label className="form-check-label"/>
                                <input className="form-check-input" type="checkbox" value="free" checked={userProfile.free}  onChange={handleCheck}/>Free
                              </div>
                            </div>
                            <div className="col-sm-5">
                              <div className="form-radio">
                                <label className="form-check-label"/>
                                <input className="form-check-input" type="checkbox" value="professional" checked={userProfile.professional} onChange={handleCheck}/>Professional
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="card-description"> Address </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Address 1</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="address1" value={userProfile?.address1 || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">State</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="state" value={userProfile?.state || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Address 2</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="address2" value={userProfile?.address2 || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Postcode</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="postcode" value={userProfile?.postcode || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">City</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="city" value={userProfile?.city || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Country</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="country" value={userProfile?.country || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input type="submit" className='btn btn-success'></input>
                    </form>
                  </div>
                </div>
              
              </div>
            </div>
           
        </Fragment>
    )
}

export default Profile;