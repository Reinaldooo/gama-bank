import React from 'react'
import { Link } from "react-router-dom";
import * as S from "./styles"
import gamaLogo from "../../../assets/gama-academy-logo-horizontal-verde-branco1 1.png"

const Header = () => {
    return (
        <S.Header>
            <Link to="/" href="/">
                <img src={gamaLogo} alt="logo" className="logo-gama"/>
            </Link>
        </S.Header>
    )
}

export default Header;