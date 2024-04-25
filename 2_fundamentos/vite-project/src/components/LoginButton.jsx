const LoginButton = ({ LoggedIn }) => {
  return (
    <div>{LoggedIn ? <button>Sair</button> : <button>Entrar</button>}</div>
  );
};
export default LoginButton;
