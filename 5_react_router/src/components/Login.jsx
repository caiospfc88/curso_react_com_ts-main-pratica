import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <form typeof="submit">
        <p>Faça o login</p>
        <input type="text" placeholder="Digite o Login" />
        <input type="password" placeholder="Digite a Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
export default Login;
