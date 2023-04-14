import styles from './EtapasHorarios.module.scss';
import Etapas from '../Etapas';
import sol from '../../assets/icone__sol.png';
import buenosaires from '../../assets/pista-buenos-aires.png';
import goiana from '../../assets/pista-goiana.png';
import interlagos from '../../assets/pista-interlagos.png';
import londrina from '../../assets/pista-londrina-chicane.png';
import santacruz from '../../assets/pista-santa-cruz.png';
import Briefing from '../Briefing';

function EtapasHorarios () {
    const textoPersonalizado = {
        tesquerda: "Texto personalizado na esquerda"
    };

    return(
       <div className={styles.etapas__horarios}>
            <h3>TERÇAS-FEIRAS ÀS 21:00</h3>
            <h2>CONFIRA JÁ AS ETAPAS E HORÁRIOS</h2>

            <Etapas 
                icone={sol}
                esquerda={buenosaires}
                tesquerda={textoPersonalizado}
                meio={goiana}
                direita={interlagos}
            />

            <Briefing />

            <Etapas 
                icone={sol}
                esquerda={londrina}
                meio={goiana}
                direita={santacruz}
            />

            <div className={styles.informacoes}>
                <p>Etapa Diurna ou Noturna? Verifique ao lado do título o ícone ou (Sol / Lua)</p>
                <p>Simulação de largada antes do início da prova (20:45)</p>
            </div>

       </div>
    );
}

export default EtapasHorarios;