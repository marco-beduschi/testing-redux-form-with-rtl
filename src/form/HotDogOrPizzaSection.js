import React from 'react';
import {Field} from "redux-form";

const HotDogOrPizzaSection = () => {
    return(
        <>
            <label>Hot dog or Pizza?</label>
            <div>
                <div>
                    <label id="hotdog-or-pizza_hotdog-input-label">Hotdog</label>
                    <Field name="hotdog-or-pizza" component="input" type="radio" value="hotdog" aria-labelledby="hotdog-or-pizza_hotdog-input-label" />
                </div>
                <div>
                    <label id="hotdog-or-pizza_pizza-input-label">Pizza</label>
                    <Field name="hotdog-or-pizza" component="input" type="radio" value="pizza" aria-labelledby="hotdog-or-pizza_pizza-input-label" />
                </div>
            </div>
        </>
    )
}

export default HotDogOrPizzaSection;