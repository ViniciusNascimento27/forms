import { Card } from '../Card/Card';
import './Time.css'

export const Time = ({
    nome, 
    colaboradores, 
    corFundo})=> {
    
    //console.log(colaboradores);


    return (
        <section className="time" style={{backgroundColor: corFundo}}>
                <h3>{nome}</h3>
             {colaboradores.map(colaborador => 
             <Card 
             nome={colaborador.nome} 
             imagem={colaborador.imagem}
             cargo={colaborador.cargo}
             
             />)} 
             
        </section>

    )
}