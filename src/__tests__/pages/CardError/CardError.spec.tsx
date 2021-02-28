import React from "react";
import {fireEvent, getByText, render} from '@testing-library/react';
import CardError from "../../../views/pages/CardError"

const mockedHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
    return {
      useHistory: jest.fn(),
      Link: ({children}: {children : React.ReactNode}) => children
    }
})

describe('Check the render of the component CardError', () => {
    it('Should render the component CardError', () => {
      const { debug } = render(<CardError/>)
      debug()
    })      
}) 