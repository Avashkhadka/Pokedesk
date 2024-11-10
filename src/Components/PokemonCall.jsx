import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "../App.css"
function PokemonCall() {
  let [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const FetchApi = async () => {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=24`;
      try {
        let response = await fetch(url);
        let data = await response.json();
        const ResponseDataReturned = data.results.map(async (item) => {
          try {
            let res = await fetch(item.url);
            let data = await res.json();
            return data;
          } catch (err) {
            console.log(err.message);
          }
        });
        let ResponseData = await Promise.all(ResponseDataReturned);
        setPokemon(ResponseData);
      } catch (err) {
        console.log(err.message);
      }
    };
    FetchApi();
  }, []);

  return (
    <div className="Pokemon-Container">
      <h1 className="text-center my-2">Let's Catch Pokemons</h1>
      <div className="d-flex flex-wrap m-2 justify-content-center">
        {pokemon.map((item) => {
          return <Card key={item.id} data={item}/>;
        })}
      </div>
    </div>
  );
}

export default PokemonCall;
