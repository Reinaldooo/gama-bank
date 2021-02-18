import React, {useState, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import api from '../../../services/api'
import WhiteCard from '../../components/WhiteCardGeneric'
import InputPrimary from "../../components/InputPrimary";
import {FiChevronRight} from 'react-icons/fi';
import { FormLogin } from "./styles";

const Login: React.FC = () => {

  const [userLogin, setUserLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  function loginSysGama( event: FormEvent<HTMLFormElement> ) {
    event.preventDefault();

    const postData = {
      usuario: userLogin,
      senha: passwordLogin
    }

    api.post(`login`, postData).then(
      response => {
        console.log(response.data)
        localStorage.setItem('@tokenApp', response.data.token)
      }
    )
  }

  return (
    <>
      <WhiteCard title="Faça seu login" subtitle={null}>
          <FormLogin>
            <form onSubmit={loginSysGama}>
              <InputPrimary name="login" type="text" placeholder="Digite seu usuário" value={userLogin} onChange={e => setUserLogin(e.target.value)} />
              <InputPrimary name="password" type="text" placeholder="Digite a sua senha" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} />
              <button className="button-login" title="Continuar" type="submit">Continuar <FiChevronRight size={21}/></button>
              
              <div className="form-links">
                <Link to="/">Esqueci Minha Senha <FiChevronRight size={14}/></Link>
                <Link to="/">Ainda não sou cliente <FiChevronRight size={14}/></Link>
              </div>

            </form>
          </FormLogin>
      </WhiteCard>
    </>
  );
}

export default Login;
