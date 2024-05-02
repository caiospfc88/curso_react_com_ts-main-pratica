import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContexto";

const ComponenteFilho = () => {
  const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
      <p>{mensagem}</p>
      <button
        onClick={() => setMensagem("Raquel para de olhar para minha tela")}
      >
        Alterar Mensagem!
      </button>
    </div>
  );
};
export default ComponenteFilho;
