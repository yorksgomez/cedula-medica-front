import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import qr from "./assets/qr.png";

function Home() {
  const navigate = useNavigate();
  
  const goScan = () => {
    navigate('scan');
  };

  return (
    <Layout>
        <div className="accident-section">
            <p>¿Ha ocurrido un accidente?</p>
            <button className="accident-button" onClick={goScan}>!</button>
        </div>
        <div className="id-section">
            <div className="id-box">
                <b className="box-title">Mi Cédula</b>
                <img src={qr} alt="" className="qr" />
            </div>
        </div>
    </Layout>
    );
}

export default Home;
