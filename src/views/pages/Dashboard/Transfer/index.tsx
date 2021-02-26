import React, { useRef, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import ButtonGeneric from "../../../components/ButtonGeneric";
import api from '../../../../services/api'
import {Container, Header} from './style';
import WhiteCardDash from '../../../components/WhiteCardDashboard';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {isAuth} from '../../../../services/auth';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import InputPrimary from '../../../components/InputPrimary';
import { IDashboardState } from '../../../../store/modules/accounts/types';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import getValidationErrors from '../../../../utils/getValidationErrors';
import { useToast } from '../../../../context/toastContext';
import { creditTransactionSuccess, debitTransactionSuccess } from '../../../../store/modules/accounts/actions';
import shortid from 'shortid';
import { createFloat } from '../../../../utils/formatter';
import InputPrimaryMask from '../../../components/InputPrimaryMask';

interface ITransferForms{
   valor: number,
   data: string,
   descricao: string,
   destinatario?: string,
}


const Transfer: React.FC = () => {
 
    const dispatch = useDispatch()
    const [type, setType] = useState('TC');
    const [loading, setLoading] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const {debitAccount,  transactionTypes} = useSelector(
        (state: IDashboardState) => state
      );
    const {addToast} = useToast();

    const history = useHistory()

    async function transfer( data : ITransferForms ) {

        data.valor = createFloat(data.valor)

        const postData =  {
            conta: debitAccount!.id,
            data: data.data,
            descricao: data.descricao,
            login: isAuth().login!,
            valor: data.valor,
            planoConta: transactionTypes![type].id,
            contaDestino: isAuth().login!,
        } 
        if(type === 'TU'){
            postData.contaDestino = data.destinatario!
        }
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object({
              data: Yup.string().required("Campo obrigatório"),
              descricao: Yup.string().required("Campo obrigatório"),
              valor: Yup.number().max(10000, "Valor máximo de R$ 10.000").required("Campo obrigatório"),
              destinatario: Yup.string(),
            });
      
            await schema.validate(data, { abortEarly: false });
            setLoading(true);
            api.post(`lancamentos`, postData).then(
                response => {
                  
                    if (response.status === 200) {

                        const lancamentoRedux = {
                            ...postData,
                            id: shortid(),
                            planoConta: transactionTypes!["TC"],
                            valor: Number(data.valor),
                          };

                    if(type === "TC"){
                        dispatch(debitTransactionSuccess(lancamentoRedux))
                        dispatch(creditTransactionSuccess(lancamentoRedux))
                    }else{
                        lancamentoRedux.planoConta = transactionTypes!["TU"];
                        dispatch(debitTransactionSuccess(lancamentoRedux))
                    }
                        addToast({
                            title: "Transferência realizada com sucesso",
                            type: "success",
                          });
                          history.push('/dashboard')
                    } else {
                        console.log("deu error");
                    }
                }
            )
         
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
                <Link to="/dashboard"> <FiChevronLeft size={30}/>Voltar</Link>
            </Header>
            <WhiteCardDash _maxWidth="100%">
                <div className="form-transfer">
                    <Form ref={formRef} onSubmit={transfer}>
                        <h3>Realize sua transferência</h3>
                        <InputPrimary 
                            name="data" 
                            type="date"
                            placeholder="Data"/>
                        <InputPrimary  
                            name="descricao"
                            type="text"
                            placeholder="Descrição"/>
                        <InputPrimaryMask
                            mask="BRL"  
                            name="valor"
                            type="text"
                            placeholder="Qual o valor de sua transferência?"/>


                        <select value={type} onChange={e => setType(e.target.value)}>
                            <option value="TC"> Da minha conta para meu crédito</option>
                            <option value="TU"> Da minha conta para outra pessoa</option>
                        </select>
                        {
                            type === "TU" &&
                            <InputPrimary  
                            name="destinatario" 
                            type="text"
                            placeholder="Login do destinatário"/>
                        }

                        <ButtonGeneric
                            title="Realizar transferência agora"
                            _loading ={loading}
                            type="submit"
                            _colorHover="#FFFFFF"
                            icon={FiChevronRight}
                            _bgHover="#3da131" />
                    </Form>
                </div>
            </WhiteCardDash>
        </Container>
    );
}

export default Transfer;