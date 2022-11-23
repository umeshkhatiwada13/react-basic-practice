import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./reducer";
import secondReducer from "./reducer2";
import calculator from "./calculator";

const store = configureStore({
    reducer: {
        //reducer obtained from reducer.js with the name firstReducer is registered here as first 
        //and is ready to be used in anywhere in the application
        first: firstReducer,
        second: secondReducer,
        calculator,
    }
})

export default store;