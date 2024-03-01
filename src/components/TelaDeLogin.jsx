import React from 'react';
import './TelaDeLogin.module.css'
import { Link } from 'react-router-dom';


function TelaDeLogin() {
    return (
        <div>
        <h1>Hello World!</h1>
        <Link to = "/TelaPrincipal">
         <button>Tela Principal</button>
        </Link>
        </div>
    )
}

export default TelaDeLogin;