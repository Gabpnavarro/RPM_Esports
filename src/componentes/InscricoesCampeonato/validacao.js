import React, { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const handleNomeBlur = (event) => {
    const nome = event.target.value;
    if (!nome) {
      setMensagemErro("Por favor, informe seu nome");
    } else {
      setMensagemErro("");
    }
  };

  const handleTelefoneBlur = (event) => {
    const telefone = event.target.value;
    if (!telefone) {
      setMensagemErro("Por favor, informe seu telefone");
    } else {
      setMensagemErro("");
    }
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setMensagemErro("Por favor, informe seu e-mail");
    } else if (!regexEmail.test(email)) {
      setMensagemErro("Por favor, informe um e-mail válido");
    } else {
      setMensagemErro("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mensagemErro) {
      alert("Por favor, corrija os erros antes de enviar o formulário");
      return;
    }
    // código para enviar o formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onBlur={handleNomeBlur}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          value={telefone}
          onBlur={handleTelefoneBlur}
          onChange={(event) => setTelefone(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onBlur={handleEmailBlur}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      {mensagemErro && <p>{mensagemErro}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
