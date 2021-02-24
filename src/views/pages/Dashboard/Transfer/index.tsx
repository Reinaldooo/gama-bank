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
import { debitTransactionSuccess } from '../../../../store/modules/accounts/actions';
import shortid from 'shortid';

interface ITransferForms{
   valor: number,
   data: string,
   descricao: string,
   destinatario?: string,
}


const Transfer: React.FC = () => {
 
    const dispatch = useDispatch()
    const [type, setType] = useState('840');
    const [loading, setLoading] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const {debitAccount,  transactionTypes} = useSelector(
        (state: IDashboardState) => state
      );
    const {addToast} = useToast();

    const history = useHistory()

    async function transfer( data : ITransferForms ) {
      
        const postData = type === "840" ? {
            conta: debitAccount!.id,
            data: data.data,
            descricao: data.descricao,
            login: isAuth().login,
            valor: data.valor,
            planoConta: type
        } : {
            conta:  debitAccount!.id,
            contaDestino: data.destinatario,
            data: data.data,
            descricao: data.descricao,
            login: isAuth().login,
            valor: data.valor,
            planoConta: type
        }
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object({
              data: Yup.string().required("Campo obrigatório"),
              descricao: Yup.string().required("Campo obrigatório"),
              valor: Yup.number().required("Campo obrigatório"),
              destinatario: Yup.string(),
            });
      
            await schema.validate(data, { abortEarly: false });
            setLoading(true);
            api.post(`lancamentos`, postData).then(
                response => {
                    if (response.status === 200) {

                    // if(type === "840"){
                    //     delete postData.login;
                    //     dispatch(debitTransactionSuccess({
                    //         ...postData, 
                    //         id: shortid(), planoConta: transactionTypes!["R"], valor: Number(valor)
                    //     }))
                    // }
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
                        <InputPrimary   
                            name="valor"
                            type="number"
                            placeholder="Qual o valor de sua transferência?"/>


                        <select value={type} onChange={e => setType(e.target.value)}>
                            <option value="840"> Da minha conta para meu crédito</option>
                            <option value="841"> Tranferência da sua conta para outra conta</option>
                        </select>
                        {
                            type === "841" &&
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