import Banner from './componentes/Banner';
import './styles/GlobalStyles.scss';
import banner_img from './assets/banner__titulo.png';
import Sobre from './componentes/Sobre';

function App() {
  return (
    <div className="App">
      <Banner imagem={banner_img} />
      <section>
        <Sobre />
      </section>

    </div>
  )
}

export default App;