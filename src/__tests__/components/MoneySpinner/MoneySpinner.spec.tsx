import React from "react";
import {render} from '@testing-library/react';
import MoneySpinner from "../../../views/components/MoneySpinner"

describe('Check the render of the component MoneySpinner', () => {
    it('Should render the component MoneySpinner', () => {
      const { debug } = render(<MoneySpinner size={12} color="blue"></MoneySpinner>)
      debug()
    })      
}) 