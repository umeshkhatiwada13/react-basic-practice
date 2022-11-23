import { createReducer } from "@reduxjs/toolkit";

// The data and state set in this reducer is exported to store with the name firstReducer
const firstReducer = createReducer(
    {
        //state or variables to be used and manupulated for this reducer
        countries1: [],
    },
    {
        //trigger from redux.jsx is defined here
        //state takes current state of the object ie countries
        // and action receives value from trigger ie ourFirstCase
        ourFirstCase: (state, action) => {
            console.log("WC Winner ", action.payload[0])
            state.countries1 = action.payload[0];
        },
    });

export default firstReducer;