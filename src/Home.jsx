import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import qr from "./assets/qr.png";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { salt } from "./controller/UserController";
import { API, CURRENT } from "./controller/Config";

function Home() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("loading");
  
  const goScan = () => {
    navigate('/scan');
  };

  useEffect(() => {
    salt().then(json => {
        setUrl(CURRENT + "history/" + localStorage.getItem("username") + "/" + json.salt);
    });
  }, []);

  return (
    <Layout>
        <div className="accident-section">
            <p>¿Ha ocurrido un accidente?</p>
            <button className="accident-button" onClick={goScan}>!</button>
        </div>
        <div className="id-section">
            <div className="id-box">
                <b className="box-title">Mi Cédula</b>
                <QRCode value={url} size={195} />
            </div>
        </div>
    </Layout>
    );
}

export default Home;
