import React from "react";
import {useHistory} from 'react-router-dom';
import IconExclamation from '../../../assets/icon-exclamation-error.png'
import WhiteCardLoginRegister from "../../components/WhiteCardLoginRegister";
import {CardError} from "./styles"
import {AiOutlineArrowLeft} from "react-icons/ai"
import ButtonGeneric from "../../components/ButtonGeneric";

const Login: React.FC = () => {

    const history = useHistory();

    return (
        <>
            <WhiteCardLoginRegister title={null} subtitle={null}>
                <CardError>
                    <img src={IconExclamation} alt="Icon Exclamation Error" className="img-icon-exclamation"/>
                    <p className="error-title">
                        Oops, algo deu errado!<br />
                        Confime seus dados e tente novamente!
                    </p>
                    <ButtonGeneric title="Voltar" type="submit" _colorHover="#FFFFFF" _bgHover="#8C52E5" _marTop="35px"
                                   icon={AiOutlineArrowLeft} onClick={() => history.goBack()} />
                </CardError>
            </WhiteCardLoginRegister>
        </>
    );
};

export default Login;
