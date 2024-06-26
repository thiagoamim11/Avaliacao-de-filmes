import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';


export function Sidebar() {
    const [showGeneroDropdown, setShowGeneroDropdown] = useState(false);
    const genero = ["Terro", "Comédia", "Ação", "Suspense","Drama", "Ficção", "Romance", "Fantasia"];

    const toggleGeneroDropdown = () => {
        setShowGeneroDropdown(!showGeneroDropdown);
    };

    return (
        <header className={styles.bug}>
            <div>
                <img src='filme1.png' alt="Filme 1" />
                <h4>Avaliação de <strong>Filmes</strong> & <strong>Séries</strong></h4>
            </div>
            <ul>
                <li><Link to="/" className={styles.seuEstilo}>Home</Link></li>
                <li><Link to="/filmes">Filmes</Link></li>
                <li><Link to="/series">Series</Link></li>
                <li>
                    <div className={styles.container}>
                        <a href='' onClick={toggleGeneroDropdown}>
                            Gênero
                        </a>
                        <ul className={`${styles["genero-dropdown"]} ${showGeneroDropdown ? styles.show : ''}`}>
                            {genero.map((genero, index) => (
                                <li key={index}>
                                    <Link className={styles.subCategorias} to={`/${genero.toLowerCase()}`} onClick={toggleGeneroDropdown}>
                                        {genero}
                                    </Link>
                                    
                                </li>

                                
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </header>
    );
}
