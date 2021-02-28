import React from "react";
import { render } from '@testing-library/react';
import PasswordPage from "../../../views/pages/PasswordPage"

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({children}: {children : React.ReactNode}) => children
  }
})

describe('Check the render of the component PasswordPage', () => {
    it('Should render the component PasswordPage', () => {
      const { debug } = render(<PasswordPage/>)
      debug()
    })      
}) 