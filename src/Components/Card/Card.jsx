import './Card.css';

export const Card = ({ nome, imagem, cargo, corDeFundo }) => {
  return (
    <div className="card" style={{ borderTop: `5px solid ${corDeFundo}` }}>
      <img src={imagem} alt={nome} />
      <div className="card-content">
        <h4>{nome}</h4>
        <p>{cargo}</p>
      </div>
    </div>
  );
};
