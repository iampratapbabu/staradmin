import react, { Fragment, useEffect,useContext } from 'react';
import AuthContext from '../context/auth/AuthContext';


const Alert = (props) =>{
    const authContext = useContext(AuthContext);
    const {loading,setLoading,user,createProfile,showAlert,setAlert} = authContext;

    useEffect(()=>{
        // setTimeout(()=>{
        //     setAlert(false);
        // })
    },[])


    console.log(props);
    return(
        <Fragment>
            <div class={`alert alert-${props.msg[0]}`} role="alert">
                {props.msg[1]}
                
                <button onClick={()=>{setAlert(false)}} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">x</button>
            </div>
        </Fragment>
    )
};

export default Alert;