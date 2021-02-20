import React, { useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
//
import { useToast } from "../../../../../context/toastContext";
import api from "../../../../../services/api";
import getValidationErrors from "../../../../../utils/getValidationErrors";
import InputPrimary from "../../../../components/InputPrimary";
import ButtonPrimary from "../../../../components/ButtonPrimary";

interface FormFields {
  cpf: string;
  name: string;
  fullName: string;
  passwd: string;
  confirmPasswd: string;
}

const CreateAccountForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  async function handleSubmit(data: FormFields) {
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

      setLoading(true);

      const formData = {
        cpf,
        login: name,
        nome: fullName,
        senha: passwd,
      };

      await api.post("/usuarios", formData);

      addToast({
        title: "Conta criada!",
      });
      history.push("/dashboard");
    } catch (err) {
      setLoading(false);
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
      <ButtonPrimary
        type="submit"
        title="Continuar"
        _width="100%"
        loading={loading}
      />
    </Form>
  );
};

export default CreateAccountForm;