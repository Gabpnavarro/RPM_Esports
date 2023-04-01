import styles from "./SobreClassCarro.module.scss";

function SobreClassCarro(imagem) {
  return (
    <div className={styles.carros}>

        <div className={styles.carros__subtitulo}>
            <img
            className={styles.youtube}
            src={imagem.imagem1}
            alt="Vídeo do Youtube"
            />
            <p>Chevrolet Cruze</p>
        </div>

        <div className={styles.carros__subtitulo}>
            <img
            className={styles.youtube}
            src={imagem.imagem2}
            alt="Vídeo do Youtube"
            />
            <p>Toyota Corolla</p>
        </div>   

    </div>
        
    );
}

export default SobreClassCarro;
