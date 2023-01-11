import react, { Fragment,useState,useContext, useEffect } from 'react';
import { Navigate,useNavigate  } from 'react-router-dom';
import '../assets/css/userProfile.css';
import AuthContext from '../context/auth/AuthContext';
import Alert from '../components/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Profile = () =>{
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const {loading,setLoading,user,createProfile,showAlert,setAlert,msg,alertMsg} = authContext;

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
      
    const {membership} = userProfile 
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
    const [newPassword,setNewPassword] = useState({
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

    if (loading) return (<h1>Loading...</h1>);

    return (
        <Fragment>
        <div class="container">
          {showAlert && <Alert msg={["success",alertMsg]}/>}
           
                <div class="main-body">
               
                <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                     
                      {user?.fname}{' '}{user?.lname}
                      <p class="text-muted mb-1" style={{"color":"red",'fontWeight':"bold"}}>{user?.email}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
        
              <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" >Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-muted">
                      {user?.fname}{' '}{user?.lname}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-muted" >
                      {user?.email}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-muted">
                      {user?.phone}
                    </div>
                  </div>
                  <hr/>
               
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-muted">
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
                      <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">Change Password</h4>
                        <form class="forms-sample">
                          <div class="form-group">
                            <label for="exampleInputPassword1">Old Password</label>
                            <input type="password" class="form-control" name="oldPassword" placeholder="*********" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">New Password</label>
                            <input type="password" class="form-control" name="NewPassword" placeholder="**********" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">confirm Password</label>
                            <input type="password" class="form-control" name="confirmNewPassword" placeholder="*********" />
                          </div>
                          <button type="submit" class="btn btn-success mr-2">Submit</button>
                          <button class="btn btn-light" onClick={()=>setShowDiv(false)}>Cancel</button>
                        </form>
                      </div>
                    </div>
                  </>:null}



              </div>
            </div>




        <div className='container'>
            
            <div class="col-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">User Profile</h4>
                    <form class="form-sample" onSubmit={onSubmit}>
                      
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                          {/* <h2>{userProfile.fname}</h2> */}
                            <label class="col-sm-3 col-form-label">First Name</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" name="fname" value={userProfile?.fname || ''}  onChange={onChange} />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Last Name</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" name="lname" value={userProfile?.lname || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Gender</label>
                            <div class="col-sm-9">
                              <select class="form-control" name="gender" value={userProfile?.gender || ''} onChange={onChange}>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Date of Birth</label>
                            <div class="col-sm-9">
                              <input type="date" class="form-control" placeholder="dd/mm/yyyy" name="dob"  onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Category</label>
                            <div class="col-sm-9">
                              <select class="form-control" name="category" value={userProfile?.category || ''} onChange={onChange}>
                                <option>Category1</option>
                                <option>Category2</option>
                                <option>Category3</option>
                                <option>Category4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Membership</label>
                            <div class="col-sm-4">
                              <div class="form-radio">
                                <label class="form-check-label"/>
                                <input className="form-check-input" type="checkbox" value="free" id="flexCheckDefault" checked={userProfile.free}  onChange={handleCheck}/>Free
                              </div>
                            </div>
                            <div class="col-sm-5">
                              <div class="form-radio">
                                <label class="form-check-label"/>
                                <input className="form-check-input" type="checkbox" value="professional" id="flexCheckDefault" checked={userProfile.professional} onChange={handleCheck}/>Professional
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p class="card-description"> Address </p>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Address 1</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" name="address1" value={userProfile?.address1 || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">State</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" name="state" value={userProfile?.state || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Address 2</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" name="address2" value={userProfile?.address2 || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Postcode</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" name="postcode" value={userProfile?.postcode || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">City</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" name="city" value={userProfile?.city || ''} onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Country</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" name="country" value={userProfile?.country || ''} onChange={onChange}/>
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