import React from 'react';

function Coin({ name, symbol }) {
    return (
        <div>
            <h2>{symbol}</h2>
            <h3>{name}</h3>
        </div>
    )
}

export default Coin;