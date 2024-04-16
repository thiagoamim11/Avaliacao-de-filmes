import React from "react"
import { Sidebar } from "./Sidebar"
import styles from "./TelaSeries.module.css"
import { Link } from "react-router-dom"



export function TelaSeries() {

  return (
    <div>
      <Sidebar/>
      <div className={styles.container}>
        <h1 className={styles.titulo}>SERIES</h1>
      </div>
      <button> <Link to="/" className={styles.button5}>HOME</Link></button>
    </div>

  )
}