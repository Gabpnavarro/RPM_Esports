import styles from './InscricoesCampeonato.module.scss'

function InscricoesCampeonato () {
    return (
        <div className={styles.inscricao}>
            <div className={styles.simuladores}>
                <h2>Assetto Corsa - Stock Car</h2>
                <h2>AC Competizione - GT3</h2>
            </div>

            <div className={styles.dados}>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <select></select>
                <input></input>

                <h5></h5>
                <h4></h4>
            </div>



        </div>
    )
}

export default InscricoesCampeonato;