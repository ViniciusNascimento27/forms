import './App.css';
import Banner from './Components/Banner/Banner';
import Forms from './Components/Forms/Forms';
import { useState } from 'react';
import { Time } from './Components/Time/Time';


const App = () => {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([ ...colaboradores, colaborador ])

  }

   console.log(colaboradores)
 
   
  const times = [
   
    {
      nome: 'Administrativo',
      corFundo: '#5b9bd5',
    },

    {
      nome: 'Pedagógico',
      corFundo: '#e7e6e6',
    },

    {
      nome: 'Professores',
      corFundo: '#5b9bd5',
    },

    {
      nome: 'Alunos',
      corFundo: '#e7e6e6',
    },


  ]



  return (
    <div className="App">
      <Banner />
      <Forms times={times.map(time => time.nome)}  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}      />
      {times.map(time => <Time 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      nome={time.nome} 
      corFundo={time.corFundo} 
      key={time.nome}
      />   
      )}      

    </div>
  );
}

export default App;
