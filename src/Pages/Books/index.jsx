import React from 'react';
import Modal from '../../Components/ModalBooks';
import * as S from './style'

export default function Books() {
    return (
        <S.Books>
            <S.Title>Literatura</S.Title>
            <S.P>A literatura gótica é uma vertente representante do <strong>Romantinsmo</strong> caracterizada principalmente pelo mistério, terror e obscuridade. Abaixo veremos alguns exemplos de tais obras:</S.P>
            <Modal/>
        </S.Books>
    );
}