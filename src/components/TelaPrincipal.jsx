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
                    <ul>
                        <li><img src='cartaz.webp'/></li>
                        <li><img src='cartaz1.jpg'/></li>
                        <li><img src='cartaz2.jpg'/></li>
                        <li><img src='cartaz3.png'/></li>
                    </ul>
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

