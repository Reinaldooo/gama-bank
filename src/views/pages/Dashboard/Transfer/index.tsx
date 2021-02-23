import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import ButtonGeneric from "../../../components/ButtonGeneric";
import api from '../../../../services/api'
import { Container, Header } from './style';
import WhiteCardDash from '../../../components/WhiteCardDashboard';
import { FiChevronLeft } from 'react-icons/fi';
import { isAuth } from '../../../../services/auth';

const Transfer: React.FC = () => {
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [valuer, setValuer ] = useState('')
    const [recipient, setRecipient ] = useState('')
    const [type, setType ] = useState('840')



    const history = useHistory()

    function transfer (event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const postData =  type === "840" ?{
            conta: "675",
            data: date,
            descricao: description,
            login: isAuth().user,
            valor: valuer,
            planoConta: type 
        } : {
            conta: "675",
            contaDestino: recipient,
            data: date,
            descricao: description,
            login: isAuth().user,
            valor: valuer,
            planoConta: type 
        }
        console.log(postData);
        try {
            const token =  localStorage.getItem('@tokenApp');
            api.post(`lancamentos`, postData, {headers: {Authorization: token}} ).then(
              response => { 
                  console.log(response);
                if (response.status === 200){
                  history.push('/dashboard')
                } else {
                  console.log("deu error");
                }
                }
            )
        } catch (e) {
            alert('algo deu errado')
        }
    }

  return (
    <Container>
      <Header>
        <Link to="/dashboard"> <FiChevronLeft size={30}/>Voltar</Link>
      </Header>
      <WhiteCardDash _maxWidth="100%">
        <form onSubmit={transfer}>
            <h3>Realize sua transferência</h3>
            <input value={date} onChange={ e => setDate( e.target.value) } type="date" placeholder="Data"></input>
            <input value={description} onChange={ e => setDescription( e.target.value) } type="text" placeholder="Descrição"></input>
            <input value={valuer} onChange={ e => setValuer( e.target.value) } type="number" placeholder="Qual o valor de sua transferência?"></input>
            <select value={type} onChange={ e => setType( e.target.value) }>
                <option  value="840"> Da minha conta para meu crédito</option>
                <option value="841"> Tranferência da sua conta para outra conta</option>
            </select>
            {
               type === "841" && 
               <input value={recipient} onChange={ e => setRecipient( e.target.value) } type="text" placeholder="Login do destinatário"></input>

            }
            <ButtonGeneric 
            title="Realizar transferência agora" 
            type="submit" 
            _colorHover="#FFFFFF" 
            _bgHover="#3da131" />
        </form>
      </WhiteCardDash>
    </Container>
    );
}

export default Transfer;