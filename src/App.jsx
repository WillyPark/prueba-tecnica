import { useState } from "react";
import { Form } from "./components/Form";
import { Result } from "./components/Result";

export const App = () => {
    const [resultSerie, setResultSerie] = useState();

    const onResultSerie = ( newResult ) => {
        setResultSerie( newResult );
    }

    return (
        <main>
            <h1>Prueba Técnica de React</h1>
            
            <p>Dada la siguiente serie: </p>

            <img className="img_formula" src="./assets/formula.png" alt="Formula de la serie" />

            <Form onNewResult={ onResultSerie } />

            { typeof resultSerie == "number" && (<Result result={ resultSerie } />) }
        </main>
    )
}
