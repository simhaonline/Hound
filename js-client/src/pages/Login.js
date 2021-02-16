import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import AtomSpinner from '../components/utils/AtomSpinner'
import '../CSS/loginregister.css'
import {graphqlLogin,graphqlSignUp} from '../graphql_client/graphqlAuth'
import {setAuthUser, setLogin} from '../actions/authActions';
import { useHistory } from "react-router-dom";
import DogIcon from '../icons/dog-logo.svg' 
const Login = ({auth:{isAuth},setLogin,setAuthUser}) => {
	const [signup,setSignUp] = useState(false)
	const swapForm = () => setSignUp(!signup)
	const getForm = () => signup? " right-panel-active" : ""
	const [email,setEmail ] = useState("");
	const [firstName,setFirstName ] = useState("");
	const [lastName,setLastName] = useState("");
	const history = useHistory();
	const [password,setPassword ] = useState("");
	console.log(firstName,lastName,password,email)
	useEffect(() => {
		console.log('Auth changes!',isAuth)
		const token = localStorage.getItem('PhotonToken')
		if (token) {
			setAuthUser(token)
			history.push('/app');
		}
	},[isAuth])
	const SignIn = (e) => {
		e.preventDefault()
		console.log('Sending setLogin!')
		setLogin(email,password)
	}

	const SignUp = async (e) => {
		e.preventDefault()
		const token = await graphqlSignUp(firstName,lastName,password,email)
		if(token) {
			setAuthUser(token)
			history.push('/app');
		}
		
	}
    return ( <>
	<div className={"login-container"}>
		<div className={"hound-login"}>
            <h1>
              <span> <img src={DogIcon} />Hound</span>
            </h1>
		</div>
		<div className={"login"}>
			<div className={"container" + getForm()}  id="container" >
			<div className="form-container sign-up-container">
				<form action="#">
					<h1>Create Account</h1>
					<div className="social-container">
						<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
						<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
						<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
					</div>
					<span>or use your email for registration</span>
					<input type="text" placeholder="Name" onChange={e => setFirstName(e.target.value)}/>
					<input type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
					<input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
					<input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
					<button style={{cursor:"pointer"}} onClick={SignUp}>Sign Up</button>
				</form>
			</div>
			<div className="form-container sign-in-container">
				<form action="#">
					<h1>Sign in</h1>
					<div className="social-container">
						<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
						<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
						<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
					</div>
					<span>or use your account</span>
					<input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
					<input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
					<a href="#">Forgot your password?</a>
					<button style={{cursor:"pointer"}} onClick={SignIn}>Sign In</button>
				</form>
			</div>
			<div className="overlay-container">
				<div className="overlay">
					<div className="overlay-panel overlay-left">
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
						<button className="ghost" id="signIn" onClick={swapForm} style={{cursor:"pointer"}}>Sign In</button>
					</div>
					<div className="overlay-panel overlay-right">
						<h1>Hello!</h1>
						<p>Enter your personal details and start journey with us</p>
						<button className="ghost" id="signUp" onClick={swapForm} style={{cursor:"pointer"}}>Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </>);
    
}


const mapStateToProps = (state) => ({auth:state.auth});
const mapDispatchToProps = {setLogin,setAuthUser};
export default connect(mapStateToProps,mapDispatchToProps)(Login);