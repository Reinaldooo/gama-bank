import React from "react";
import {fireEvent, getByText, render} from '@testing-library/react';
import Login from "../../../views/pages/Login"

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({children}: {children : React.ReactNode}) => children
  }
})

describe('Check the render of the component login', () => {
    it('Should render the component Login', () => {
      const { debug } = render(<Login/>)
      debug()
    })      
}) 