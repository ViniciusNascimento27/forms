import { Card } from '../Card/Card';
import './Time.css';

export const Time = ({ nome, colaboradores, corFundo }) => {
  if (colaboradores.length === 0) return null;

  return (
    <section className="time" style={{ backgroundColor: corFundo }}>
      <h3>{nome}</h3>
      <div className="cards-container">
        {colaboradores.map((colaborador, index) => (
          <Card
            key={index}
            nome={colaborador.nome}
            imagem={colaborador.imagem}
            cargo={colaborador.cargo}
            corDeFundo={corFundo}
          />
        ))}
      </div>
    </section>
  );
};
