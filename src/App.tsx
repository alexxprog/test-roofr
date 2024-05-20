import React, { useState, useEffect } from 'react';
import Pokemon from './components/pokemon'
import {PokemonShort} from './types'
import './App.css';

// API
const pkList = 'https://pokeapi.co/api/v2/pokemon/';
const pkDetails = 'https://pokeapi.co/api/v2/pokemon/';

function getRand(max: number, min = 0) {
  return Math.floor(Math.random() * max);
}

async function get(url: string) {
  const output = await fetch(url);

  return output.json();
}

async function getPokemon(pk: PokemonShort){
  return await get(`${pkDetails}${pk.name}`);
};

function App() {
  const emptyPokemon = {
    name: '',
    stats: 0,
    frontSprite: '',
    backSprite: '',
    primaryType: '',
    moves: [],
  };
  const [pokemonFirst, setPokemonFirst] = useState(emptyPokemon);
  const [pokemonSecond, setPokemonSecond] = useState(emptyPokemon);

  function getShort(long: any) {
    return {
      name: long.name,
      stats: long.stats[0].base_stat,
      frontSprite: long.sprites.front_default,
      backSprite: long.sprites.back_default,
      primaryType: long.types[0].type.name,
      moves: long.moves,
    }
  }

  async function getPokemons(){
    await get(pkList).then((data) => {
      const l: number = Object.values(data.results).length;

      getPokemon(data.results[getRand(l)]).then((data) => {
        setPokemonFirst(getShort(data));
      });
      getPokemon(data.results[getRand(l)]).then((data) => {
        setPokemonSecond(getShort(data));
      });
    });
  };

  useEffect(() => {
    getPokemons();
  }, [])

  return (
    <div className='box-border p-4'>
      <div className='border border-1 border-black rounded'>
        {pokemonFirst.name && <Pokemon
          name={pokemonFirst.name}
          stats={pokemonFirst.stats}
          frontSprite={pokemonFirst.frontSprite}
          backSprite={pokemonFirst.backSprite}
          primaryType={pokemonFirst.primaryType}
          moves={pokemonFirst.moves}></Pokemon>}
        {pokemonSecond.name && <Pokemon
          name={pokemonSecond.name}
          stats={pokemonSecond.stats}
          frontSprite={pokemonSecond.frontSprite}
          backSprite={pokemonSecond.backSprite}
          primaryType={pokemonSecond.primaryType}
          moves={pokemonSecond.moves}></Pokemon>}
      </div>
    </div>
  );
}

export default App;
