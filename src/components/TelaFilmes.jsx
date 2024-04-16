import React from "react"
import { Sidebar } from "./Sidebar"
import styles from "./TelaFilmes.module.css"



export function TelaFilmes() {

  return (
    <div>
      <Sidebar />
      <div className={styles.container}>
        <h1 className={styles.titulo}>FILMES</h1>
      </div>

    </div>

  )
}