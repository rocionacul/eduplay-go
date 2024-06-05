import React, { useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./unitygamesstyle.css";
import { Typography, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import NavBar from "../../commons/NavBar";

const unityContent = new UnityContent(
  "build/FruitsnVeggies.json",
  "build/FruitsnVeggiesUnityLoader.js"
);

const { Title } = Typography;
const { Footer } = Layout;

export default function FruitsnVeggies() {
  const navigate = useNavigate();
  const [progression, setProgression] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [unit, setUnit] = useState("");
  const [attemptTime, setAttemptTime] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [successTime, setSuccesTime] = useState(0);
  const [expectedGoal, setExpectedGoal] = useState(0);

  unityContent.on("GameOver", (score) => {
    setTimeout(function () {
      navigate("/");
    }, 7000);
  });

  unityContent.on("FailedAttempt", (time) => {
    const number = attempt + 1;
    setAttempt(number);
    if (attemptTime === 0) {
      setAttemptTime(time);
    } else {
      const newAttemptTime = time + attemptTime;
      setAttemptTime(newAttemptTime);
    }
  });

  return (
    <div className="game-container">
      <NavBar />
      <Title className="game-title"> CONTAR FRUTAS Y VERDURAS </Title>
      <div className="game">
        <Unity unityContent={unityContent} />
      </div>
      <p className="game-instructions">
        SEGUI LA LISTA DE LA VERDULERIA Y LLENA LA CANASTA SELECCIONANDO LOS
        ITEMS DE LAS CANASTAS DEL VERDULERO.
      </p>
      <Footer className="footer" style={{ backgroundColor: "#ffffff" }}>
        EduPlay GO, by hoolab - 2024
      </Footer>
    </div>
  );
}
