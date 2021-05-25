import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import SimpleForm from "./form";

const rootEl = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2>Simple Form</h2>
            <SimpleForm />
        </div>
    </Provider>,
    rootEl
);
