import React,{useState} from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'
//import Header from './Header'
//Componente é um bloco idolado de HTML CSS e JS, o qual nao interfere no restante da aplicacao
//Propriedade são as informaçoes que um componente pai passa para um componente filho
//Estadosao informaçoes mantidas pelo componente (Lembrar imutabilidade)

//o app é um componente! que retorna uma funcao
//primeira letra sempre maiuscala

function App(){
  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

            <div className="input-group">
              <div class="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required/>
              </div>

              <div class="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required/>
              </div>

            </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>


      <main>
        <ul>
          <li className="dev-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/40704350?s=460&v=4" alt="Fernando Schimidt"/>
                <div className="user-info">
                  <strong>Fernando Schimidt</strong>
                  <span>ReactJs, Java, C#</span>
                </div>
            </header>
            <p>Pfsdfjdfjd jfdsfhjdhfjhdf hfjdhfjhdfjhdfjh hjhfdjhfjdhf</p>
            <a href="https://github.com/FernandoSchimidt">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/40704350?s=460&v=4" alt="Fernando Schimidt"/>
                <div className="user-info">
                  <strong>Fernando Schimidt</strong>
                  <span>ReactJs, Java, C#</span>
                </div>
            </header>
            <p>Pfsdfjdfjd jfdsfhjdhfjhdf hfjdhfjhdfjhdfjh hjhfdjhfjdhf</p>
            <a href="https://github.com/FernandoSchimidt">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/40704350?s=460&v=4" alt="Fernando Schimidt"/>
                <div className="user-info">
                  <strong>Fernando Schimidt</strong>
                  <span>ReactJs, Java, C#</span>
                </div>
            </header>
            <p>Pfsdfjdfjd jfdsfhjdhfjhdf hfjdhfjhdfjhdfjh hjhfdjhfjdhf</p>
            <a href="https://github.com/FernandoSchimidt">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/40704350?s=460&v=4" alt="Fernando Schimidt"/>
                <div className="user-info">
                  <strong>Fernando Schimidt</strong>
                  <span>ReactJs, Java, C#</span>
                </div>
            </header>
            <p>Pfsdfjdfjd jfdsfhjdhfjhdf hfjdhfjhdfjhdfjh hjhfdjhfjdhf</p>
            <a href="https://github.com/FernandoSchimidt">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default  App;