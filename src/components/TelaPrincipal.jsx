import React from 'react';
import { Link } from 'react-router-dom';
import './TelaPrincipal.module.css';


export function TelaPrincipal() {
    return (
        <div>
        <h1>Tela Principal</h1>
        <Link to = "/">
         <button>Tela De Login</button>
        </Link>
        </div>
    )
}

