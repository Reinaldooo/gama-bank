import React from 'react';

import { Container } from './style';

const Deposit: React.FC = () => {
  return (
    
    <Container>
        <h1>Realize seu depósito</h1>
        <input type="date"></input>
        <input type="text"></input>
        <input type="number"></input>
        <button>Transferir agora</button>
    </Container>
  
    );
}

export default Deposit;