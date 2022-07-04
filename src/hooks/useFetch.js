import { useState, useEffect } from "react";

const UseFetch = ( ) => {
  const [searchData, setSearchData] = useState([]);
  const [pokemon, setPokemon] = useState("ditto");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((res) => setSearchData([res]));
  }, []);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((res) => setSearchData([res]));
  }, [pokemon]);

  return [setPokemon, searchData];
};

export default UseFetch;
