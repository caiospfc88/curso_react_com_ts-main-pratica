import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    //let x = 10;

    return (
        <div>
            <p>Voce clicou {count} vezes.</p>
            <button onClick={()=> setCount(count + 1)}>Aumentar</button>
        </div>
    );
};
export default Counter;