import React,{useState} from 'react';
//import Header from './Header'
//Componente é um bloco idolado de HTML CSS e JS, o qual nao interfere no restante da aplicacao
//Propriedade são as informaçoes que um componente pai passa para um componente filho
//Estadosao informaçoes mantidas pelo componente (Lembrar imutabilidade)

//o app é um componente! que retorna uma funcao
//primeira letra sempre maiuscala

function App() {
  const [counter, setCounter] = useState(0);
//useState devolve um vetor de duas posicoes
  function incrementCounter(){
   setCounter(counter+1);
  }
  return (
    <>
   <h1>Contador: {counter}</h1>
   <button onClick={incrementCounter}>Incrementar</button>
    </>
    );
}

export default App;
