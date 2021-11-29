import React from 'react';
import { useParams } from "react-router-dom";

const Rotas = () => {

    const { id } = useParams(); 

    return (
        <div>
            <h1>Entendendo o React Router</h1>
            { id &&
                <h1>ID recebido: {id} </h1>
            }
        </div>
    )
}

export default Rotas;