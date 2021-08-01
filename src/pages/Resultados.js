import React from 'react';
import Sidebar from '../Components/Sidebar';

// import { Container } from './styles';

function Resultados() {
    return (
        <div id="genero">
          <aside>
            <Sidebar/>
          </aside>
          <main>
            <h1> Nenhum resultado encontrado</h1>
            <ul>
                <li>
                    <a href="https://google.com" rel="noreferrer" target="_blank">Nome</a>
                </li>
                <li>
                    <a href="https://google.com" rel="noreferrer" target="_blank">Nome1</a>
                </li>
                <li>
                    <a href="https://google.com" rel="noreferrer" target="_blank">Nome2</a>
                </li>
                <li>
                    <a href="https://google.com" rel="noreferrer" target="_blank">Nome3</a>
                </li>
            </ul>
          </main>
        </div>
    );
}

export default Resultados;