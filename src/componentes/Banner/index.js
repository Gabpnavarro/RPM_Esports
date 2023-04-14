import styles from './Banner.module.scss';

const Banner = ( imagem ) => {
    return (
        <img
            className = {styles.banner}
            src={imagem.imagem}
            alt="Banner principal da pagina"
        />
    )
}

export default Banner;