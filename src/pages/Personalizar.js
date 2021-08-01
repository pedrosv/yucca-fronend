import { useContext } from "react";

import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer";

import Switch from '@material-ui/core/Switch';
import { FormControl, Radio, FormLabel, FormControlLabel, RadioGroup } from "@material-ui/core";

import "../styles/personalizar.css"

import {SearchValuesContext} from "../App"


function Personalizar() {
    
    const {searchValues, setSearchValues} = useContext(SearchValuesContext);

    return (
        <div id="personalizar">
            <aside>
                <Sidebar/>
            </aside>
            <main>
                <h1>Personalizar Coleta</h1>
                <form>

                    <label className="genero">
                        <h3>Máximo de Páginas Sementes: </h3>
                        <input type="number" 
                        value={searchValues.configs.maxPages} 
                        onChange={e=>setSearchValues({...searchValues, 
                            configs: {...searchValues.configs, maxPages: e.target.value}})}
                        />
                    </label>

                    <h3>Pesos:</h3>
                    <div className="pesos">
                        <label className="peso-genero">
                            <span>Gênero: </span>
                            <input type="number" />
                        </label>
                        <label className="peso-conteudo">
                            <span>Conteúdo: </span>
                            <input type="number" />
                        </label>
                        <label className="peso-url">
                            <span>URL: </span>
                            <input type="number" />
                        </label>
                        <label className="peso-gen/conte">
                            <span>Gênero/Conteúdo: </span>
                            <input type="number" />
                        </label>
                    </div>

                        
                    <Switch
                        checked={searchValues.configs.expansaoDeTermos}
                        onChange={ e=>setSearchValues({...searchValues, 
                            configs: {...searchValues.configs, expansaoDeTermos: e.target.checked}})}
                        name="expansaoDeTermos"
                        color="primary"

                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />

                    <FormControl component="fieldset">
                    <FormLabel component="legend">Heurística</FormLabel>
                    <RadioGroup aria-label="Heuristica" name="Heuristica" 
                        value={searchValues.configs.heuristica} 
                        onChange={e=>setSearchValues({...searchValues, 
                            configs: {...searchValues.configs, heuristica: e.target.value}})}>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="K-Means" />
                        <FormControlLabel value="2" control={<Radio color="primary" />} label="Coeficiente de Silhueta" />
                        <FormControlLabel value="3" control={<Radio color="primary" />} label="Média Aritmética" />
                        <FormControlLabel value="4" control={<Radio color="primary" />} label="BIRCH" />
                    </RadioGroup>
                    </FormControl>

                </form>

                <Footer previous="/conteudo" next="/personalizar"></Footer> 

            </main>
        </div>
    );
}

export default Personalizar;