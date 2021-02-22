import React, { useRef, useState } from "react";
import {useHistory} from 'react-router-dom';
import api from "../../../services/api";
import WhiteCardLoginRegister from "../../components/WhiteCardLoginRegister";
import InputPrimary from "../../components/InputPrimary";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { FormPassword } from "./styles";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { useToast } from "../../../context/toastContext";
import getValidationErrors from "../../../utils/getValidationErrors";
import ButtonGeneric from "../../components/ButtonGeneric";
import Header from "../../components/Header";

interface PasswordForm {
  user: string;
  passwd: string;
  confirmPasswd: string;
}

const PasswordPage: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function changePassGama(data: PasswordForm) {
    const { user, passwd } = data;

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object({
        user: Yup.string().required("Campo obrigatório"),
        passwd: Yup.string().required("Campo obrigatório"),
        confirmPasswd: Yup.string().oneOf(
          [Yup.ref("passwd"), null],
          "Os campos de senha não estão iguais"
        ),
      });

      await schema.validate(data, { abortEarly: false });

      const postData = {
        senha: passwd,
        usuario: user,
      };

      setLoading(true);

      const { data: senhaTemporaria } = await api.post('nova-senha', {
          email : "email@dominio.com",
          login: user,
      })
      console.log(senhaTemporaria)
      await api.post(`altera-senha`, postData, {params: {senhaTemporaria}});

      addToast({
        title: "Senha redefinida com sucesso!",
      });
      history.push('/login')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
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
      <Header />
      <WhiteCardLoginRegister title="Esqueci minha senha" subtitle="Confirme seu CPF e escolha sua nova senha.">
        <FormPassword>
          <Form ref={formRef} onSubmit={changePassGama}>
            <InputPrimary
              name="user"
              type="text"
              icon={AiOutlineUser}
              placeholder="Confirme seu usuário"
            />
            <InputPrimary
              name="passwd"
              type="password"
              icon={AiFillLock}
              placeholder="Digite sua nova senha"
            />
            <InputPrimary
              name="confirmPasswd"
              type="password"
              icon={AiFillLock}
              placeholder="Confirme sua nova senha"
            />
            <ButtonGeneric title="Enviar" type="submit" _colorHover="#FFFFFF" _bgHover="#8C52E5" icon={FiChevronRight} _loading={loading} />
          </Form>
        </FormPassword>
      </WhiteCardLoginRegister>
    </>
  );
};

export default PasswordPage;
