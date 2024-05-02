import "./App.css";
import ComponenteFilho from "./components/ComponenteFilho";
import Contador from "./components/Contador";
import Container from "./components/Container";
import DisplayWindowSize from "./components/DisplayWindowSize";
import ExemploUseEffect from "./components/ExemploUseEffect";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import Timer from "./components/Timer";
import ValorDoContexto from "./components/ValorDoContexto";
import { MeuContextoProvider } from "./contexts/MeuContexto";

function App() {
  return (
    <>
      {/*8.1 - useEffect 
      <ExemploUseEffect />
      <Timer />
      {/*8.2 - useContext 
      aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes*/}
      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/*8.3 - useReducer - estados mais complexos
      <Contador />
      {/*8.4 - Custom hook */}
      <DisplayWindowSize />
      {/*8.5 - Slots e children props */}
      <Container>
        <h1>Titulo da seção</h1>
        <p>Este é o meu subtitulo</p>
        <Contador />
      </Container>
      {/*8.6 - Sincronizar estado com props */}
      <PerfilDeUsuario usuarioId={1} />
    </>
  );
}

export default App;
