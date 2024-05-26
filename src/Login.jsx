import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import qr from "./assets/qr.png";
import { login, register, token } from "./controller/UserController";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  const onLogin = () => {
    login(user, password).then(json => {
        localStorage.setItem("token", json.jwtToken);
        localStorage.setItem("username", json.username);
        navigate("/home");
    }).catch(err => {
        alert("Credenciales invalidas!");
    });
  };

  return (
    <Layout>
        <div className="login-section">
            <h1>Iniciar Sesión</h1>
            <input type="text" name="user" onInput={(ev) => setUser(ev.target.value)} placeholder="Usuario" />
            <input type="password" name="password" onInput={(ev) => setPassword(ev.target.value)} placeholder="Contraseña" />
            <button onClick={(ev) => {
                ev.preventDefault();
                onLogin();
            }}>Ingresar</button>
        </div>
    </Layout>
    );
}

export default Login;
