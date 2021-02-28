import React from "react";
import {render} from '@testing-library/react';
import Header from "../../../views/components/Header"

jest.mock('react-router-dom', () => {
    return {
      useHistory: jest.fn(),
      Link: ({children}: {children : React.ReactNode}) => children
    }
})

describe('Check the render of the component Header', () => {
    it('Should render the component Header', () => {
      const { debug } = render(<Header/>)
      debug()
    })      
}) 