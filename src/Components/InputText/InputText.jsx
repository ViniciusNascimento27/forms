import React from "react";
import './InputText.css'


const InputText = ({label,
                    placeholder,
                    required, 
                    valor, 
                    aoAlterar
        }) => {

    

    const aoDigitar = (evento) => {
         aoAlterar(evento.target.value)
       // console.log(valor)
    }


    return (
      
        <div className="input-text">  
                <label> {label} </label>
                <input 
                    placeholder={placeholder}
                    required={true}
                    onChange={aoDigitar}
                    value={valor}
                    
                
                />
        
        
        </div>
    )
}

export default InputText;