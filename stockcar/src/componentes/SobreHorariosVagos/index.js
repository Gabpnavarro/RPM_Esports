import styles from "./SobreHorariosVagos.module.scss";

function SobreHorariosVagos() {
  return (

    <div className={styles.horarios__vagos}>

      <div className={styles.light}>
        <h2>LIGHT 20:00 - VAGAS - 20/20</h2>
      </div>

      <div className={styles.pro}>
        <h2>PRO 22:00 - VAGAS - 20/20</h2>
      </div>

    </div>
    
  );
}

export default SobreHorariosVagos;
