import React, { useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./unitygamesstyle.css";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from "../../commons/NavBar";

const unityContent = new UnityContent(
  "build/ESIdifferences.json",
  "build/ESIdifferencesUnityLoader.js"
);

const { Title } = Typography;
const { Footer } = Layout;

export default function ESIdifferences() {
  const navigate = useNavigate();

  unityContent.on("GameOver", (score) => {
    setTimeout(function () {
      navigate("/");
    }, 7000);
  });

  return (
    <div className="game-container">
      <NavBar />
      <Title className="game-title"> ENCUENTRA LAS DIFERENCIAS - ESI </Title>
      <div className="game">
        <Unity unityContent={unityContent} />
      </div>
      <p className="game-instructions">
        CON EL MOUSE, IDENTIFICA LAS DIFERENCIAS ENTRE LAS DOS IMAGENES.
      </p>
      <Footer className="footer" style={{ backgroundColor: "#ffffff" }}>
        EduPlay Go 2024
      </Footer>
    </div>
  );
}
