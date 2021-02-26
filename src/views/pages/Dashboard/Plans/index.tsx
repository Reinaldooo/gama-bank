import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import api from '../../../../services/api'
import { Container, Header } from './styles';
import WhiteCardDash from '../../../components/WhiteCardDashboard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { isAuth } from '../../../../services/auth';
import InputPrimary from '../../../components/InputPrimary';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useToast } from '../../../../context/toastContext';
import { IPlanoConta } from '../../../../store/modules/accounts/types';
import ButtonGeneric from '../../../components/ButtonGeneric';
import * as Yup from 'yup';
import getValidationErrors from '../../../../utils/getValidationErrors';


// IPlanoConta
const Plans: React.FC = () => {
  
    const formRef = useRef<FormHandles>(null);
    const [planoConta, setPlanoConta] = useState<IPlanoConta[]> ([]);
    const [type, setType] = useState('TC');
    const {addToast} = useToast();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        const login = isAuth().login;
        api.get(`lancamentos/planos-conta`, {params: {login}}).then( ({data}) =>{
            setPlanoConta(data)
        })
      }, [] )

      async function submitPlan( data: IPlanoConta ) {

          const postData = {
            descricao: data.descricao,
            login: isAuth().login!,
            tipoMovimento: type
          }

          try{
            formRef.current?.setErrors({});
            const schema = Yup.object({
              descricao: Yup.string().max(10, "máximo de 10 caracteres").min(2, "mínimo de 2 caracteres").required("Campo obrigatório"),
            });
            await schema.validate(data, { abortEarly: false });
            setLoading(true);
            api.post(`lancamentos/planos-conta`, postData).then(
              res =>{
                if (res.status === 200){
                  addToast({
                    title: "Plano cadastrado com sucesso!",
                    type: "success",
                  });
                  history.push('/dashboard')
                }else{
                  console.log("deu erro");
                }
              }
              )
            }
            catch(err){
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
            <Link to="/dashboard"> <FiChevronLeft size={30}/>Voltar</Link>
          </Header>

          <WhiteCardDash>

            <Form ref={formRef} onSubmit={submitPlan} >
                <InputPrimary 
                    name="descricao"
                    type="text"
                    placeholder="Descrição do novo plano"
                />
                  <select value={type} onChange={e => setType(e.target.value)}>
                            <option value="TC"> Tranferência da minha conta para meu crédito </option>
                            <option value="R"> Receitas </option>
                            <option value="D"> Despesas </option>
                            <option value="TU"> Tranferência de usuário para usuário </option>
                  </select>
                <ButtonGeneric
                            title="Realizar transferência agora"
                            type="submit"
                            _colorHover="#FFFFFF"
                            icon={FiChevronRight}
                            _bgHover="#3da131"
                            _loading={loading}/>
            </Form>
           
              {
                  planoConta.map(res => {
                    return res.descricao && res.tipoMovimento?(

                    <div key={res.id} className="card">
                        <div className="text">
                            <h5>{res.descricao}</h5>
                            <p>{res.tipoMovimento}</p>
                        </div>
                    </div>
                    ): false
                  })
              }
          </WhiteCardDash>

      </Container>
  );
}

export default Plans;