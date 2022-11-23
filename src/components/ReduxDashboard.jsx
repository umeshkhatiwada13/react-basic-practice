import React from 'react';
import { useSelector } from 'react-redux';

const ReduxDashboard = () => {
    // useSelector is used to retrieve data from redux store
    // since store is imported from store.js , the country array we want access
    // is registered with name first in store
    const { countries1 } = useSelector(state => state.first);
    const { countries2 } = useSelector(state => state.second);
    return (
        <>
            <div>Countries from redux1 : {countries1}</div>
            <div>Countries from redux2 : {countries2}</div>
        </>
    )
}

export default ReduxDashboard;