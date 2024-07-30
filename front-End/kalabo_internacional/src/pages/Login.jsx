import React from 'react';
import logo from "../assets/logo.png"
import { FaUser, FaLock } from 'react-icons/fa';
import Login_content from '../components/Login';
import Footer from '../components/Footer';
import './Login.css';
function Login() {
  return (
    <div className="login_fom container">
      <img src={logo} alt="" />
      <h2 className="college_name">Kalabo Internacional</h2>
      <div className="formulario">
        
      < Login_content />
      </div>
      <Footer />  
    </div>
  );
}

export default Login;
