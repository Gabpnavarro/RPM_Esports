import styles from "./Etapas.module.scss";

const Etapas = (imagem,texto) => {
  return (
    <div className={styles.etapas}>
      <div className={styles.etapa__data}>
        <div className={styles.datas}>
          <img src={imagem.icone} />
          <h5>1° Etapa - 18/04</h5>
        </div>

        <img src={imagem.esquerda} alt="Imagem da pista do lado direito" />
      </div>

      <div className={styles.etapa__data}>
        <div className={styles.datas}>
          <img src={imagem.icone} />
          <h5>2° Etapa - 18/04</h5>
        </div>

        <img src={imagem.meio} alt="Imagem da pista do meio" />
      </div>

      <div className={styles.etapa__data}>
        <div className={styles.datas}>
          <img src={imagem.icone} />
          <h5>3° Etapa - 25/04</h5>
        </div>

        <img src={imagem.direita} alt="Imagem da pista do lado direito" />
      </div>
    </div>
  );
};

export default Etapas;
