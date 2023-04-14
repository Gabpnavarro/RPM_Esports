import styles from "./InscricoesCampeonato.module.scss";

function InscricoesCampeonato(imagem) {
  return (
    <div className={styles.inscricao}>
      <div className={styles.simuladores}>
        <div className={styles.simulador1}>
          <h3>Assetto Corsa - Stock Car</h3>
        </div>

        <div className={styles.simulador2}>
          <h3>AC Competizione - GT3</h3>
        </div>
      </div>

      <div className={styles.dados}>
        <img alt="" src={imagem.logo} />

        <input
          type="text"
          id="nomeSobrenome"
          name="nomeSobrenome"
          value="Nome & Sobrenome"
        ></input>

        <input
          type="text"
          id="nickname"
          name="nickname"
          value="Nickname"
        ></input>

        <input
          type="text"
          id="whatsApp"
          name="whatsApp"
          value="Número do WhatsApp"
        ></input>

        <input type="text" id="steamID" name="steamID" value="SteamID"></input>

        <select id="carro" name="carro">
          <option value="">Escolha seu carro (Desempenho Igual)</option>
          <option value="corolla">Corolla</option>
          <option value="cruze">Cruze</option>
        </select>

        <input
          type="text"
          id="comprovante"
          name="comprovante"
          value="+ Comprovante (Imagem ou Print da tela)"
        ></input>

        <h3>
          Para o comprovante, escolha uma opção mais compatível para você.
        </h3>
        <h2>
          Valor de Inscrição: <span>R$30,00</span>
        </h2>

        <button type="submit">Confirmar Inscrição</button>
      </div>

      <div className={styles.pagamento}>
        <div className={styles.pix}>
          <img alt="" src={imagem.pix} />
        </div>

        <div className={styles.pagar}>
          <h2>QR CODE PIX</h2>
          <h4>Não deu certo? tente uma destas chaves:</h4>
          <h4>Email: <span>matheus.samuel00@hotmail.com</span></h4>
          <h4>Número: <span>(19) 99983-9917</span></h4>
        </div>
      </div>
    </div>
  );
}

export default InscricoesCampeonato;
