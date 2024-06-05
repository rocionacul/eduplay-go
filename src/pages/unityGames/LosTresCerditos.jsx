import React, { useState, useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./unitygamesstyle.css";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from "../../commons/NavBar";

const unityContent = new UnityContent(
  "build/LosTresCerditos.json",
  "build/LosTresCerditosUnityLoader.js"
);

const { Title } = Typography;
const { Footer } = Layout;

export default function LosTresCerditos() {
  const navigate = useNavigate();

  unityContent.on("GameOver", () => {
    setTimeout(function () {
      navigate("/");
    }, 7000);
  });

  return (
    <div className="game-container">
      <NavBar />
      <Title className="game-title"> SECUENCIA - LOS TRES CERDITOS </Title>
      <div className="game">
        <Unity unityContent={unityContent} />
      </div>
      <p className="game-instructions">
        LEE EL CUENTO EN CLASE Y AL FINAL IDENTIFICA LA ESCENA QUE NO
        CORRESPONDE A LOS TRES CERDITOS.
      </p>
      <Footer className="footer" style={{ backgroundColor: "#ffffff" }}>
        EduPlay GO, by hoolab - 2024
      </Footer>
    </div>
  );
}
