import React, {useState, useEffect} from 'react';

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
    const[github_username, setGithubUsername] = useState('');
    const[techs, setTechs]= useState('');
    const[latitude, setLatitude] = useState('');
    const[longitude, setLongitude] = useState('');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const{ latitude, longitude} = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);

      },
      (err) =>{
        console.log(err);
      },
      {
        timeout:30000,
      }
    )
  },[]);

  async function handleAddDev(e){

  }
  

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
            name="github_username"
             id="github_username" 
             required
             value={github_username}
             onChange={e=> setGithubUsername(e.target.value)} 
             />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs"
             id="techs"
              required
              value={techs}
             onChange={e=> setTechs(e.target.value)} 
             />
          </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" 
                type="number"
                 id="latitude"
                  required 
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                  />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                name="longitude" 
                type="number"
                  id="longitude"
                   required
                    value={longitude}
                    onChange={e => setLongitude(e.target.value)}
                    />
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