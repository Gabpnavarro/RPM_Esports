import styles from "./SobreInscricaoDuvidas.module.scss";

const SobreInscricaoDuvidas = (icone) => {
  return (
    <div className={styles.inscricao__duvidas}>
      <div className={styles.inscricao}>
        <a>
          <img alt='' src={icone.iconei} />
          Inscreva-se
        </a>
      </div>

      <div className={styles.duvidas}>
        <a>
          <img alt='' src={icone.iconep} />
          Dúvidas? Veja o vídeo
        </a>
      </div>
    </div>
  );
};

export default SobreInscricaoDuvidas;