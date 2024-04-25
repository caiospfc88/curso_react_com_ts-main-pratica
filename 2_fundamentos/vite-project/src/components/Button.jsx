const Button = () => {
  const handleClick = () => {
    console.log("Clicou");
  };

  return <button onClick={handleClick}>Clique aqui!</button>;
};
export default Button;
