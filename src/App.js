import Banner from './componentes/Banner';
import './styles/GlobalStyles.scss';
import banner_img from './assets/banner__titulo.png';
import Sobre from './componentes/Sobre';
import EtapasHorarios from './componentes/EtapasHorarios';
import DownloadsTutorial from './componentes/DownloadsTutorial';
import f3 from "./assets/thumb-f3-silverstone.png";
import InformacoesDetalhes from './componentes/InformacoesDetalhes';
import botao from "./assets/icone_botao.png";
import ConfiguracoesPremiacoes from './componentes/ConfiguracoesPremiacoes';

import InscricoesCampeonato from './componentes/InscricoesCampeonato';
import assetto from './assets/AcLogo.png';
import pix from './assets/pix.jpg';


function App() {
  return (
    <div className="App">
      <Banner imagem={banner_img} />
      <section>
        <Sobre />
        {/* <EtapasHorarios /> */}
        {/* <DownloadsTutorial  video={f3}/> */}
        {/* <InformacoesDetalhes botao={botao}/> */}
        <ConfiguracoesPremiacoes />

        <InscricoesCampeonato logo={assetto} pix={pix}/>
      </section>
    </div>
  )
}

export default App;