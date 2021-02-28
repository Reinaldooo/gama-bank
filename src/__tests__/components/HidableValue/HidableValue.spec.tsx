import React from "react";
import {render} from '@testing-library/react';
import HidableValue from "../../../views/components/HidableValue"

describe('Check the render of the component HidableValue', () => {
    it('Should render the component HidableValue', () => {
      const { debug } = render(<HidableValue condition={true}/>)
      debug()
    })      
}) 