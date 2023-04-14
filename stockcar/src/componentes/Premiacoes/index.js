import styles from './Premiacoes.module.scss'


function Premiacoes(imagem) {
    return( 
        <div className={styles.premiacoes}>

            <h2>PREMIAÇÕES E RECOMPENSAS</h2>

            <div className={styles.linha}></div>

            <div className={styles.todos_trofeus} >
                
                <div className={styles.trofeu} >
                <h3>Premiação <span className={styles.campeao}>Campeão</span> <span className={styles.pro}>PRO</span> </h3>
                <img src={imagem.p1pro}></img>
                </div>

                <div className={styles.trofeu} >
                <h3>Premiação <span className={styles.vicecampeao}>Vice - Campeão</span> <span className={styles.pro}>PRO</span></h3>
                <img src={imagem.p2pro}></img>
                </div>

                <div className={styles.trofeu} >
                <h3>Premiação <span className={styles.terceiro}>3° Colocado</span> <span className={styles.pro}>PRO</span></h3>
                <img src={imagem.p3pro}></img>
                </div>
                
                <div className={styles.trofeu} >
                <h3>Premiação <span className={styles.campeao}>Campeão</span> <span className={styles.light}>Light</span></h3>
                <img src={imagem.p1light}></img>
                </div>

            </div>



        </div>
    )
}

export default Premiacoes;