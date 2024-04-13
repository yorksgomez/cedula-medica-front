import Layout from "./Layout";
import qr from "./assets/qr.png";

function Home() {
  return (
    <Layout>
        <div className="accident-section">
            <p>¿Ha ocurrido un accidente?</p>
            <button className="accident-button">!</button>
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
