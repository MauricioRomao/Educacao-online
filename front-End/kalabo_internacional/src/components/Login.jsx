import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';




function Login_content (){


  function FormAction(e){
  
    e.preventDefault()
    
    console.log(`User ${name}` )
    console.log(`Pass ${pass}` )
    

  }

  const [name, Setname] = useState()
  const [pass, Setpass] = useState()
  




    return (
        <div>

<form action="post" method="" onSubmit={FormAction}>
          <div className="input-group">
            <div className="input-wrapper">
              <FaUser className="icon" />
              <input type="text" name="nome" id="nome" 
              onChange={(e)=> Setname(e.target.value) }
              placeholder="Digite o seu nome" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-wrapper">
              <FaLock className="icon" />
              <input type="password" name="pass" id="pass"
              onChange={(e)=> Setpass(e.target.value)}
              placeholder="Senha" />
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        
     
        </div>
    )
}


export default Login_content