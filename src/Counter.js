import React from "react";
import { connect } from "react-redux";
import './counter.scss';
const Counter = ({value, onIncrement, onDecrement, onIncrementAsync}) => {
    return (
    <div className="counter">
        <div className="value">{value}</div>
        <button onClick={onIncrement}>Increment By Redux</button>
        <button onClick={onDecrement}>Decrement By Redux</button>
        <button onClick={onIncrementAsync}>Increment By (Saga)</button>
    </div>
)}

const mapStateToProps = (state) => ({
    value: state
})
export default connect(mapStateToProps)(Counter);