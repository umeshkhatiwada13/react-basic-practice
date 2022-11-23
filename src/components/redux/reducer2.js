import { createReducer } from "@reduxjs/toolkit";

const secondReducer = createReducer(
    {
        //state or variables to be used and manupulated for this reducer
        countries2: [],
    },
    {
        //trigger from redux.jsx is defined here
        //state takes current state of the object ie countries
        // and action receives value from trigger ie ourFirstCase
        ourSecondCase: (state, action) => {
            console.log("WC Winner 2: ", action.payload[1])
            state.countries2 = action.payload[1];
        },
    });

// export default firstReducer;
export default secondReducer ;