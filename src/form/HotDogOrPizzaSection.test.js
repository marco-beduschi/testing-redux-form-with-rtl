import React from 'react'
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../store";
import userEvent from "@testing-library/user-event";
import HotDogOrPizzaSection from "./HotDogOrPizzaSection";
import {reduxForm} from "redux-form";

describe('HotDogOrPizzaSection', () => {
    const renderComponent = () => {
        const ComponentDecorated = reduxForm({
            form: 'form',
        })(HotDogOrPizzaSection);

        render(
            <Provider store={store}>
                <ComponentDecorated />
            </Provider>,
        );
    };

    test("toggles different 'hot dog or pizza' options", () => {
        renderComponent()

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