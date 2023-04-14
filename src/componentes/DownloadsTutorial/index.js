import styles from "./DownloadsTutorial.module.scss";

function DownloadsTutorial(imagem) {
  return (
    <div className={styles.download__tutorial}>
      <img src={imagem.video} />
      <h3>Arquivos Necessários</h3>
      <h2>Downloads + Tutorial</h2>

      <div className={styles.downloads}>
        <div className={styles.arquivos}>
          <h3>Pacote de pistas:</h3>
          <a href="">DOWNLOAD</a>
        </div>
        <div className={styles.arquivos}>
          <h3>Real Penalty APP:</h3>
          <a href="">DOWNLOAD</a>
        </div>
        <div className={styles.arquivos}>
          <h3>Pacote de Skins (Skin-Set):</h3>
          <a href="">DOWNLOAD</a>
        </div>
      </div>
    </div>
  );
}

export default DownloadsTutorial;
