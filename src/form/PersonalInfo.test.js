import React from 'react'
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../store";
import userEvent from "@testing-library/user-event";
import {reduxForm} from "redux-form";
import PersonalInfo from "./PersonalInfo";

describe('PersonalInfo', () => {
    const renderComponent = () => {
        const ComponentDecorated = reduxForm({
            form: 'form',
        })(PersonalInfo);

        render(
            <Provider store={store}>
                <ComponentDecorated />
            </Provider>,
        );
    };

    test("accepts a first name as an input", () => {
        renderComponent()

        const nameInput = screen.getByText('First Name')

        userEvent.type(nameInput, 'Marco Beduschi')

        expect(nameInput).toHaveValue('Marco Beduschi')
    })
})