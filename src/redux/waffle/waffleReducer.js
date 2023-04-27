import { BUY_WAFFLE } from "./waffleTypes";

const initialState = {
    numOfWaffles: 30,
};

const waffleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_WAFFLE:
            return {
                ...state,
                numOfWaffles: state.numOfWaffles - 1,
            };
        default:
            return state;
    }
};

export default waffleReducer;
