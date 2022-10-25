import React, { useEffect, useState } from "react";
import classes from "./Login.jss";
import {useNavigate} from 'react-router-dom'

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [runawayFlag, setRunawayFlag] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({
    username: "",
    password: "",
  });
  const [runawayPos, setRunawayPos] = useState(true);
  const styles = classes();
  const runawayStyle = {
    justifyContent: runawayFlag
      ? runawayPos
        ? "flex-start"
        : "flex-end"
      : "center",
  };

  useEffect(() => {
    if( loginErrors.username === '' && loginErrors.password === ''){
      setRunawayFlag(false);
    } else{
      setRunawayFlag(true);
    }
  }, [loginErrors]);

  useEffect(() => {
    if( loginForm.username === '' || loginForm.password === ''){
      setRunawayFlag(true);
    } else{
      setRunawayFlag(false);
    }
  }, [loginForm]);

  const handleChange = (e: any) => {
    setLoginForm({...loginForm, [e.target.id]: e.target.value})
    e.target.value === ''? setLoginErrors({...loginErrors, [e.target.id]: `${e.target.id} is required.`}) : setLoginErrors({...loginErrors, [e.target.id]: ''}) 
  }

  const handleButton = () => {
    if(runawayFlag) setRunawayPos(!runawayPos);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <p className={styles.logo}>PMT-X</p>
        </div>
        <div className={styles.form}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Username"
            onChange={handleChange}
          />
          <span className="errorMsg">{loginErrors.username}</span>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <span className="errorMsg">{loginErrors.password}</span>
          <div className={styles.buttonWrapper} style={runawayStyle}>
            <button onMouseOver={handleButton} onClick={() => navigate('/employee')}> Login </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
