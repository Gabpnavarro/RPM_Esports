import VideoYoutube from '../VideoYoutube';
import styles from './Sobre.module.scss';
import SobreClasseCarro from '../SobreClasseCarro';
import corolla from '../../assets/corolla.png';
import cruze from '../../assets/cruze.png';
import SobreHorariosVagos from '../SobreHorariosVagos';
import SobreInscricaoDuvidas from '../SobreInscricaoDuvidas';
import inscrevase from '../../assets/icone__inscreva-se.png'
import play from '../../assets/icone__play.png'

function Sobre() {
    return (
        <div className={styles.sobre}>
            <div className={styles.sobre__conhecaOGrid}>
                <h2>CONHEÇA O GRID</h2>
                <p>
                    Seja bem vindo ao novo formato de grids na RPM Esports! Agora com 2 grids no mesmo dia! 20:00 (LIGHT) 22:15 (PRO)
                    com promoção e rebaixamento da forma mais justa! o MOD utilizado é o STOCK CAR no Assetto Corsa 1.
                </p>
                <h2>CONHEÇA A CLASSE & CARROS</h2>
            </div>

            <VideoYoutube />

            <SobreClasseCarro 
                imagem1={cruze} 
                imagem2={corolla} 
            />

            <SobreHorariosVagos />

            <h3>O grid será definido com base na <strong>classificatória</strong> (confira a data abaixo)</h3>
            
            <SobreInscricaoDuvidas 
                iconei={inscrevase}  
                iconep={play}
            />       
            
            
            
        </div>
    )
}

export default Sobre;
