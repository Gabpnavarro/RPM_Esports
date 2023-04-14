import styles from './Briefing.module.scss'

function Briefing () {
    return (
        <div className={styles.briefing__horario}>
                <h5>Briefing obrigatório 20:00</h5>

                <div className={styles.liga_light}>
                    <h3>LIGHT</h3>
                    <p>20:30</p>
                </div>
                <div className={styles.liga_pro}>
                    <h3>PRO</h3>
                    <p>22:00</p>
                </div>

                <h5>Briefing obrigatório 20:00</h5>
        </div>
    )
}

export default Briefing