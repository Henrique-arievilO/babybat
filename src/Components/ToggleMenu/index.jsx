import React, { useState } from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

export default function Toggle() {
    const [active, setActive] = useState(false);
    const [status, setStatus] = useState('open');
    

    function handleToggle() {
        setActive(!active)
        if(status === 'open'){
            setStatus('close')
        }else{
            setStatus('open')
        }
    }


    return (
        <>
            {active && <>
                <S.Ul>
                    <S.Li><Link to="/">Home</Link></S.Li>
                    <S.Li><Link to="about">Sobre</Link></S.Li>
                    <S.Li><Link to="books">Literatura</Link></S.Li>
                    <S.Li><Link to="songs">Música</Link></S.Li>
                    <S.Li><Link to="movies">Cinema</Link></S.Li>
                    <S.Li><Link to="contactus">Contatos</Link></S.Li>
                </S.Ul>
            </>}
            <S.Button onClick={() => handleToggle()}>{status}</S.Button>
        </>
    )
}