import { useEffect, useState } from "react";
import Layout from "./Layout";
import user from "./assets/user.jpg";
import { myHistory } from "./controller/UserController";

function User() {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [diabetes, setDiabetes] = useState(false);
  const [hypertension, setHypertension] = useState(false);
  const [cardiacIssues, setCardiacIssues] = useState(false);
  const [information, setInformation] = useState(false);

  useEffect(() => {
    myHistory().then(json => {
        setCardiacIssues(json.cardiacIssues);
        setDiabetes(json.diabetes);
        setInformation(json.information);
        setHypertension(json.hypertension);
    }).catch(err => {
        alert("Error desconocido");
    });
  });

  return (
    <Layout>
        <div className="user-container">
            <div className="core">
                <img src={user} alt="" className="user-image" />
                <div className="info">
                    <h4>Nombre: {username}</h4>
                    <p>{information}</p>
                </div>
            </div>
            <div className="medical-history">
                <ul>
                    <li>Diabetes: {diabetes ? 'Si' : 'No'}</li>
                    <li>Hipertensión: {hypertension ? 'Si' : 'No'}</li>
                    <li>Problemas Cardiacos: {cardiacIssues ? 'Si' : 'No'}</li>
                </ul>
            </div>
        </div>
    </Layout>
  );
}

export default User;
