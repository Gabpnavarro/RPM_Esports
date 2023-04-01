import styles from "./InformacoesDetalhes.module.scss";

const InformacoesDetalhes = (icone) => {
  return (
    <div className={styles.informacoes__detalhes}>
      <h3>Campeonato Individual & Equipes</h3>
      <h2>INFORMAÇÕES & DETALHES</h2>

      <div className={styles.informacoes}>
        <div className={styles.detalhes}>
          <div className={styles.separar}>
            <span>Categoria:</span>
            <p>STOCK CAR '20 Mod</p>
          </div>

          <div className={styles.separar}>
            <span>Setup:</span>
            <p>Aberto</p>
          </div>
        </div>

        <div className={styles.detalhes}>
          <span>Pit-Stop:</span>
          <p>
            Parada obrigatória sem necessidade de troca de pneus porém
            necessário adicionar ao menos 1 litro de combustível.
          </p>
        </div>

        <div className={styles.detalhes}>
          <span>Descarte:</span>
          <p>
            O pior resultado (menor pontuação, ausência ou abandono) pode sr
            descartado ao final da temporada.
          </p>
        </div>
      </div>

      <div className={styles.linha}></div>

      <div className={styles.equipes}>
        <h4>
          CAMPEONATO DE EQUIPES <span>DINÂMICO</span>
        </h4>
        <div className={styles.video}>
          <h5>Quer entender como funciona?</h5>
          <a href="">Assista.</a>
        </div>
      </div>

      <div className={styles.tabela__equipe}>
        <img src={icone.botao} />
        <a href="">Equipes</a>
      </div>
    </div>
  );
}

export default InformacoesDetalhes;
