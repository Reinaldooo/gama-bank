import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import * as Yup from "yup";
//
import gamaLogo from "../../../../assets/gama-academy-logo-horizontal-verde-branco1 1.png";
import ButtonPrimary from "../../../components/ButtonPrimary";
import InputPrimary from "../../../components/InputPrimary";
import WhiteCardHome from "../../../components/WhiteCardHome";
import * as S from "./styles";
import { useToast } from "../../../../context/toastContext";
import getValidationErrors from "../../../../utils/getValidationErrors";
import api from "../../../../services/api";

interface CreateAccountForm {
  cpf: string;
  name: string;
  fullName: string;
  passwd: string;
  confirmPasswd: string;
}

const SectionA: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  async function handleSubmit(data: CreateAccountForm) {
    // Unform automatically prevents default
    const { cpf, name, fullName, passwd } = data;
    try {
      // Start by cleaning errors
      formRef.current?.setErrors({});

      const schema = Yup.object({
        cpf: Yup.string().required("Cpf obrigatório."),
        name: Yup.string().required("Campo obrigatório"),
        fullName: Yup.string().required("Campo obrigatório"),
        passwd: Yup.string().required("Senha obrigatória"),
        confirmPasswd: Yup.string().oneOf(
          [Yup.ref("passwd"), null],
          "Senhas diferentes"
        ),
      });

      await schema.validate(data, { abortEarly: false });

      const formData = {
        cpf,
        login: name,
        nome: fullName,
        senha: passwd,
      };

      await api.post(
        "https://accenture-java-desafio.herokuapp.com/usuarios",
        formData
      );

      addToast({
        title: "Conta criada!",
      });
      history.push("/login");
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
      addToast({
        title: "Ops, algo deu errado!",
        type: "error",
        message: "Por favor tente novamente.",
      });
    }
  }

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
            <Form ref={formRef} onSubmit={handleSubmit}>
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
                name="confirmPasswd"
                type="password"
                icon={AiFillLock}
                placeholder="Confirmação de senha"
              />
              <ButtonPrimary type="submit" title="Continuar" _width="100%" />
            </Form>
          </WhiteCardHome>
        </S.RightContent>
      </S.Content>
    </S.Container>
  );
};

export default SectionA;
