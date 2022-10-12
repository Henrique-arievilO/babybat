import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">Sobre nós</Link></li>
                <li><Link to="books">Literatura</Link></li>
                <li><Link to="songs">Música</Link></li>
                <li><Link to="movies">Cinema</Link></li>
                <li><Link to="contactus">Fale conosco</Link></li>
            </ul>
        </>
    )
}