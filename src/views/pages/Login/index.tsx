import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../../services/api";
import WhiteCardGeneric from "../../components/WhiteCardGeneric";
import InputPrimary from "../../components/InputPrimary";
import { FiChevronRight } from "react-icons/fi";
import { FormLogin } from "./styles";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { useToast } from "../../../context/toastContext";
import getValidationErrors from "../../../utils/getValidationErrors";
import ButtonGeneric from "../../components/ButtonGeneric";

interface LoginForm {
  login: string;
  passwd: string;
}

const Login: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function loginSysGama(data: LoginForm) {
    const { login, passwd } = data;

    try {
      // Start by cleaning errors
      formRef.current?.setErrors({});

      const schema = Yup.object({
        login: Yup.string().min(5).required("Cpf obrigatório."),
        passwd: Yup.string().required("Campo obrigatório"),
      });

      await schema.validate(data, { abortEarly: false });

      const postData = {
        usuario: login,
        senha: passwd,
      };

      setLoading(true);

      // This has to be reset here and re-inserted below because the login
      // endpoint will break if the request has an old Authorization header
      api.defaults.headers.Authorization = null;

      await api.post(`login`, postData).then(({ data }) => {
        localStorage.setItem("@tokenApp", data.token);
        localStorage.setItem("@userApp", data.usuario.login);
        api.defaults.headers.Authorization = data.token;
      });

      addToast({
        title: "Bem-vindo!",
      });
      history.push("/dashboard");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        // This is the way to set errors with unform. Each key is the input name and
        // it will be set on the 'error' variable coming from the useField hook in the Comp
        formRef.current?.setErrors(errors);
        addToast({
          title: "Por favor confira seus dados.",
          type: "error",
        });
        return;
      }
      setLoading(false);
      addToast({
        title: "Ops, algo deu errado!",
        type: "error",
        message: "Por favor tente novamente.",
      });
    }
  }

  return (
    <>
      <WhiteCardGeneric title="Faça seu login" subtitle={null}>
        <FormLogin>
          <Form ref={formRef} onSubmit={loginSysGama}>
            <InputPrimary
              name="login"
              type="text"
              placeholder="Digite seu usuário"
            />
            <InputPrimary
              name="passwd"
              type="password"
              placeholder="Digite a sua senha"
            />
            <ButtonGeneric
              title="Continuar"
              type="submit"
              _colorHover="#FFFFFF"
              _bgHover="#8C52E5"
              icon={FiChevronRight}
              _loading={loading}
            />
            <div className="form-links">
              <Link to="/forgot-passwd">
                Esqueci Minha Senha <FiChevronRight size={14} />
              </Link>
              <Link to="/">
                Ainda não sou cliente <FiChevronRight size={14} />
              </Link>
            </div>
          </Form>
        </FormLogin>
      </WhiteCardGeneric>
    </>
  );
};

export default Login;
