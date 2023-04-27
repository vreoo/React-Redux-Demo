import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number Of Cakes from Hook: {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>
                Buy Cake using Hooks
            </button>
        </div>
    );
}

export default HooksCakeContainer;
