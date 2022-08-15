import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import AuthContext from '../context';
import './Login.css'

function Login(props) {
    // eslint-disable-next-line no-unused-vars
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="global-container">
	        <div className="card login-form">
	            <div className="card-body">
	            	<h3 className="card-title text-center">Log in</h3>
	                <div className="card-text">
	            	{/* <!--
	                	<div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> --> */}
		            	<form onSubmit={login}>
	                		<div className="form-group">
		            			<label for="exampleInputEmail1">Your name</label>
		            			<MyInput type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" required />
		            		</div>
		            		<div className="form-group my-2">
				            	<label for="exampleInputPassword1">Password</label>
				            	<a href="!#" style={{float:'right',fontSize:'12px'}}>Forgot password?</a>
				            	<MyInput type="password" className="form-control form-control-sm" id="exampleInputPassword1" required/>
			            	</div>
			            	<button type="submit" className="btn btn-primary btn-block w-100">Sign in</button>
				            <div className="sign-up">Don't have an account? 
                                <p><a href="!#">Create One</a></p>
		            		</div>
		            	</form>
		            </div>
	            </div>
            </div>
        </div>
    );
}

export default Login;