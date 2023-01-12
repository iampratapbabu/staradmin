import react, { Fragment,useState,useContext, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import AuthContext from '../context/auth/AuthContext';




const MyVerticallyCenteredModal= (props) => {

    useEffect(()=>{
        console.log("use effect from modal");

    },[]);

    const authContext = useContext(AuthContext);
    const {loading,setLoading,user,createProfile,showAlert,setAlert,msg,alertMsg,changePassword,changeImage} = authContext;
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

    const onChange = (e) =>{
        setUserProfile({...userProfile,[e.target.name]:e.target.value});
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        props.onHide();
        console.log("Modal submitted",userProfile);
        createProfile(props.userval._id,userProfile);
    }

    const fillForm = () =>{
        setUserProfile(props.userval)
        console.log(userProfile)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
           Edit User 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='container'>
            <button id='fillformauto' onClick={fillForm}></button>
            <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">User Profile</h4>
                    <p className='text-muted'>{props.userval?.email}</p>
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
                              <input type="text" className="form-control" name="lname" value={userProfile?.lname || ''}  onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Gender</label>
                            <div className="col-sm-9">
                              <select className="form-control" name="gender" value={userProfile?.gender || ''}  onChange={onChange}>
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
                                <input className="form-check-input" type="checkbox" value="free"  checked={userProfile.free}  onChange={handleCheck}/>Free
                              </div>
                            </div>
                            <div className="col-sm-5">
                              <div className="form-radio">
                                <label className="form-check-label"/>
                                <input className="form-check-input" type="checkbox" value="professional"  checked={userProfile.free}  onChange={handleCheck}/>Professional
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
                              <input type="text" className="form-control" name="address1" value={userProfile?.address1 || ''}  onChange={onChange}/>
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
                              <input type="text" className="form-control" name="address2" value={userProfile?.address2 || ''}  onChange={onChange}/>
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
                              <input type="text" className="form-control" name="country" value={userProfile?.country || ''}  onChange={onChange}/>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


const UserItem = ({user}) =>{
    const authContext = useContext(AuthContext);
    const {deleteUser} = authContext;
    const [modalShow, setModalShow] = useState(false);
    const [myUser,setmyUser] = useState({});
    const getUser = (userid) =>{
        axios.get(`http://localhost:3200/users/profile/${userid}`).then(res=>{
            console.log(res);
            setmyUser(res.data.user);
            console.log("user from state of useritem is",myUser);
        }).catch(e=>{
            console.log(e)
        })
    }


    const editUser = (userid) =>{
        
        setModalShow(true);
        getUser(userid);
        
        console.log("user to be edited with id",userid);
       
    }

    const detailUser = (userid) =>{
        setModalShow(true);
        getUser(userid);
        console.log("detail of user with id",userid);
    }

    const deleteUserSingle = (userid) =>{
        getUser(userid);
        console.log("user to be deleted with id",userid);
        deleteUser(userid);
    }

    return (
        <Fragment>

         <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} userval={myUser}/>

            <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    {/* <h4 className="card-title">Add User</h4> */}
                      <div className="row">
                        <div className="col-md-1"> 
                            <img className="img-sm rounded-circle" src={`http://localhost:3200/${user?.photo}`} alt="img" />
                        </div>
                        <div className="col-md-2">
                          {/* <h2>{userProfile.fname}</h2> */}
                              <h5 className='text-muted'>{user.fname}{' '}{user.lname}</h5>
                        </div>
                        <div className="col-md-3">
                        <h5 className='text-muted'>{user.email}</h5>
                        </div>
                        <div className="col-md-1">
                            {/* <h5 className='text-muted'>{user.role}</h5> */}
                            <h4>{user.role=='admin'?<Badge bg="danger">admin</Badge>:<Badge bg="secondary">{user.role}</Badge>}</h4>
                        </div>
                        <div className="col-md-2">
                            <h5 className='text-muted'>{user.state}</h5>
                        </div>
                        <div className="col-md-3">
                          <button onClick={(user_id)=>editUser(user._id)} className='btn btn-inverse-primary  mr-1'>Edit</button>
                          <button onClick={(user_id)=>detailUser(user._id)} className='btn btn-inverse-info mr-1'>Details</button>
                          <button onClick={(user_id)=>deleteUserSingle(user._id)}className='btn btn-inverse-danger  mr-1'>Delete</button>
                      </div>

                      </div>
                    
                  </div>
                </div>
              
            </div>
        </Fragment>
    )
};

export default UserItem;