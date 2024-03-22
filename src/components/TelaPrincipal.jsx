import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TelaPrincipal.module.css';
import { Sidebar } from './Sidebar';

export function TelaPrincipal() {
    return (
        <div>   {/* fazer um carrocel aqui  */}
            <Sidebar />
            <main>
                <div className={styles.carrocel}>
                    <ul>
                        <li><img src='cartaz.webp' alt="Imagem 1" /></li>
                        <li><img src='cartaz1.jpg' alt="Imagem 2" /></li>
                        <li><img src='cartaz2.jpg' alt="Imagem 3" /></li>
                        <li><img src='cartaz3.png' alt="Imagem 4" /></li>
                    </ul>
                </div>

                <section>
                    <div className={styles.areaDeLogin}> {/*Login */}
                        <div>
                            <img src='filme1.png' />
                            <h4>Avaliação de <strong>Filmes</strong> & <strong>Séries</strong></h4>
                        </div>
                        
                        <input type='text' placeholder='Login ou e-mail' />
                        <input type='text' placeholder='Senha' />
                        <button>CONFIRMAR</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
