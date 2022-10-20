import React, { useState } from 'react'
import * as S from './style'
import Books from '../Books'

export default function Modal() {
    const [active, setActive] = useState(false);


    function handleToggle() {
        setActive(!active)
    }


    return (
        <S.Wrap>
            {Books.map(item => (
                <S.Card >
                    {active && <S.Modal id={item.id}>
                        <S.BtnClose onClick={() => handleToggle()}>&times;</S.BtnClose>
                        <h1>{item.title}</h1>
                        <h2>{item.author}</h2>
                        <p>{item.year}</p>
                    </S.Modal>}
                    <S.Button onClick={() => handleToggle()}>Veja mais</S.Button>
                </S.Card>
            ))
            }
        </S.Wrap>
    )
}