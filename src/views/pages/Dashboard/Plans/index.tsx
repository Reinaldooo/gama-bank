import React, { FormEvent, useState } from 'react';
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

    function getPlans() {
        const login = isAuth().login;
        api.get(`lancamentos/planos-conta`, {headers: {Authorization: login}}).then( res =>{
            console.log(res);
        })
    }


    // async function getPlans() {
    //     const response = await api.get(`lancamentos/planos-conta`);
    //     const plans = response.data;
    //     setPlanoConta([...planoConta, plans])
    //     console.log(planoConta);
    // }

  return (
      <Container>
          <Header>
            <Link to="/dashboard"> <FiChevronLeft size={30}/>Voltar</Link>
          </Header>

          <WhiteCardDash>
              <div className="card">
                  <button onClick={getPlans} >sadas</button>
                  <div className="text">
                    <h5>TITULO</h5>
                    <h6>Usuario</h6>
                    <p>Plano</p>
                  </div>
              </div>

          </WhiteCardDash>

      </Container>
  );
}

export default Plans;