import React from "react";
import {fireEvent, getByText, render} from '@testing-library/react';
import Login from "../../../views/pages/Login"

const mockedHistoryPush = jest.fn()

jest.mock("react", () => {
    return {
        useState: jest.fn()
    }
})

jest.mock("react")

jest.mock('react-router-dom', () => {
    return {
      useHistory: jest.fn(),
      Link: ({children}: {children : React.ReactNode}) => children
    }
})


describe('Check the render of the components of landing page', () => {
    it('Should render the component Section A', () => {
        const { debug, getByPlaceholderText, getByText } = render(<Login/>)
        debug()

        const usernameField = getByPlaceholderText('Digite seu usuário');
        const passwordField = getByPlaceholderText('Digite a sua senha');
        const buttonSubmit = getByText('Continuar');

        fireEvent.change(usernameField, {target: {value: 'alice123'}})
        fireEvent.change(passwordField, {target: {value: '12121212'}})

        fireEvent.click(buttonSubmit)

        expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard')

    })  
})