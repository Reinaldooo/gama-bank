import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../services/api";
import { Container, Header } from "./styles";
import WhiteCardDash from "../../../components/WhiteCardDashboard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { isAuth } from "../../../../services/auth";
import InputPrimary from "../../../components/InputPrimary";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { useToast } from "../../../../context/toastContext";
import {
    IDashboardState,
    IPlanoConta,
} from "../../../../store/modules/accounts/types";
import ButtonGeneric from "../../../components/ButtonGeneric";
import * as Yup from "yup";
import getValidationErrors from "../../../../utils/getValidationErrors";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionType } from "../../../../store/modules/accounts/actions";

// IPlanoConta
const Plans: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const [type, setType] = useState("TC");
    const { addToast } = useToast();
    const dispatch = useDispatch();
    const { transactionTypes } = useSelector((state: IDashboardState) => state);
    const transactionTypesKeys =
        transactionTypes && Object.keys(transactionTypes);

    async function submitPlan(data: IPlanoConta) {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object({
                descricao: Yup.string()
                    .trim()
                    .max(10, "máximo de 10 caracteres")
                    .min(2, "mínimo de 2 caracteres")
                    .required("Campo obrigatório"),
            });

            const postData = {
                descricao: data.descricao,
                login: isAuth().login!,
                tipoMovimento: type,
            };

            await schema.validate(data, { abortEarly: false });
            setLoading(true);

            api.post(`lancamentos/planos-conta`, postData).then((res) => {
                if (res.status === 200) {
                    addToast({
                        title: "Plano cadastrado com sucesso!",
                        type: "success",
                    });
                    dispatch(
                        addTransactionType({
                            // Random number id just to include in the store
                            // After a refresh the real id will be revealed
                            id: Math.floor(Math.random() * 1000 + 100),
                            padrao: true,
                            descricao: data.descricao,
                            login: isAuth().login!,
                            tipoMovimento: type,
                        })
                    );
                    setLoading(false);
                } else {
                    console.log("deu erro");
                }
            });
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
        <Container>
            <Header>
                <Link to="/dashboard">
                    <FiChevronLeft size={30} />
                    Voltar
                </Link>
            </Header>

            <WhiteCardDash>
                <Form ref={formRef} onSubmit={submitPlan}>
                    <InputPrimary
                        name="descricao"
                        type="text"
                        placeholder="Descrição do novo plano"
                    />
                    <label htmlFor="selectPlan">
                        Por favor escolha um tipo de plano
                    </label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        name="selectPlan"
                    >
                        <option value="TC">
                            Tranferência da minha conta para meu crédito
                        </option>
                        <option value="R">Receitas</option>
                        <option value="D">Despesas</option>
                        <option value="TU">
                            Tranferência para outro usuário
                        </option>
                    </select>
                    <ButtonGeneric
                        title="Adicionar novo plano"
                        type="submit"
                        _colorHover="#FFFFFF"
                        icon={FiChevronRight}
                        _bgHover="#3da131"
                        _loading={loading}
                        _marTop="40px"
                    />
                </Form>
                <div className="section-plans">
                    {transactionTypesKeys?.map((key) =>
                        transactionTypes![key].map((type) => {
                            return type.descricao && type.tipoMovimento ? (
                                <div key={type.id} className="card">
                                    <div className="text">
                                        <h5>
                                            {type.descricao === "DEPESAS"
                                                ? "DESPESAS"
                                                : type.descricao}
                                        </h5>
                                        <p>{type.tipoMovimento}</p>
                                    </div>
                                </div>
                            ) : (
                                false
                            );
                        })
                    )}
                </div>
            </WhiteCardDash>
        </Container>
    );
};

export default Plans;
