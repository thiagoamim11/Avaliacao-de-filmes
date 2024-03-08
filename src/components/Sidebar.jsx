import './Sidebar.module.css'
import React, { useState } from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'


export function Sidebar() {
    const [showGeneroDropdown, setShowGeneroDropdown] = useState(false)
    const genero = ["Terror", "Comédia", "Ação", "Suspense"]


    return (
        <header>
            <h4>Avaliação de <strong>Filmes</strong> & <strong>Series</strong></h4>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Filmes</a></li>
                <li><a href=''>Series</a></li>

                <li>
                    <div className='container'>
                        <a href=''>Categoria
                            <div>
                                <BsFillCaretDownFill class='seta' onClick={() => setShowGeneroDropdown(!showGeneroDropdown)} /> {/* Esse codigo é do icone da setinha para baixo */}
                            </div>
                        </a>
                    </div>
                    {showGeneroDropdown && (
                        <ul>
                            {genero.map(genero => (
                                <li key={genero}>{genero}</li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        </header >
    )
}