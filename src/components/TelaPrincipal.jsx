import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TelaPrincipal.module.css';
import { Sidebar } from './Sidebar';

export function TelaPrincipal() {
    return (
        <div>   {/* fazer um carrocel aqui  */}
            <Sidebar />
            <main>
                <div className="carousel-container">
                    <ul>
                        <li><img src='cartaz.webp' alt="Imagem 1" /></li>
                        <li><img src='cartaz1.jpg' alt="Imagem 2" /></li>
                        <li><img src='cartaz2.jpg' alt="Imagem 3" /></li>
                        <li><img src='cartaz3.png' alt="Imagem 4" /></li>
                    </ul>
                </div>

                <div className={styles.areaDeLogin}> {/*Login */}
                    <input placeholder='Digite o nome do usuario ou email'/>
                </div>
            </main>
        </div>
    );
}
