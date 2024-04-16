import React from "react";
import { Sidebar } from "./Sidebar";
import styles from "./TelaFilmes.module.css";

export function TelaFilmes() {
  return (
    <div>
      <Sidebar />
      <div className={styles.container}>
        <h1 className={styles.titulo}>FILMES</h1>

        <div className={styles.fila1}> 
  <img 
    src="https://capas-p.imagemfilmes.com.br/164747_000_p.jpg" 
    alt="Capa do filme" 
    style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
  />

   <img 
    src="https://capas-p.imagemfilmes.com.br/164856_000_p.jpg" 
    alt="Capa do filme" 
    style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
  />

   <img 
    src="https://capas-p.imagemfilmes.com.br/164869_000_p.jpg" 
    alt="Capa do filme" 
    style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
  />

 <img 
    src="https://capas-p.imagemfilmes.com.br/164859_000_p.jpg" 
    alt="Capa do filme" 
    style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
  />

 <img 
    src="https://capas-p.imagemfilmes.com.br/164815_000_p.jpg" 
    alt="Capa do filme" 
    style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
  />

<img 
    src="https://capas-p.imagemfilmes.com.br/164099_000_p.jpg" 
    alt="Capa do filme" 
    style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
  />
</div>


       
        <div className={styles.fila2}>

        <img 
          src="https://capas-p.imagemfilmes.com.br/164065_000_p.jpg" 
          alt="Capa do filme" 
          style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
        />

        <img 
          src="https://capas-p.imagemfilmes.com.br/164114_000_p.jpg" 
          alt="Capa do filme" 
          style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
        />

         <img 
          src="https://capas-p.imagemfilmes.com.br/164093_000_p.jpg" 
          alt="Capa do filme" 
          style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
        />

        
        <img 
          src="https://capas-p.imagemfilmes.com.br/164091_000_p.jpg" 
          alt="Capa do filme" 
          style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
        />

        <img 
          src="https://capas-p.imagemfilmes.com.br/164090_000_p.jpg" 
          alt="Capa do filme" 
          style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
        />

        <img 
          src="https://capas-p.imagemfilmes.com.br/164834_000_p.jpg" 
          alt="Capa do filme" 
          style={{ width: '15%', height: 'auto',margin:'10px' }} // Definindo largura de 100% e altura automática
        />








        </div>
      </div>    
    </div>
  );
}
