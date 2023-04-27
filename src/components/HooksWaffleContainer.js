import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyWaffle } from "../redux";

function HooksWaffleContainer() {
    const numOfWaffles = useSelector((state) => state.waffle.numOfWaffles);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Waffles in Hook: {numOfWaffles}</h2>
            <button onClick={() => dispatch(buyWaffle())}>
                Buy Waffle using Hooks
            </button>
        </div>
    );
}

export default HooksWaffleContainer;
