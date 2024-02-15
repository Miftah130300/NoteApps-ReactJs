import { useState } from "react"
import { Link } from "react-router-dom"
import { register } from "../../utils/api"

export default function Register (){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onNameHandler = (e) => {
        setName(e.target.value)
    }

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const { error } = await register({ name, email, password });
        if (!error) {
            alert("Registration successful");
            setName('')
            setEmail('')
            setPassword('')
        } else {
            alert("Registration failed");
            setName('')
            setEmail('')
            setPassword('')
        }
    };

    return(
    <div className="login-form">
      <h2>Register</h2>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Name" value={name} onChange={onNameHandler}/>
        <input type="text" placeholder="Email" value={email} onChange={onEmailHandler}/>
        <input type="password" placeholder="Password" value={password} onChange={onPasswordHandler}/>
        <button type="submit">Register</button>
      </form>
      <p>Have an account? <Link to={'/login'}>Login</Link></p>
    </div>
    )
}