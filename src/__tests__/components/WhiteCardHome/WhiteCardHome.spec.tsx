import React from "react";
import {render} from '@testing-library/react';
import WhiteCardHome from "../../../views/components/WhiteCardHome"

describe('Check the render of the component WhiteCardHome', () => {
    it('Should render the component WhiteCardHome', () => {
      const { debug } = render(<WhiteCardHome title="Welcome, Accenture!"/>)
      debug()
    })      
}) 