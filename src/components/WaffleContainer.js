import React from "react";
import { connect } from "react-redux";
import { buyWaffle } from "../redux";

function WaffleContainer(props) {
    return (
        <div>
            <h2>Number Of Waffles: {props.numOfWaffles}</h2>
            <button onClick={props.buyWaffle}>Buy Waffle</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfWaffles: state.waffle.numOfWaffles,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyWaffle: () => dispatch(buyWaffle()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WaffleContainer);
