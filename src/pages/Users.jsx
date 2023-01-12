import react, { Fragment,useState,useContext, useEffect } from 'react';
import UserItem from '../components/UserItem';
import AuthContext from '../context/auth/AuthContext';
import axios from 'axios'


const Users = () =>{
    const authContext = useContext(AuthContext);
    const {loadUsers,loading,users} = authContext;

    useEffect(()=>{
        loadUsers();
        //allUsers();
    },[]);

    const [userData,setuserData] = useState([]);

    const onChange = () =>{
        console.log("form is changed")
    }

    const onSubmit = (e) =>{
        console.log("form is submitted");
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
                              <input type="text" className="form-control" name="lname" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Email</label>
                            <div className="col-sm-9">
                              <input type="email" className="form-control" name="lname" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Password</label>
                            <div className="col-sm-9">
                              <input type="password" className="form-control" name="lname" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button type="submit" className='btn btn-success'>Add User</button>
                    </form>
                  </div>
                </div>
              
              </div>
              <h4 className='display-4'>All users</h4>
              <hr/>
              {users.map(user =>(<UserItem id={user._id} user={user}/>))}

        

        </Fragment>
    )
}

export default Users;