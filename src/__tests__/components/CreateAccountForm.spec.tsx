import React, { Children } from "react";
import {fireEvent, getByPlaceholderText, getByText, render} from '@testing-library/react';
import CreateAccountForm from '../../views/pages/Landing/SectionA/CreateAccountForm'

const mockedHistoryPush = jest.fn()

jest.mock("react", () => {
    return {
        useState: jest.fn()
    }
})

jest.mock('react-router-dom', () => {
    return {
        useHistory: () => {
            push: mockedHistoryPush
        },
        Link: ({children}: { children: React.ReactNode}) => children
    }
})


describe('CreateAccount Component', () => {
    it('User should be able to sign up', () => {
        const {debug, getByPlaceholderText, getByText} = render(<CreateAccountForm/>)
        debug()
        
        const cpfField = getByPlaceholderText('CPF');
        const nameField = getByPlaceholderText('Nome de usuário');
        const usernameField = getByPlaceholderText('Nome Completo');
        const passwordField = getByPlaceholderText('Senha');
        const rePasswordField = getByPlaceholderText('Confirmação de senha');
        const buttonSubmit = getByText('Continuar');
        
        fireEvent.change(cpfField, {target: {value: '98765432112'}})
        fireEvent.change(nameField, {target: {value: 'alice123'}})
        fireEvent.change(usernameField, {target: {value: 'alice123'}})
        fireEvent.change(passwordField, {target: {value: '12121212'}})
        fireEvent.change(rePasswordField, {target: {value: '12121212'}})
        
        fireEvent.click(buttonSubmit)
 
        expect(mockedHistoryPush).toHaveBeenCalledWith('/login')
    })
})