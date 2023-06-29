import React from 'react';
import Pokedex from './Pokedex'
import pokemon from "./pokemon"

function App() {
  return (
    <div className="app-container">
      <Pokedex pokemon={pokemon} />
    </div>

  )
}

export default App;
