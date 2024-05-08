import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`O usuario ${username} logou com sucesso!`);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <p>Faça o login</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite o Login"
        />
        <input type="password" placeholder="Digite a Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
export default Login;
