import React from "react";
import {render} from '@testing-library/react';
import SectionA from "../../../views/pages/Landing/SectionA"
import SectionB from "../../../views/pages/Landing/SectionB"
import SectionC from "../../../views/pages/Landing/SectionC"
import SectionD from "../../../views/pages/Landing/SectionC"
 
jest.mock('react-router-dom', () => {
    return {
      useHistory: jest.fn(),
      Link: ({children}: {children : React.ReactNode}) => children
    }
})

describe('Check the render of the components of landing page', () => {
    it('Should render the component Section A', () => {
      const { debug } = render(<SectionA/>)
      debug()
    })  

    it('Should render the component Section B', () => {
      const { debug } = render(<SectionB/>)
      debug()
    })
  
    it('Should render the component Section C', () => {
      const { debug } = render(<SectionC/>)
      debug()
    })
  
    it('Should render the component Section D', () => {
      const { debug } = render(<SectionD/>)
      debug()
    })
})