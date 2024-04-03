import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

export function Sidebar() {
    const [showGeneroDropdown, setShowGeneroDropdown] = useState(false);
    const genero = ["Terror", "Comédia", "Ação", "Suspense"];

    const toggleGeneroDropdown = () => {
        setShowGeneroDropdown(!showGeneroDropdown);
    };

    const handleGeneroClick = (genero) => {
        console.log("Clicked genre: ", genero);
        setShowGeneroDropdown(!showGeneroDropdown); // Inverte o estado do dropdown
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
                                    <a className={styles.subCategorias} href={`#${genero}`} onClick={() => handleGeneroClick(genero)}>{genero}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </header>
    );
}
