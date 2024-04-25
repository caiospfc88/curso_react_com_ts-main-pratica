import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Formulario enviado:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Preencha o Campo"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
export default Form;
