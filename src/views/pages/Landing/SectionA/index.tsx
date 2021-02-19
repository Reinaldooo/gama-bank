import React from "react";
import { Link, useHistory } from "react-router-dom";

//
import gamaLogo from "../../../../assets/gama-academy-logo-horizontal-verde-branco1 1.png";
import ButtonPrimary from "../../../components/ButtonPrimary";
import WhiteCardHome from "../../../components/WhiteCardHome";
import * as S from "./styles";
import CreateAccountForm from "./CreateAccountForm";

const SectionA: React.FC = () => {
  const history = useHistory();

  return (
    <S.Container>
      <S.Header>
        <Link to="/" href="/">
          <img src={gamaLogo} alt="logo" />
        </Link>
      </S.Header>
      <S.Content>
        <S.LeftContent>
          <span>Gama Bank é um projeto de nossos alunos.</span>
          <span>Já tem conta?</span>
          <ButtonPrimary
            title="Acessar"
            onClick={() => history.push("/login")}
          />
        </S.LeftContent>
        <S.RightContent>
          <WhiteCardHome title="Peça sua conta e cartão de crédito Gama Bank">
            <CreateAccountForm />
          </WhiteCardHome>
        </S.RightContent>
      </S.Content>
    </S.Container>
  );
};

export default SectionA;