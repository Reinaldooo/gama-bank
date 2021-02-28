import React from "react";
import {render} from '@testing-library/react';
import MoneyLoader from "../../../views/components/MoneyLoader"

describe('Check the render of the component MoneyLoader', () => {
    it('Should render the component MoneyLoader', () => {
      const { debug } = render(<MoneyLoader size={12} color="blue"></MoneyLoader>)
      debug()
    })      
}) 