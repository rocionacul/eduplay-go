import React, { useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./unitygamesstyle.css";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from "../../commons/NavBar";

const unityContent = new UnityContent(
  "build/Colors.json",
  "build/ColorsUnityLoader.js"
);

const { Title } = Typography;
const { Footer } = Layout;

export default function Colors() {
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
      <Title className="game-title"> COLORES COMBINADOS </Title>
      <div className="game">
        <Unity unityContent={unityContent} />
      </div>
      <p className="game-instructions">
        CON EL MOUSE, SELECCIONA LOS COLORES QUE COMPONEN LA FIGURA. TAMBIEN VAS
        A PODER SELECCIONAR QUE FIGURA TIENE EL COLOR DE LOS COLORES PRIMARIOS
        DE REFERENCIA.
      </p>
      <Footer className="footer" style={{ backgroundColor: "#ffffff" }}>
        EduPlay GO, by hoolab - 2024
      </Footer>
    </div>
  );
}
