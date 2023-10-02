import { useState } from "react";
import { calculateNumber } from "../helpers/calculateNumber";

export const Form = ({ onNewResult }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim() == "" || isNaN(inputValue) ) return alert("Debe escribir un número para iniciar el cálculo");

        const value = parseInt( inputValue );

        if( value < 1 || value > 100 ) return alert("Solamente se admiten valores entre 1 - 100");

        onNewResult( calculateNumber( inputValue ) );

        setInputValue("");
    }

    return (
        <form onSubmit={ onSubmit }>
            <div className="campo">
                <label id="number">Escriba el número de la serie que desea obtener: </label>
                <input 
                    type="number"
                    id="number"
                    min="0"
                    onChange={ onInputChange } 
                    value={ inputValue } 
                    autoFocus={ true }
                    autoComplete="off"
                />
            </div>

            <input type="submit" className="btn_submit" value="Calcular" />
        </form>
    )
}
