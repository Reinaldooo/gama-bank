import React from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
//
import gamaLogo from "../../../../assets/gama-academy-logo-horizontal-verde-branco1 1.png";
import ButtonPrimary from "../../../components/ButtonPrimary";
import InputPrimary from "../../../components/InputPrimary";
import WhiteCard from "../../../components/WhiteCard";
import * as S from "./styles";

const SectionA: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <a href="/">
          <img src={gamaLogo} alt="logo" />
        </a>
      </S.Header>
      <S.Content>
        <S.LeftContent>
          <span>Gama Bank é um projeto de nossos alunos.</span>
          <span>Já tem conta?</span>
          <ButtonPrimary title="Acessar" />
        </S.LeftContent>
        <S.RightContent>
          <WhiteCard title="Peça sua conta e cartão de crédito Gama Bank">
            <InputPrimary
              name="cpf"
              type="text"
              icon={AiOutlineUser}
              placeholder="CPF"
            />
            <InputPrimary
              name="name"
              type="text"
              icon={AiOutlineUser}
              placeholder="Nome de usuário"
            />
            <InputPrimary
              name="fullName"
              type="text"
              icon={AiOutlineUser}
              placeholder="Nome Completo"
            />
            <InputPrimary
              name="passwd"
              type="password"
              icon={AiFillLock}
              placeholder="Senha"
            />
            <InputPrimary
              name="passwd-confirm"
              type="password"
              icon={AiFillLock}
              placeholder="Confirmação de senha"
            />
            <ButtonPrimary title="Continuar" _width="100%" />
          </WhiteCard>
        </S.RightContent>
      </S.Content>
    </S.Container>
  );
};

export default SectionA;
