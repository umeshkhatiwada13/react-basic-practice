import React from 'react';
import { useDispatch } from "react-redux";

const Redux = () => {
    const dispatch = useDispatch();
    const handler = () => {
        dispatch({
            //type is trigger name which can be found in reducer.js
            //data can be send along with functionName in payload
            type: "ourFirstCase",
            payload: ["Portugal", "Brazil", "Germany"]
        })
    }
    const handler2 = () => {
        dispatch({
            //type is trigger name which can be found in reducer.js
            //data can be send along with functionName in payload
            type: "ourSecondCase",
            payload: ["Portugal", "Brazil", "Germany"]
        })
    }
    return (
        <div>
            Populate Data :<br />
            <button onClick={handler}>Click 1</button>
            <button onClick={handler2}>Click 2</button>
        </div>
    )
}

export default Redux;