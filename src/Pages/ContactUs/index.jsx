import React from 'react';
import * as S from './style'

export default function Contact() {
    return (
        <S.Contactus>
            <S.Title>Fale conosco</S.Title>
            <S.Form>
                <S.InputBox>
                    <S.Label htmlFor='name'>Nome:</S.Label>
                    <S.Input id='name' type='text' />
                </S.InputBox>
                <S.InputBox>
                    <S.Label htmlFor='email'>E-mail:</S.Label>
                    <S.Input id='email' type='email' />
                </S.InputBox>
                <S.Label htmlFor='message'>Deixe sua mensagem:</S.Label>
                <S.Textarea id='message'></S.Textarea>
                <S.Button>Enviar</S.Button>
            </S.Form>
        </S.Contactus>
    );
}