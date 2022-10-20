import React from 'react'
import Nav from '../Nav'
import * as S from './style'
import ImageL from '../../assets/image/wingLeft.png'
import ImageR from '../../assets/image/wingRight.png'


export default function Header() {

    return (
        <S.Header>
            <S.Container>
                <S.Img src={ImageL} alt='asa de morcego' />
                <S.Title>BabyBat</S.Title>
                <S.Img src={ImageR} alt='asa de morcego' />
            </S.Container>

            <Nav />

        </S.Header>
    )
}