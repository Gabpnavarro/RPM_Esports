import styles from './ConfiguracoesPremiacoes.module.scss'
import ConfiguracoesGerais from '../ConfiguracoesGerais';
import Premiacoes from '../Premiacoes';
import p1pro from '../../assets/Trofeup1pro.png';
import p2pro from '../../assets/Trofeup2pro.png';
import p3pro from '../../assets/Trofeup3pro.png';
import p1light from '../../assets/Trofeup1light.png';

function ConfiguracoesPremiacoes() {
    return (
        <div className={styles.ConfiguracoesPremiacoes}>
            <ConfiguracoesGerais />
            
            <Premiacoes 
            p1pro={p1pro}
            p2pro={p2pro}
            p3pro={p3pro}
            p1light={p1light}            
            />

        </div>
    )
}

export default ConfiguracoesPremiacoes;