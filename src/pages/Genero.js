import { useContext } from "react";
import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer";
import "../styles/genero.css"

import {SearchValuesContext} from "../App"


function Genero() {
  
  const {searchValues, setSearchValues} = useContext(SearchValuesContext);

  return (
      <div id="genero">
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <h1>Termos de Gênero</h1>

          <form>
            <textarea name="lista" 
              id="lista"
              value ={searchValues.generos}
              cols="30" 
              rows="15"
              onChange={e =>  setSearchValues({...searchValues, generos: e.target.value })}>
            </textarea>
          </form>

          <Footer previous="" next="/conteudo"></Footer>

        </main>
      </div>
  );
}

export default Genero;