import React from "react"
import { Sidebar } from "./Sidebar"
import styles from "./TelaCadastro.module.css"
import { Link } from "react-router-dom"



export function TelaSeries() {

    return (
        <div>
          <h1>SERIES</h1>

          <button> <Link to="/" className={styles.button5}>HOME</Link></button>
        </div>

    )
}