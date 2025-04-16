import './Card.css'


export const Card = (props) => {
    return (
        <div className='card'>
                <div className='card-header'>
                    <img  src={props.imagem} alt={props.nome}/>
                </div>

                <div className='card-footer'>
                    <h4>{props.nome}</h4>
                    <h5>{props.cargo}</h5>

                </div>

        </div>
    )
    
}