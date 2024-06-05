/* eslint-disable jsx-a11y/alt-text */
import { React } from "react";
import { Link } from "react-router-dom";
import "./games.css";
import mayo from "../../assets/images/gamesavatars/mayo.jpg";
import CanvasESI from "../../assets/images/gamesavatars/CanvasESI.png";
import colormix from "../../assets/images/gamesavatars/colormix.png";
import farm from "../../assets/images/gamesavatars/farm.png";
import fyv from "../../assets/images/gamesavatars/fyv.png";
import geoshapes from "../../assets/images/gamesavatars/geoshapes.png";
import letters from "../../assets/images/gamesavatars/letters.png";
import memorygame from "../../assets/images/gamesavatars/memorygame.png";
import missingscene from "../../assets/images/gamesavatars/missingscene.png";
import logo from "../../assets/images/logo.png";

const style = {
  width: "30%",
  padding: "20px",
  borderRadius: "60px",
  overflow: "hidden",
  borderWidth: 5,
  borderColor: "white",
};
export default function Games() {
  return (
    <div className="gamesoptions-container">
      <img
        style={{ width: "50%", marginBottom: "30px", marginTop: "25px" }}
        src={logo}
      />
      <div>
        <Link to="/juego-formas">
          <img style={style} src={geoshapes} />
        </Link>
        <Link to="/juego-frutas-verduras">
          <img style={style} src={fyv} />
        </Link>
        <Link to="/juego-letras">
          <img style={style} src={letters} />
        </Link>

        <Link to="/juego-cuento">
          <img style={style} src={missingscene} />
        </Link>
        <Link to="/juego-cabildo">
          <img style={style} src={mayo} />
        </Link>

        <Link to="/juego-memoria">
          <img style={style} src={memorygame} />
        </Link>

        <Link to="/juego-cuerpo-humano">
          <img style={style} src={CanvasESI} />
        </Link>

        <Link to="/juego-colores">
          <img style={style} src={colormix} />
        </Link>

        <Link to="/juego-granja">
          <img style={style} src={farm} />
        </Link>
      </div>
    </div>
  );
}
