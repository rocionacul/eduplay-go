import React, { useState, useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./unitygamesstyle.css";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from "../../commons/NavBar";

const unityContent = new UnityContent(
  "build/MissingLetter.json",
  "build/MissingLetterUnityLoader.js"
);

const { Title } = Typography;
const { Footer } = Layout;

export default function MissingLetter() {
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
      <Title className="game-title"> COMPLETA LA PALABRA </Title>
      <div className="game">
        <Unity unityContent={unityContent} />
      </div>
      <p className="game-instructions">
        IDENTIFICA LA LETRA QUE FALTA PARA COMPLETAR LA PALABRA DE LA IMAGEN DE
        REFERENCIA.
      </p>
      <Footer className="footer" style={{ backgroundColor: "#ffffff" }}>
        EduPlay Go 2024
      </Footer>
    </div>
  );
}
