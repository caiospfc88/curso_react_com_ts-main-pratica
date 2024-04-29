import { useReducer } from "react";

const estadoInicial = { contador: 0 };

function reducer(estado, acao) {
  switch (acao.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };
    case "incrementar_de_dois":
      return { contador: estado.contador + 2 };
    case "decrementar":
      return { contador: estado.contador - 1 };
    case "multiplicar_por_10":
      return { contador: estado.contador * 10 };
    case "dividir_por_2":
      return { contador: estado.contador / 2 };
    case "resetar":
      return { contador: 0 };
    default:
      throw new Error("Ação não suportada");
  }
}

const Contador = () => {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <p>Contagem: {estado.contador}</p>
      <button onClick={() => dispatch({ tipo: "incrementar" })}>+1</button>
      <button onClick={() => dispatch({ tipo: "incrementar_de_dois" })}>
        +2
      </button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>-1</button>
      <button onClick={() => dispatch({ tipo: "multiplicar_por_10" })}>
        *10
      </button>
      <button onClick={() => dispatch({ tipo: "dividir_por_2" })}>/2</button>
      <button onClick={() => dispatch({ tipo: "resetar" })}>Resetar</button>
    </div>
  );
};
export default Contador;
