import React from "react";
import {render} from '@testing-library/react';
import WhiteCardDashboard from "../../../views/components/WhiteCardDashboard"

describe('Check the render of the component WhiteCardDashboard', () => {
    it('Should render the component WhiteCardDashboard', () => {
      const { debug } = render(<WhiteCardDashboard />)
      debug()
    })      
}) 