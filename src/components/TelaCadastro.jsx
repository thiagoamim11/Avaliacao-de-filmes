import React from "react"
import { Sidebar } from "./Sidebar"
import styles from "./TelaCadastro.module.css"



export function TelaCadastro() {

    return (
        <div>
            <Sidebar />
            <main className={styles.main5}>
                <div className={styles.cadastros5}>
                    <h1 className={styles.titulo5}>C A D A S T R O</h1>
                    <div>                
                        <label className={styles.label5}>Email</label>        
                        <input type='text' placeholder='Digite seu email' />

                        <label className={styles.label5}>Senha</label>
                        <input type='text' placeholder='Digite uma senha' />

                        <label className={styles.label5}>Confirmar senha</label>
                        <input type='text' placeholder='Digite a senha novamente' />
                        <button className={styles.button5}>Confirmar</button>
                    </div>
                </div>
            </main>
        </div>

    )
}