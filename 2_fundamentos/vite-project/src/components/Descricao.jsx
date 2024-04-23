const Descricao = (props) => {
  return (
    <div>
      <p>Seu nome é: {props.nome}</p>
      <p>Sua idade é: {props.idade} anos</p>
    </div>
  );
};
export default Descricao;
