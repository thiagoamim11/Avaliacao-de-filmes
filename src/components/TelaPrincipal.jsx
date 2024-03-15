import React from 'react';
import { Link } from 'react-router-dom';
import './TelaPrincipal.module.css';
import { Sidebar } from './Sidebar';



export function TelaPrincipal() {
    return (
        <div>
            <Sidebar />
            <main>
                <div>
                    <h1>Santa Maria Mãe de Deus</h1>
                </div>


                {/*
            <h1>Tela Principal</h1>
            <Link to="/">
                <button>Tela De Login</button>
            </Link>
    esse trecho de codigo esta bugando o sidebar, temos que descobrir como usar os dois juntos*/}
            </main>
        </div>
    )
}

