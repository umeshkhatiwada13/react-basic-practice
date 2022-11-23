import { createReducer } from '@reduxjs/toolkit';

const calculator = createReducer(
    {
        count: 0,
    },
    {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
)

export default calculator;