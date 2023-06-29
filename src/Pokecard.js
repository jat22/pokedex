import React from "react";
import "./Pokecard.css"

const Pokecard = ({id, name, kind, base_experience}) => (
	<div className="pokecard-container">
		<h5>{name}</h5>
		<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
		<p>Type: {kind}</p>
		<p>EXP: {base_experience}</p>
	</div>
)

export default Pokecard