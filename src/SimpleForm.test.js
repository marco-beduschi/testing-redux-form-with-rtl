import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleForm from './SimpleForm';
import { Provider } from "react-redux";
import store from "./store";
import userEvent from '@testing-library/user-event'


describe('SimpleForm', () => {
    test('displays firstName input', () => {
        render(
            <Provider store={store}>
                <SimpleForm />
            </Provider>
        )

        expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    });

    test("toggles different 'sex' options", () => {
        render(
            <Provider store={store}>
                <SimpleForm />
            </Provider>
        )

        const maleInput = screen.getByLabelText('Male')
        const femaleInput = screen.getByLabelText('Female')

        userEvent.click(maleInput)
        expect(maleInput).toBeChecked()
        expect(femaleInput).not.toBeChecked()

        userEvent.click(femaleInput)
        expect(maleInput).not.toBeChecked()
        expect(femaleInput).toBeChecked()
    })
})
