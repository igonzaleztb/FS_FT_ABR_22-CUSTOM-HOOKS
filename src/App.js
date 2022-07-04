import {useEffect } from "react";
import UseFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const [setPokemon, searchData] = UseFetch();

  useEffect(() => {
    setPokemon("pikachu");
  }, []);

  const searchPokemon = (e) => {
    e.preventDefault();
    setPokemon(e.target.pokemon.value);
  };
  return (
    <div className="App">
      {searchData
        ? searchData.map((poke, i) => {
            return (
              <div key={i}>
                <p> {poke.name}</p>

                <p>
                  {" "}
                  <img
                    src={poke.sprites.other.home.front_default}
                    alt=""
                  />{" "}
                </p>
              </div>
            );
          })
        : ""}

      <form onSubmit={searchPokemon}>
        <input type="text" name="pokemon" />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
