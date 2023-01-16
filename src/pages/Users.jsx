import react, { Fragment,useState,useContext, useEffect } from 'react';
import UserItem from '../components/UserItem';
import AuthContext from '../context/auth/AuthContext';
import axios from 'axios'


const Users = () =>{
    const authContext = useContext(AuthContext);
    const {loadUsers,loading,users,createUser,user} = authContext;

    useEffect(()=>{
        loadUsers();
        //allUsers();
    },[]);

    const [userData,setuserData] = useState({
      fname:"",
      lname:"",
      email:"",
      password:""
    });

    const onChange = (e) =>{
      console.log("form is changed");
      setuserData({...userData,[e.target.name]:e.target.value});

    }

    const onSubmit = (e) =>{
      e.preventDefault();
      console.log("form is submitted",userData);
      createUser(userData,user._id);
      
    }
    if(loading) return (<h1>Loading...</h1>);
    return(
        <Fragment>
            <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Add User</h4>
                    <form className="form-sample" onSubmit={onSubmit}>
                      
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group row">
                          {/* <h2>{userProfile.fname}</h2> */}
                            <label className="col-sm-3 col-form-label">First Name</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="fname"   onChange={onChange} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Last Name</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" name="lname" onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Email</label>
                            <div className="col-sm-9">
                              <input type="email" className="form-control" name="email" onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Password</label>
                            <div className="col-sm-9">
                              <input type="password" className="form-control" name="password" onChange={onChange}/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button type="submit" className='btn btn-success'>Add User</button>
                    </form>
                  </div>
                </div>
              
              </div>
              <h4 className='display-4'>Total users: {users.length}</h4>

              {/* user item here */}
              <hr/>
              {users.map(user =>(<UserItem key={user._id} user={user}/>))}

        

        </Fragment>
    )
}

export default Users;