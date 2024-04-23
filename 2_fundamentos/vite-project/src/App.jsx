import "./App.css";
import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Pai from "./components/Pai";
import Descricao from "./components/Descricao";

function App() {
  return (
    <>
      {/* 6.1 - Criação de componente */}
      <Welcome />
      {/* 6.2 - Expressões do JSX */}
      <BomDia />
      {/* 6.3 - Componente dentro de componente */}
      <Pai />
      <Descricao nome="BeetleJuice" idade={30} />
    </>
  );
}

export default App;
