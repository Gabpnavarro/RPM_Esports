import VideoYoutube from '../VideoYoutube';
import styles from './Sobre.module.scss';

function Sobre() {
    return (
        <div className={styles.sobre}>
            <div className={styles.sobre__conhecaOGrid}>
                <h2>CONHEÇA O GRID</h2>
                <p>
                    Seja bem vindo ao novo formato de grids na RPM Esports!agora com 2 grids no mesmo dia! 20:00 (LIGHT) 22:15 (PRO)
                    com promoção e rebaixamento da forma mais justa! o MOD utilizado é o STOCK CAR no Assetto Corsa 1.
                </p>
                <h2>CONHEÇA A CLASSE & CARROS</h2>
            </div>
            <VideoYoutube />
            
        </div>
    )
}

export default Sobre;