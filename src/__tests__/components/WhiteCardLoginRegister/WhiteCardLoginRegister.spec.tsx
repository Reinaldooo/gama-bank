import React from "react";
import {render} from '@testing-library/react';
import WhiteCardLoginRegister from "../../../views/components/WhiteCardLoginRegister"

describe('Check the render of the component WhiteCardLoginRegister', () => {
    it('Should render the component WhiteCardLoginRegister', () => {
      const { debug } = render(<WhiteCardLoginRegister title="Welcome, Accenture!" subtitle="Contact us!"/>)
      debug()
    })      
}) 