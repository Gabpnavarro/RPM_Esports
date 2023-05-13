import styles from "./AnaliseProtesto.module.scss";

function AnaliseProtesto() {
  return (
    <div className={styles.protesto}>
      <div className={styles.informacao}>
          <h2>PEDIDOS DE ANALISE</h2>
          <h3>Use com sabedoria</h3>
      </div>

      <div className={styles.dados}>
        <label for="nome">Nome completo do solicitante:</label>
        <input
          type="text"
          id="resposta"
          name="resposta"
          placeholder="Sua resposta"
          required
        />

        <label for="nome">Data da corrida</label>
        <input
          type="date"
          id="resposta"
          name="resposta"
          placeholder="Sua resposta"
          required
        />

        <label for="nome">Pilotos envolvidos (nome no jogo):</label>
        <input
          type="text"
          id="resposta"
          name="resposta"
          placeholder="Sua resposta"
          required
        />

        <label for="nome">
          O tempo, volta e bateria que o incidente aconteceu (se houver 2
          baterias)
        </label>
        <input
          type="text"
          id="resposta"
          name="resposta"
          placeholder="Sua resposta"
          required
        />

        <label for="nome">Seu ponto de vista que ocorreu o lance</label>
        <input
          type="text"
          id="resposta"
          name="resposta"
          placeholder="Sua resposta"
          required
        />

        <label for="nome">Link do vídeo</label>
        <input
          type="text"
          id="resposta"
          name="resposta"
          placeholder="Sua resposta"
          required
        />

        <button type="submit" onClick={() => alert("Inscrição confirmada!")}>
          Confirmar Protesto
        </button>
      </div>
    </div>
  );
}

export default AnaliseProtesto;
