import styles from "./ConfiguracoesGerais.module.scss";

function ConfiguracoesGerais() {
  return (
    <div className={styles.ConfiguracoesGerais}>
      <h2>Configurações de sala, climas, consumo e mais</h2>

      <div className={styles.linha}></div>

      <div className={styles.Configuracoes}>
        <div className={styles.ConfiguracaoUnica}>
          <h3 className={styles.verde}>Assistências</h3>

          <div className={styles.agrupar}>
            <h4>Traçado Dinâmico (Linha)</h4>
            <h4>Controle de Tração</h4>
            <h4>Freio ABS</h4>
            <h4>Cambio Automático</h4>
            <h4>Controle de Estabilidade</h4>
            <h4>Demais assistências</h4>
          </div>

          <h4>Permitidas apenas no <span className={styles.light}>LIGHT</span></h4>
        </div>

        <div className={styles.ConfiguracaoUnica}>
          <h3 className={styles.gray} >Duração & Horários</h3>

          <h4 className={styles.abaixo}> <span className={styles.light}>GRID LIGHT</span> (1º Corrida):</h4>

          <div className={styles.agrupar}>
            <h5>19:30 - Treino Livre (60 Min)</h5>
            <h5>20:00 - Briefing obrigatório</h5>
            <h5>20:15 - Simulação de largada</h5>
            <h5>20:30 - Qualificação (15 min)</h5>
            <h5>20:45 - Corrida (40 min)</h5>
          </div>

          <h4 className={styles.abaixo}> <span className={styles.pro}>GRID PRO</span> (2º Corrida):</h4>

          <div className={styles.agrupar}>            
            <h5>Ao terminar o<span className={styles.light}>LIGHT</span>- Treino Livre</h5>
            <h5>21:45 - Briefing obrigatório</h5>
            <h5>22:15 - Qualificação (15 min)</h5>
            <h5>22:30 - Corrida (40 min)</h5>
          </div>

        </div>

        <div className={styles.ConfiguracaoUnica}>
          <h3 className={styles.orange}>Horários "No Jogo"</h3>

          <div className={styles.agrupar}>
            <h4>🌞Prova Diurna:</h4>
            <h5>Treino Livre - 09:00</h5>
            <h5>Simulação de Largada - 14:00</h5>
            <h5>Qualificação - 10:00</h5>
          </div>

          <div className={styles.agrupar}>
            <h4 className={styles.abaixo}>🌓Prova Noturna:</h4>
            <h5>Treino Livre - 09:00</h5>
            <h5>Simulação de Largada - 14:00</h5>
            <h5>Qualificação - 10:00</h5>
            <h5>Corrida - 14:00</h5>
          </div>

          <h4>Igual no <span className={styles.light}>LIGHT</span> & <span className={styles.pro}>PRO</span></h4>
        </div>

        <div className={styles.ConfiguracaoUnica}>
          <h3 className={styles.blue}>Outras Configurações</h3>

          <div className={styles.agrupar}>
            <h5>APP Real Penlaty: <span className={styles.yellowchock}>Sim</span></h5>
            <h5>3 Cortes de curva: <span className={styles.yellowchock}>3s</span></h5>
            <h5>Limite no pit: <span className={styles.yellowchock}>80 KM/h</span></h5>
            <h5>Punição excesso de velocidade:<span className={styles.yellowchock}>5s</span></h5>
            <h5>Forçar visão interior: <span className={styles.greenlight}>Não</span></h5>
          </div>

          <h4>Igual no <span className={styles.light}>LIGHT</span>  & <span className={styles.pro}>PRO</span></h4>
        </div>

        <div className={styles.ConfiguracaoUnica}>
          <h3 className={styles.yellow}>Danos e Consumo</h3>

          <div className={styles.agrupar}>
            <h5>Dano geral: <span className={styles.yellowchock}>50%</span> </h5>
            <h5>Desgaste de Pneus: <span className={styles.yellowchock}>100%</span> </h5>
            <h5>Consumo de Combustível: <span className={styles.yellowchock}>100%</span></h5>
          </div>

          <h4>Igual no <span className={styles.light}>LIGHT</span>  & <span className={styles.pro}>PRO</span></h4>
        </div>

        <div className={styles.ConfiguracaoUnica}>
          <h3 className={styles.babyblue}>Clima</h3>
          <div className={styles.agrupar}>
            <h5>Treino Livre - Sem Chuva</h5>
            <h5>Qualificação - Sem Chuva</h5>
            <h5>Erros de Pit-Stop: Não</h5>
            <h5>Corrida: Sem Chuva</h5>
            <h5>Vento & Temperaturas: Aleatório</h5>
          </div>

          <h4>Igual no <span className={styles.light}>LIGHT</span>  & <span className={styles.pro}>PRO</span></h4>
        </div>
      </div>

      <h3 className={styles.observacao} >*Todas as configurações podem ser alteradas a qualquer momento em caso de necessidade.</h3>
    </div>
  );
}

export default ConfiguracoesGerais;
