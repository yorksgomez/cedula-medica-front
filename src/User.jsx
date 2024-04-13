import Layout from "./Layout";
import user from "./assets/user.jpg";

function User() {
  return (
    <Layout>
        <div className="user-container">
            <div className="core">
                <img src={user} alt="" className="user-image" />
                <div className="info">
                    <h4>Nombre: John Doe</h4>
                    <p>Edad: 20</p>
                    <p>Padecimiento: Diabetes</p>
                </div>
            </div>
            <div className="medical-history">
                <ul>
                    <li>Historial Medico</li>
                    <li>Historial Medico</li>
                    <li>Historial Medico</li>
                    <li>Historial Medico</li>
                    <li>Historial Medico</li>
                    <li>Historial Medico</li>
                </ul>
            </div>
        </div>
    </Layout>
  );
}

export default User;
