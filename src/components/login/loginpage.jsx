import { useState } from "react"
import { Link } from "react-router-dom"
import { login } from "../../utils/api"
import PropTypes from 'prop-types';

export default function Login ({setTheToken}){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const onLoginHandler = async (e) => {
    e.preventDefault();

    const { error, data } = await login({ email, password });
 
    if (!error) {
      setTheToken(data);
    } return (
        setEmail(''),
        setPassword('')
    )
  }
    return(
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={onLoginHandler}>
        <input type="text" placeholder="Email" value={email} onChange={emailHandler}/>
        <input type="password" placeholder="Password" value={password} onChange={passwordHandler}/>
        <button className="login-btn" type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to={'/register'}>Sign-up</Link></p>
    </div>
    )
  }