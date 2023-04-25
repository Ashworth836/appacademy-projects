import React from "react";
import bulbasaurImage from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  const showcaseImage = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%"
  };

  return (
    <div className="showcase-container">
      <h1>{favPokemon}'s Showcase</h1>
      <img style={showcaseImage} src={bulbasaurImage} alt={favPokemon} />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="type-style">{pokeCharacteristics.type}</span>
        and one of their moves is
        <span className="move-style">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
