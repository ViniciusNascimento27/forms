import './App.css';
import Banner from './Components/Banner/Banner';
import Forms from './Components/Forms/Forms';
import { useState } from 'react';
import { Time } from './Components/Time/Time';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const times = [
    { nome: 'Administrativo', corFundo: '#5b9bd5' },
    { nome: 'Pedagógico', corFundo: '#e7e6e6' },
    { nome: 'Professores', corFundo: '#5b9bd5' },
    { nome: 'Alunos', corFundo: '#e7e6e6' },
  ];

  return (
    <div className="App">
      <Banner />
      <Forms
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
      />

      {times.map((time) => {
        const colaboradoresDoTime = colaboradores.filter((colab) => colab.time === time.nome);
        if (colaboradoresDoTime.length === 0) return null;

        return (
          <Time
            key={time.nome}
            nome={time.nome}
            corFundo={time.corFundo}
            colaboradores={colaboradoresDoTime}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
