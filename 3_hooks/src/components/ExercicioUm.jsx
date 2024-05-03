import { useEffect } from "react";

const ExercicioUm = ({ usuario }) => {
  useEffect(() => {
    document.title = `${usuario.nome} - ${usuario.job}`;
  }, [usuario]);

  return (
    <div>
      <h1>{usuario.nome}</h1>
      <p>{usuario.job}</p>
    </div>
  );
};
export default ExercicioUm;
