import { useState } from "react";

const CounterIdiota = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você perdeu seu tempo {count} vezes!</p>
      <button onClick={() => setCount(count + 1)}>Contagem idiota</button>
    </div>
  );
};
export default CounterIdiota;
