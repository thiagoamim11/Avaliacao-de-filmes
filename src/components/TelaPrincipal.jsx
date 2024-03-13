import React from 'react';
import { Link } from 'react-router-dom';
import styles from  './TelaPrincipal.module.css';


function TelaPrincipal() {
    return (
        <div>
         <div className={styles.titulo}>
          <h1>FILMES EM DESTAQUE</h1>
         </div>
        </div>
    )
}

export default TelaPrincipal;