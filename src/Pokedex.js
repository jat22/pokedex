import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

const Pokedex = ({pokemon}) => (
	<div className ="pokedex-container">
		{pokemon.map(p => <Pokecard
			key={p.id}
			id={p.id}
			name={p.name}
			kind={p.type}
			base_experience={p.base_experience}
		/>)}
	</div>
);

export default Pokedex