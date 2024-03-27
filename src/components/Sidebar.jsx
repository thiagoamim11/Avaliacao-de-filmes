import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import styles from './Sidebar.module.css';

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
                <li><a href=''>Home</a></li>
                <li><a href=''>Filmes</a></li>
                <li><a href=''>Séries</a></li>
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
