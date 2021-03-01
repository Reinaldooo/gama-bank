import React from "react";
import {render} from '@testing-library/react';
import Tooltip from "../../../views/components/Tooltip"

describe('Check the render of the component Tooltip', () => {
    it('Should render the component Tooltip', () => {
      const { debug } = render(<Tooltip/>)
      debug()
    })      
}) 