import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import styles from './Sidebar.module.css'; // Importe o arquivo CSS usando styles
// Certifique-se de importar o arquivo CSS usando styles (ou qualquer nome que você definiu)

export function Sidebar() {
    const [showGeneroDropdown, setShowGeneroDropdown] = useState(false);
    const genero = ["Terror", "Comédia", "Ação", "Suspense"];

    const toggleGeneroDropdown = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        setShowGeneroDropdown(!showGeneroDropdown);
    };

    return (
        <header>
            <div>
            <img src='filme1.png'/>

            <h4>Avaliação de <strong>Filmes</strong> & <strong>Séries</strong></h4>
            </div>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Filmes</a></li>
                <li><a href=''>Séries</a></li>
                <li>
                    <div className={styles.container}>  { /* para funcionar a classe aqui no react é dessa maneira que faz, quebrei a cabeça por dias para descobrir isso */}
                        <a href='' onClick={toggleGeneroDropdown}>
                            Gênero
                        </a>
                        <ul className={styles["genero-dropdown"]}>
                            {genero.map((genero, index) => (
                                <li key={index}>
                                    <a className={styles.subCategorias} href={`#${genero}`} onClick={toggleGeneroDropdown}>{genero}</a></li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </header>
    );
}
