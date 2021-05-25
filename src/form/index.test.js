import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleForm from './index';
import { Provider } from "react-redux";
import store from "../store";
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

    test("toggles different 'hot dog or pizza' options", () => {
        render(
            <Provider store={store}>
                <SimpleForm />
            </Provider>
        )

        const hotdogInput = screen.getByLabelText('Hotdog')
        const pizzaInput = screen.getByLabelText('Pizza')

        userEvent.click(hotdogInput)
        expect(hotdogInput).toBeChecked()
        expect(pizzaInput).not.toBeChecked()

        userEvent.click(pizzaInput)
        expect(hotdogInput).not.toBeChecked()
        expect(pizzaInput).toBeChecked()
    })
})
