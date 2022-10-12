import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

export default function Nav() {

    return (
        <>
            <S.Ul>
                <S.Li><Link to="/">Home</Link></S.Li>
                <S.Li><Link to="about">Sobre nós</Link></S.Li>
                <S.Li><Link to="books">Literatura</Link></S.Li>
                <S.Li><Link to="songs">Música</Link></S.Li>
                <S.Li><Link to="movies">Cinema</Link></S.Li>
                <S.Li><Link to="contactus">Contatos</Link></S.Li>
            </S.Ul>
        </>
    )
}