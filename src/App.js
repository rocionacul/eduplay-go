import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/games/Games";
import Cabildo from "./pages/unityGames/Cabildo";
import ESIdifferences from "./pages/unityGames/ESIdifferences";
import FruitsnVeggies from "./pages/unityGames/FruitsnVeggies";
import MemoryGame from "./pages/unityGames/MemoryGame";
import LosTresCerditos from "./pages/unityGames/LosTresCerditos";
import FarmAnimals from "./pages/unityGames/FarmAnimals";
import Colors from "./pages/unityGames/Colors";
import GeometricShapes from "./pages/unityGames/GeometricShapes";
import MissingLetter from "./pages/unityGames/MissingLetter";
import ScrollToTop from "./commons/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/juego-memoria" element={<MemoryGame />} />
          <Route path="/juego-cuento" element={<LosTresCerditos />} />
          <Route path="/juego-granja" element={<FarmAnimals />} />
          <Route path="/juego-cabildo" element={<Cabildo />} />
          <Route path="/juego-colores" element={<Colors />} />
          <Route path="/juego-cuerpo-humano" element={<ESIdifferences />} />
          <Route path="/juego-frutas-verduras" element={<FruitsnVeggies />} />
          <Route path="/juego-formas" element={<GeometricShapes />} />
          <Route path="/juego-letras" element={<MissingLetter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
