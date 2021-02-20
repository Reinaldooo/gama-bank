import React from "react";
import {Link, useHistory} from "react-router-dom";

//
import gamaLogo from "../../../../assets/gama-academy-logo-horizontal-verde-branco1 1.png";
import WhiteCardHome from "../../../components/WhiteCardHome";
import * as S from "./styles";
import CreateAccountForm from "./CreateAccountForm";
import {FiChevronRight} from "react-icons/fi";
import ButtonGeneric from "../../../components/ButtonGeneric";

const SectionA: React.FC = () => {
    const history = useHistory();

    return (
        <S.Container>
            <S.Header>
                <Link to="/" href="/">
                    <img src={gamaLogo} alt="logo"/>
                </Link>
            </S.Header>
            <S.Content>
                <S.LeftContent>
                    <span>Gama Bank é um projeto de nossos alunos.</span>
                    <span>Já tem conta?</span>
                    <ButtonGeneric title="Acessar" onClick={() => history.push("/login")} _width="60%" _padding="15px 25px" _fSize="18px"
                                   _bgColor="#FFFFFF" _color="#8C52E5" _colorHover="#8C52E5"
                                   _bgHover="#68DE5A" _marTop="30px" icon={FiChevronRight}/>
                </S.LeftContent>
                <S.RightContent>
                    <WhiteCardHome title="Peça sua conta e cartão de crédito Gama Bank">
                        <CreateAccountForm/>
                    </WhiteCardHome>
                </S.RightContent>
            </S.Content>
        </S.Container>
    );
};

export default SectionA;