import styles from "./TabelaPontos.module.scss";

function TabelaPontos(imagem) {
  return (
    <div className={styles.tabelapontos}>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Piloto</th>
            <th>Equipe</th>
            <th>Resultados</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img alt="" src={imagem.piloto} />
              <span>Lewis Hamilton</span>
            </td>
            <td>
              <img alt="" src={imagem.equipe} />
            </td>
            <td>
              <span>1st</span>
            </td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img alt="" src={imagem.piloto} />
              <span>Lewis Hamilton</span>
            </td>
            <td>
              <img alt="" src={imagem.equipe} />
            </td>
            <td>
              <span>1st</span>
            </td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img alt="" src={imagem.piloto} />
              <span>Lewis Hamilton</span>
            </td>
            <td>
              <img alt="" src={imagem.equipe} />
            </td>
            <td>
              <span>1st</span>
            </td>
            <td>100</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img alt="" src={imagem.piloto} />
              <span>Lewis Hamilton</span>
            </td>
            <td>
              <img alt="" src={imagem.equipe} />
            </td>
            <td>
              <span>1st</span>
            </td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TabelaPontos;
