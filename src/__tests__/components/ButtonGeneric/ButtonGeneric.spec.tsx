import React from "react";
import {render} from '@testing-library/react';
import ButtonGeneric from "../../../views/components/ButtonGeneric"

describe('Check the render of the component ButtonGeneric', () => {
    it('Should render the component ButtonGeneric', () => {
      const { debug } = render(<ButtonGeneric title="Continuar"/>)
      debug()
    })      
}) 