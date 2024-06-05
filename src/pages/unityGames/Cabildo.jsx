import React, { useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./unitygamesstyle.css";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from "../../commons/NavBar";

const unityContent = new UnityContent(
  "build/Cabildo.json",
  "build/CabildoUnityLoader.js"
);

const { Title } = Typography;
const { Footer } = Layout;

export default function Cabildo() {
  const navigate = useNavigate();
  const [sceneTime, setSceneTime] = useState(0);

  unityContent.on("NextOption", (optionTime) => {
    if (optionTime === 0) {
      setSceneTime(optionTime);
    } else {
      const newTime = optionTime + sceneTime;
      setSceneTime(newTime);
    }
  });

  unityContent.on("GameOver", () => {
    setTimeout(function () {
      navigate("/");
    }, 7000);
  });

  return (
    <div className="game-container">
      <NavBar />
      <Title className="game-title"> ANTES Y DESPUES - EPOCA COLONIAL </Title>
      <div className="game">
        <Unity unityContent={unityContent} />
      </div>
      <p className="game-instructions">
        CON EL MOUSE, SELECCIONA EL ITEM QUE CORRESPONDA A LA EPOCA INDICADA, SI
        ES ALGO TIPICO DEL 1800 O DE LA ACTUALIDAD.
      </p>
      <Footer className="footer" style={{ backgroundColor: "#ffffff" }}>
        EduPlay Go 2024
      </Footer>
    </div>
  );
}
