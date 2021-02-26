import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import ButtonGeneric from "../../../components/ButtonGeneric";
import api from "../../../../services/api";
import * as Yup from "yup";
import shortid from "shortid";
//
import WhiteCardDash from "../../../components/WhiteCardDashboard";
import { Container, Header } from "./style";
import InputPrimary from "../../../components/InputPrimary";
import { useDispatch, useSelector } from "react-redux";
import { IDashboardState } from "../../../../store/modules/accounts/types";
import { isAuth } from "../../../../services/auth";
import { useToast } from "../../../../context/toastContext";
import getValidationErrors from "../../../../utils/getValidationErrors";
import { debitTransactionSuccess } from "../../../../store/modules/accounts/actions";

interface DepositForm {
  data: string;
  descricao: string;
  valor: number;
}

const Deposit: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { debitAccount, transactionTypes } = useSelector(
    (state: IDashboardState) => state
  );
  const { addToast } = useToast();

  async function deposit({descricao, data, valor}: DepositForm) {
    try {
      // Start by cleaning errors
      formRef.current?.setErrors({});

      const schema = Yup.object({
        data: Yup.string().required("Campo obrigatório"),
        descricao: Yup.string().max(15, "máximo de 15 caracteres").min(2,"mínimo de 2 caracteres").required("Campo obrigatório"),
        valor: Yup.number().max(10000, "Valor máximo de R$ 10.000").min(2, "Valor mínimo de R$ 2,00").required("Campo obrigatório"),
      });

      await schema.validate({descricao, data, valor}, { abortEarly: false });

      const postData = {
        conta: debitAccount!.id,
        data,
        descricao,
        login: isAuth().login!,
        valor,
        planoConta: transactionTypes!["R"].id,
      };

      setLoading(true);

      await api.post(`lancamentos`, postData).then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/dashboard");
        } else {
          console.log("deu erro");
        }
      });

      dispatch(
        debitTransactionSuccess({
          ...postData,
          // This id is temporary, it will be replaced with the real one after a reload
          id: shortid(),
          planoConta: transactionTypes!["R"],
          valor: Number(valor)
        })
      );

      addToast({
        title: "Depósito realizado com sucesso!",
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
    <Container>
      <Header>
        <Link to="/dashboard">
          {" "}
          <FiChevronLeft size={30} />
          Voltar
        </Link>
      </Header>
      <WhiteCardDash _maxWidth="100%">
        <div className="form-deposit">
          <Form ref={formRef} onSubmit={deposit}>
            <h3>Realize seu depósito</h3>
            <InputPrimary name="data" type="date" placeholder="Data" />
            <InputPrimary
              name="descricao"
              type="text"
              placeholder="Descrição"
            />
            <InputPrimary
              name="valor"
              type="number"
              placeholder="Valor do deposito"
            />
            <ButtonGeneric
              title="Realizar deposito agora"
              type="submit"
              _colorHover="#FFFFFF"
              _bgHover="#3da131"
              _loading={loading}
            />
          </Form>
        </div>
      </WhiteCardDash>
    </Container>
  );
};

export default Deposit;
