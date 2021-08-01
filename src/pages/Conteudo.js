import { useContext } from "react";
import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"
import "../styles/conteudo.css"

import {SearchValuesContext} from "../App"

function Conteudo() {

  const {searchValues, setSearchValues} = useContext(SearchValuesContext);
  
  return (
      <div id="conteudo">
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <h1>Termos de Conteúdo</h1>
          
          <form>
            <textarea name="lista" 
              id="lista"
              value={searchValues.conteudos}
              cols="30" 
              rows="15"
              onChange={e=>setSearchValues({...searchValues, conteudos: e.target.value})}
            ></textarea>
          </form>


          <Footer previous="/genero" next="/personalizar"></Footer>   
        </main>
      </div>
  );
}

export default Conteudo;