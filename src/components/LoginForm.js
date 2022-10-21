import React, { useState, useEffect, useContext } from 'react';
import '../styles/LoginForm.css';
import { authenticate } from "../services/api"
import { AuthContext } from "../App"

function LoginForm() {
  const { jwtToken, setJwtToken } = useContext(AuthContext);
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")

  async function tryLogin(event) {
    event.preventDefault();
    try {
      const jwtToken = await authenticate(loginMail, loginPassword);
      setJwtToken(jwtToken);
      localStorage.setItem('jwtToken', JSON.stringify(jwtToken));
      setLoginFormOpen(false);

    } catch (error) {
      setErrorMsg(error.response.data.error)
    }
    // await logInWithEmailAndPassword(loginMail, loginPassword);
  }

  useEffect(() => {
    if (isLoginFormOpen) {
      document.getElementsByClassName("login-container")[0].style.display = "block";
    } else {
      document.getElementsByClassName("login-container")[0].style.display = "none";
    }

  }, [isLoginFormOpen])

  return (
    <div className="col-10">
      {jwtToken ? <button onClick={() => { setJwtToken("") }} className="btn btn-outline-danger ">Se déconnecter</button> : <button onClick={() => { setLoginFormOpen(true) }} className="btn btn-light ">Se connecter</button>}
      <div className="center">
        <div className="login-container">
          <button onClick={() => { setLoginFormOpen(false) }} className="close-btn btn btn-outline-danger fas fa-times" title="close"></button>
          <div className="text">
            Connection
          </div>
          {errorMsg && <p color="red">{errorMsg}</p>}
          <form onSubmit={tryLogin}>
            <div className="data">
              <label>Email</label>
              <input type="text" name="loginMail" value={loginMail} onChange={(e) => setLoginMail(e.target.value)} required />
            </div>
            <div className="data">
              <label>Mot de Passe</label>
              <input type="password" name="loginPassword" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
            </div>
            <div className="forgot-pass">
              {/* <a href="#">Forgot Password?</a> */}
            </div>
            <div >
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
            <div className="signup-link">
              {/* Not a member? <a href="#">Signup now</a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm