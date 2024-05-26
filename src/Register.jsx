import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import qr from "./assets/qr.png";
import { login, register, token } from "./controller/UserController";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  const onRegister = () => {
    register(user, password).then(json => {
        navigate("/login");
    }).catch(err => {
        alert("No se ha podido registrar");
    });
  };

  return (
    <Layout>
        <div className="login-section">
            <h1>Crear cuenta</h1>
            <input type="text" name="user" onInput={(ev) => setUser(ev.target.value)} placeholder="Usuario" />
            <input type="password" name="password" onInput={(ev) => setPassword(ev.target.value)} placeholder="Contraseña" />
            <button onClick={(ev) => {
                ev.preventDefault();
                onRegister();
            }}>Registrar</button>
        </div>
    </Layout>
    );
}

export default Register;
