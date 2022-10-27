import React, { useEffect, useState } from "react";
import classes from "./Login.jss";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [runawayFlag, setRunawayFlag] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
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

const getUser=()=>{
  axios.post(`${process.env.REACT_APP_API_URL}/signin`, loginForm)
  .then((response)=>{
      console.log(response);
      // sessionStorage.setItem('token', response.data)
      // if(response.data.role === 'employee'){
      //   navigate('/employee')
      // }
      // else{
      //   navigate('/manager')
      // }
  })
  .catch((error)=>{
    console.log(error)
  })
}

  useEffect(() => {
    if( loginErrors.email === '' && loginErrors.password === ''){
      setRunawayFlag(false);
    } else{
      setRunawayFlag(true);
    }
  }, [loginErrors]);

  useEffect(() => {
    if( loginForm.email === '' || loginForm.password === ''){
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
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <span className="errorMsg">{loginErrors.email}</span>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
          <span className="errorMsg">{loginErrors.password}</span>
          <div className={styles.buttonWrapper} style={runawayStyle}>
            <button onMouseOver={handleButton} onClick={getUser}> Login </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
