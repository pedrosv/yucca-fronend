import logoImg from '../assets/logo.PNG';
import '../styles/sidebar.css';

import Button from "./NavigateButton"

function Sidebar() {

  return (
    <div id= "sidebar">
      <img src={logoImg} alt="Logo da Yucca" />
      <Button path="/genero">
        Gênero
      </Button>
      <Button path="/conteudo">
        Conteúdo
      </Button>
      <Button path="/personalizar">
        Personalizar Coleta
      </Button>
      <Button path="/resultados">
        Resultados
      </Button>
  </div>
  )
}

export default Sidebar;