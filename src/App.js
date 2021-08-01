import { BrowserRouter, Route } from "react-router-dom";
import { createContext, useState } from "react";

import Conteudo from "./pages/Conteudo";
import Genero from "./pages/Genero";
import Personalizar from "./pages/Personalizar"
import Resultados from "./pages/Resultados"

export const SearchValuesContext = createContext({});

function App() { 

  const [searchValues, setSearchValues] = useState(
      { generos: "",
        conteudos: "",
        configs: {
          maxPages:         100,
          genero:           0.7,
          url:              0.5,
          conteudo:         0.3,
          genero_conteudo:  0.5,
          expansaoDeTermos: true,
          heuristica:       "1"
      }
    });

  return (
    
    <BrowserRouter>
      <SearchValuesContext.Provider value = {{searchValues, setSearchValues}}>
        <Route path= "/" exact component={Genero}/>
        <Route path= "/genero" component={Genero}/>
        <Route path= "/conteudo" component={Conteudo}/>
        <Route path= "/personalizar" component={Personalizar}/>
        <Route path= "/resultados" component={Resultados}/>
      </SearchValuesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
