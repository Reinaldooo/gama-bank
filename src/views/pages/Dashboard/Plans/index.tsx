import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import api from '../../../../services/api'
import { Container, Header } from './styles';
import WhiteCardDash from '../../../components/WhiteCardDashboard';
import { FiChevronLeft } from 'react-icons/fi';
import { IPlanoConta } from '../../../../store/modules/accounts/types';
import { isAuth } from '../../../../services/auth';


// IPlanoConta
const Plans: React.FC = () => {

    const [planoConta, setPlanoConta] = useState<IPlanoConta[]> ([]);

      useEffect(() => {
        const login = isAuth().login;
        api.get(`lancamentos/planos-conta`, {params: {login}}).then( ({data}) =>{
            setPlanoConta(data)
        })
      }, [] )

  return (
      <Container>
          <Header>
            <Link to="/dashboard"> <FiChevronLeft size={30}/>Voltar</Link>
          </Header>

          <WhiteCardDash>
              {
                  planoConta.map(res => (
                    <div key={res.id} className="card">
                        <div className="text">
                            <h5>{res.descricao}</h5>
                            <h6>{res.login}</h6>
                            <p>{res.tipoMovimento}</p>
                        </div>
                    </div>
                  ))
              }
          </WhiteCardDash>

      </Container>
  );
}

export default Plans;