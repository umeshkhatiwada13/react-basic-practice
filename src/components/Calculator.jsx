import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Calculator = () => {
    const dispatch = useDispatch();
    const sumHandler = () => {
        dispatch({
            type: "increment",
        })
    };
    const diffHandler = () => {
        dispatch({
            type: "decrement",
        })
    };
    const calculatorData = useSelector(state => state.calculator)
    return (
        <>
            <div>
                Addition / Subtraction <br />
                <button onClick={sumHandler}>Add </button>
                <br />
                Count : {calculatorData.count}
                <br />
                <button onClick={diffHandler}>Subtract </button>
            </div>
        </>
    )
}

export default Calculator;