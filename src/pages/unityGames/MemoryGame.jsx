import React, { useState, useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./unitygamesstyle.css";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from "../../commons/NavBar";

const unityContent = new UnityContent(
  "build/Memorygame.json",
  "build/MRMUnityLoader.js"
);

const { Title } = Typography;
const { Footer } = Layout;

export default function MemoryGame() {
  const navigate = useNavigate();

  unityContent.on("GameOver", () => {
    setTimeout(function () {
      navigate("/");
    }, 7000);
  });

  return (
    <div className="game-container">
      <NavBar />
      <Title className="game-title">
        {" "}
        JUEGO DE LA MEMORIA - MARIA ROSA MOLAS{" "}
      </Title>
      <div className="game">
        <Unity unityContent={unityContent} />
      </div>
      <p className="game-instructions">
        IDENTIFICA LAS IMAGENES QUE SON IGUALES.
      </p>
      <Footer className="footer" style={{ backgroundColor: "#ffffff" }}>
        EduPlay Go 2024
      </Footer>
    </div>
  );
}
