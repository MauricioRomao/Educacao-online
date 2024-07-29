import { FaUser, FaLock } from 'react-icons/fa';


function Login_content (){
    return (
        <div>

<form action="post" method="">
          <div className="input-group">
            <div className="input-wrapper">
              <FaUser className="icon" />
              <input type="text" name="nome" id="nome" placeholder="Digite o seu nome" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-wrapper">
              <FaLock className="icon" />
              <input type="password" name="pass" id="pass" placeholder="Senha" />
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        
     
        </div>
    )
}


export default Login_content