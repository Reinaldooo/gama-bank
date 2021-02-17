import React from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
//
import gamaLogo from "../../../../assets/gama-academy-logo-horizontal-verde-branco1 1.png";
import ButtonPrimary from "../../../components/ButtonPrimary";
import InputPrimary from "../../../components/InputPrimary";
import WhiteCard from "../../../components/WhiteCard";
import "./styles.scss";

const SectionA: React.FC = () => {
  return (
    <section className="sectionA">
      <header className="sectionA-header">
        <a href="/">
          <img src={gamaLogo} alt="logo" />
        </a>
      </header>
      <div className="sectionA-content">
        <div className="sectionA-content-left">
          <span>Gama Bank é um projeto de nossos alunos.</span>
          <span>Já tem conta?</span>
          <ButtonPrimary title="Acessar" />
        </div>
        <div className="sectionA-content-right">
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
        </div>
      </div>
    </section>
  );
};

export default SectionA;
