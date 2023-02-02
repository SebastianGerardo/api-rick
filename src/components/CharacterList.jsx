import { useState, useEffect } from "react";
import { Character } from "./Character";

function NavPage({ page, setPage }) {
  const btn1 = document.getElementById("btn1")

  return (
    <header className="btns">
      <button id="btn1" onClick={() => page === 1 ? page === setPage(42) : setPage(page - 1)}> {"<"} {page}</button>
      <button onClick={() => page === 42 ? page === setPage(1) : setPage(page + 1)}> {page === 42 ? page - 41 : page + 1} {">"}</button>
    </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
