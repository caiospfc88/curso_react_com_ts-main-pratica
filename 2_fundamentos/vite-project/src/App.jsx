import "./App.css";
import Welcome from "./components/Welcome";
import BomDia from "./components/BomDia";
import Pai from "./components/Pai";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";
import Counter from "./components/Counter";
import UserInfoForm from "./components/UserInfoForm";
import Button from "./components/Button";
import PaiFunction from "./components/PaiFunction";
import Form from "./components/Form";
import RenderCondicional from "./components/RenderCondicional";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <>
      {/* 6.1 - Criação de componente */}
      <Welcome />
      {/* 6.2 - Expressões do JSX */}
      <BomDia />
      {/* 6.3 - Componente dentro de componente */}
      <Pai />
      {/*6.4 Props*/}
      <Descricao nome="BeetleJuice" idade={30} />
      {/*6.5 Desestruturação de props */}
      <Cachorro nome="Rex" raca="Pastor Alemão" />
      {/*6.6 useState -> hook */}
      <Counter />
      {/*6.7 multiplos estados*/}
      <UserInfoForm />
      {/*6.8 Eventos*/}
      <Button />
      {/*6.9 Passando funções de manipulação de eventos como props */}
      <PaiFunction />
      {/*6.10 Eventos de fora */}
      <Form />
      {/*6.11 Renderização condicional */}
      <RenderCondicional user="Caio" />
      {/*6.12 Expressão ternaria */}
      <LoginButton LoggedIn={false} />
      {/*6.13 Render nulo */}
    </>
  );
}

export default App;
