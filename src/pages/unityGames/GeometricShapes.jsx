import React, { useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./unitygamesstyle.css";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from "../../commons/NavBar";

const unityContent = new UnityContent(
  "build/GeometricShapes.json",
  "build/GeometricShapesUnityLoader.js"
);

const { Title } = Typography;
const { Footer } = Layout;

export default function GeometricShapes() {
  const navigate = useNavigate();
  const [gameOver, setGameOver] = useState(false);

  unityContent.on("GameOver", (score) => {
    if (gameOver) {
      return;
    }
    setGameOver(true);
    leave(score * 60);
  });

  const leave = () => {
    setTimeout(function () {
      navigate("/");
    }, 7000);
  };

  return (
    <div className="game-container">
      <NavBar />
      <Title className="game-title">
        {" "}
        FIGURAS GEOMETRICAS EN LA SALA DE MUSICA{" "}
      </Title>
      <div className="game">
        <Unity unityContent={unityContent} />
      </div>
      {/* <div>{`Score: ${result} ${unit}`}</div> */}
      <p className="game-instructions">
        AYUDA A MONSTY A JUNTAR LOS POSTERS DE FIGURAS GEOMETRICAS ESCONDIDOS EN
        LA SALA DE MUSICA, PUEDEN ESTAR EN CUALQUIER RINCON!{" "}
      </p>
      <p className="game-instructions">
        {" "}
        PARA MOVER A MONSTY USA LAS LETRAS W A S D, O LAS FLECHAS DE DIRECCION,
        PODES ACELERAR PRESIONANDO SHIFT Y SALTAR CON LA BARRA ESPACIADORA.
      </p>
      <Footer className="footer" style={{ backgroundColor: "#ffffff" }}>
        EduPlay GO, by hoolab - 2024
      </Footer>
    </div>
  );
}
