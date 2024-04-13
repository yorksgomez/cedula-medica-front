import Layout from "./Layout";
import React from 'react';
import { useNavigate } from "react-router-dom";
import Webcam from 'react-webcam';

function Scan() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const navigate = useNavigate();
    delay(10000).then(() => {
        navigate('/user');
    });
    const webcamRef = React.useRef(null);
    return (
        <Layout>
            <div className="cam-container">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={300}
                    height={300}
                />
            </div>
        </Layout>
    );
}

export default Scan;
