import { useState } from "react";
import { CharacterList } from "./components/CharacterList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="ttl">
        <h1 className="ttl_rick">Rick and Morty</h1>
        <h2 className="subttl_rick">API's</h2>
      </div>
      <CharacterList />
    </div>
  );
}

export default App;
